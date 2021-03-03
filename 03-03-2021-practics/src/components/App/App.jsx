import React, { Component } from "react";
import axios from "axios";
import queryString from "query-string";

import ProductsGrid from "../ProductsGrid";
import Loader from "../../shared/components/Loader";

import Pagination from "../Pagination";
import "../../shared/css/globalize.css";

class App extends Component {
  state = {
    products: [],
    loading: false,
    errors: null,
    pager: {
      pages: [],
    },
    page: 1,
  };

  stringifyQuery = (query) => {
    const queryStr = queryString.stringify(query);
    return queryStr ? `?${queryStr}` : "";
  };

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.page !== this.state.page) {
      this.fetchProducts();
    }
  }

  fetchProducts() {
    this.setState({ loading: true });
    const query = this.stringifyQuery({ page: this.state.page });
    axios
      .get(`https://amz-app.herokuapp.com/api/v1/products${query}`)
      .then(({ data }) =>
        this.setState({ products: data.result, pager: data.pager })
      )
      .catch((errors) => this.setState({ errors: errors.response.data }))
      .finally(() => this.setState({ loading: false }));
  }

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   try {
  //     const {
  //       data: { result: products },
  //     } = await axios.get(`https://amz-app.herokuapp.com/api/v1/products`);
  //     this.setState({ products });
  //   } catch (errors) {
  //     this.setState({ errors: errors.response.data });
  //   } finally {
  //     this.setState({ loading: false });
  //   }
  // }

  goToPage = (event) => {
    const page = Number(event.target.dataset.page);
    this.setState({ page });
  };

  prevPage = () => {
    this.setState((prevState) => this.setState({ page: prevState.page - 1 }));
  };

  nextPage = () => {
    this.setState((prevState) => this.setState({ page: prevState.page + 1 }));
  };

  render() {
    const { products, pager, loading, errors } = this.state;
    return (
      <div>
        {loading && <Loader />}
        {errors && (
          <div className="alert alert-danger" role="alert">
            {errors.message}
          </div>
        )}
        <ProductsGrid products={products} />
        <Pagination
          pages={pager.pages}
          currentPage={pager.currentPage}
          endPage={pager.endPage}
          prevPage={this.prevPage}
          goToPage={this.goToPage}
          nextPage={this.nextPage}
        />
      </div>
    );
  }
}

export default App;
