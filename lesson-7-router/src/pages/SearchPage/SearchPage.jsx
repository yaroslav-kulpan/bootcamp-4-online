import React, { Component } from "react";
import ProductsGrid from "../../components/ProductsGrid";
import queryString from "query-string";
import ProductsService from "../../services/products.service";
import Search from "../../components/Search/Search";

class SearchPage extends Component {
  productsService = new ProductsService();

  state = {
    querySubmitStr: "",
    products: [],
    pager: {},
    loading: false,
    errors: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.querySubmitStr !== this.state.querySubmitStr) {
      this.searchProducts();
    }

    if (prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  stringifyQuery = (query) => {
    const queryStr = queryString.stringify(query);
    return queryStr ? `?${queryStr}` : "";
  };

  searchProducts = () => {
    this.setState({ loading: true });

    const query = this.stringifyQuery({
      search: this.state.querySubmitStr,
      page: this.state.page,
      limits: 6,
    });
    this.productsService
      .searchProducts(query)
      .then(({ data }) => {
        this.setState((prevState) => ({
          products: [...prevState.products, ...data.result],
          pager: data.pager,
          page: prevState.page + 1,
        }));
      })
      .catch((errors) => this.setState({ errors: errors.response.data }))
      .finally(() => this.setState({ loading: false }));
  };

  onSubmit = (query) => {
    this.setState({ querySubmitStr: query, page: 1, products: [] });
  };

  render() {
    const { products, page, pager } = this.state;
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
        {page !== 1 && pager?.endPage !== pager?.currentPage && (
          <div className="container text-center">
            <button
              className="btn btn-lg btn-primary mt-3"
              onClick={this.searchProducts}
            >
              Load more...
            </button>
          </div>
        )}
      </>
    );
  }
}

export default SearchPage;
