import React, { Component } from "react";
import ProductsService from "../../services/products.service";
import { toCurrency } from "../../lib";
import Breadcrumbs from "../../shared/components/Breadcrumbs";
import { Link, Route } from "react-router-dom";
import CategoriesPage from "../CategoriesPage";

class ProductDetailsPage extends Component {
  httpService = new ProductsService();

  state = {
    product: null,
    loading: false,
    errors: null,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { productId } = match?.params;
    this.setState({ loading: true });
    try {
      const { data: product } = await this.httpService.fetchProductById(
        productId
      );
      this.setState({ product });
    } catch (errors) {
      this.setState({ errors });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    // if (location.state && location.state.from) {
    //   this.props.history.push(location.state.from);
    // } else {
    //   this.props.history.push('/products');
    // }
    // history.push(location.state?.from || '/products');
    history.push(location.state?.from ?? "/products");
  };

  render() {
    const { product } = this.state;
    const { match, location } = this.props;
    return (
      <div>
        <Breadcrumbs>
          <button className="btn btn-primary" onClick={this.handleGoBack}>
            Назад
          </button>
        </Breadcrumbs>
        {product && (
          <div className="container">
            <div className="row">
              <div className="col-12 offset-lg-1 col-lg-4">
                <img
                  src={product.thumbnail}
                  className="img-fluid w-100 product-cover-image border-1 rounded"
                  alt={product.name.ukr}
                />
              </div>
              <div className="col-12 offset-lg-1 col-lg-4">
                <h1>{product.name.ukr}</h1>
                <b className="d-inline-block my-2">
                  {toCurrency({ price: product.price })}
                </b>
                <p>{product.description.ukr}</p>
              </div>
            </div>
          </div>
        )}
        <div className="container">
          <Link
            to={{
              pathname: `${match.url}/categories`,
              state: { from: location.state?.from },
            }}
          >
            categories
          </Link>

          <Route path={`${match.path}/categories`} component={CategoriesPage} />
        </div>
      </div>
    );
  }
}

export default ProductDetailsPage;
