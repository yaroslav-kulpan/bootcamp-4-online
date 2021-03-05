import React, { Component } from "react";
import ProductsService from "../../services/products.service";

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

  render() {
    const { product } = this.state;
    return (
      <div>
        {product && (
          <>
            <img src={product.thumbnail} alt="product name" />
            <h3>Product name: {product.name.ukr}</h3>
            <b>price: {product.price}</b>
            <p>Description: {product.description.ukr}</p>
          </>
        )}
      </div>
    );
  }
}

export default ProductDetailsPage;
