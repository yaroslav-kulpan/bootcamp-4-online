import axios from "axios";

export default class ProductsService {
  BASE_URL = "https://amz-app.herokuapp.com/api/v1/";

  fetchProducts = (query) => {
    return axios.get(`${this.BASE_URL}products${query}`);
  };

  searchProducts = (query) => {
    return axios.get(`${this.BASE_URL}products${query}`);
  };
}
