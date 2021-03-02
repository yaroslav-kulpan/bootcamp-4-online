import React, { PureComponent } from "react";
import ProductsGrid from "../../components/ProductsGrid";
import queryString from "query-string";
import ProductsService from "../../services/products.service";
import Search from "../../components/Search/Search";

class SearchPage extends PureComponent {
  productsService = new ProductsService();

  state = {
    querySubmitStr: "",
    products: [],
    loading: false,
    errors: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.querySubmitStr !== this.state.querySubmitStr) {
      this.searchProducts();
    }
  }

  stringifyQuery = (query) => {
    const queryStr = queryString.stringify(query);
    return queryStr ? `?${queryStr}` : "";
  };

  searchProducts() {
    if (!this.state.querySubmitStr) {
      this.setState({ products: [], page: 1 });
      return;
    }

    this.setState({ loading: true });
    const query = this.stringifyQuery({
      search: this.state.querySubmitStr,
      page: this.state.page,
      limits: 3,
    });

    this.productsService
      .searchProducts(query)
      .then(({ data }) =>
        this.setState({
          products: data.result,
          pager: data.pager,
        })
      )
      .catch((errors) => this.setState({ errors: errors.response.data }))
      .finally(() => this.setState({ loading: false }));
  }

  showMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    const query = this.stringifyQuery({
      search: this.state.querySubmitStr,
      page: this.state.page,
      limits: 3,
    });
    this.productsService
      .searchProducts(query)
      .then(({ data }) =>
        this.setState((prevState) => ({
          products: [...prevState.products, ...data.result],
          pager: data.pager,
        }))
      )
      .catch((errors) => this.setState({ errors: errors.response.data }))
      .finally(() => this.setState({ loading: false }));
  };

  onSubmit = (query) => {
    this.setState({ querySubmitStr: query });
  };

  render() {
    const { products } = this.state;
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              Магазин
            </a>
            <Search onSubmit={this.onSubmit} />
          </div>
        </nav>
        <ProductsGrid products={products} />
        <div className="container text-center">
          <button className="btn btn-lg btn-primary" onClick={this.showMore}>
            Load more...
          </button>
        </div>
      </>
    );
  }
}

export default SearchPage;
