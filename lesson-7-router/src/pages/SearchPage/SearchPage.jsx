import React, { Component } from "react";
import ProductsGrid from "../../components/ProductsGrid";
import queryString from "query-string";
import ProductsService from "../../services/products.service";
import Search from "../../components/Search/Search";

// [X] 1. Когда мы вводим одно и тоже слово в поиске, наш поиск очищается и не работает | Критичность: 10 помидоров;
// [-] 2. Пользователь может выполнить поиск с пустой строкой | Критичность: 4 помидора;
// [] 3. Сорри, разобраться с начальной отрисовкой;
// [] 4. Нужно добавить функционал handleGoBack для возврата пользователя назад.
//

class SearchPage extends Component {
  productsService = new ProductsService();

  state = {
    // querySubmitStr: "",
    products: [],
    pager: {},
    loading: false,
    errors: null,
    page: 1,
  };

  componentDidMount() {
    console.dir(this.props.location);
    console.dir(this.props.history);
    const newQuery = queryString.parse(this.props.location.search).search;
    if (newQuery) {
      this.searchProducts();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const oldQuery = queryString.parse(prevProps.location.search).search;
    const newQuery = queryString.parse(this.props.location.search).search;
    // ?page=1&search=1 ----> { search: '1', page: 1 }
    // console.log(oldQuery, newQuery)

    // if(значение state поменялось и не равно новому) {
    // выполни function
    // }
    //

    // if(значение props поменялось и не равно новым) {
    // выполни function
    // }

    if (oldQuery !== newQuery) {
      this.searchProducts();
    }

    // if (prevState.page !== this.state.page) {
    //   window.scrollTo({
    //     top: document.documentElement.scrollHeight,
    //     behavior: "smooth",
    //   });
    // }
  }

  stringifyQuery = (query) => {
    const queryStr = queryString.stringify(query);
    return queryStr ? `?${queryStr}` : "";
  };

  searchProducts = () => {
    this.setState({ loading: true });
    const search = queryString.parse(this.props.location.search).search;
    // ?page=1&search=вар -----> { search: "вар" }
    const query = this.stringifyQuery({
      search,
      page: this.state.page,
      limits: 6,
    });
    // const query = this.props.location.search;
    this.productsService
      .searchProducts(`?${query}`)
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
  // оароа оараоа оаралоалаор ---->
  onSubmit = (query) => {
    const oldQuery = queryString.parse(this.props.location.search).search;
    // ?page=1&search=вар -----> { search: "вар" }
    if (query === oldQuery) {
      return;
    }
    const search = this.stringifyQuery({ search: query });
    // { search: query, page: 1 } ---> ?page=1&search=вареник
    this.props.history.push({
      pathname: this.props.location.pathname,
      search,
    });
    this.setState({ products: [], page: 1 });
  };

  render() {
    const { products, page, pager } = this.state;
    return (
      <>
        <nav className="navbar navbar-light bg-light w-100 d-flex justify-content-center">
          <Search onSubmit={this.onSubmit} />
        </nav>
        <div className="container py-3">
          <ProductsGrid products={products} />
        </div>
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
