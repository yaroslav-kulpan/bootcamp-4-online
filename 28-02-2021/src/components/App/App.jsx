import React, { Component } from "react";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularProgress from "@material-ui/core/CircularProgress";

import ProductsGrid from "../ProductsGrid";

class App extends Component {
  state = {
    data: [],
    pager: {
      page: 1,
      pages: [],
    },
    page: 1,
    limits: 20,
    errors: null,
    loading: false,
  };

  // componentDidMount() {
  //   fetch(`https://amz-app.herokuapp.com/api/v1/products`)
  //     .then((res) => res.json())
  //     .then(({ result: data, pager }) => this.setState({ data, pager }))
  //     .catch((errors) => {
  //       this.setState({ errors });
  //     });
  // }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    this.setState({ loading: true });
    try {
      // const {
      //   data: { result: data, pager },
      // } = await axios.get(`https://amz-app.herokuapp.com/api/v1/products`);

      const response = await axios.get(
        `https://amz-app.herokuapp.com/api/v1/products?page=${this.state.page}&limits=${this.state.limits}`
      );
      const { result: data, pager } = response.data;
      this.setState({ data, pager });
    } catch (errors) {
      this.setState({ errors });
    } finally {
      this.setState({ loading: false });
    }
  };

  // _handleHttpErrors = (errors) => {
  //   if (errors.statusCode === 404) {
  //     return {
  //       errors: "hello",
  //     };
  //   }
  //
  //   return { errors };
  // };

  handleChangePage = (_, page) => {
    this.setState({ page });
  };

  render() {
    const { data, loading, errors, pager } = this.state;
    return (
      <div>
        <CssBaseline />
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <CircularProgress />
          </div>
        )}
        <ProductsGrid products={data} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          {!!pager.pages.length && (
            <Pagination
              showFirstButton
              showLastButton
              count={pager.pages.length}
              onChange={this.handleChangePage}
              variant="outlined"
              color="primary"
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
