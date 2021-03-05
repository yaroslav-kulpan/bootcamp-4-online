// import axios from "axios";
import BaseHttpService from "./base-http.service";

export default class ProductsService extends BaseHttpService {

  fetchProducts = (query) => {
    return this.get(`products${query}`);
  };

  fetchProductById = (id) => {
    return this.get(`products/${id}`);
  }

  searchProducts = (query) => {
    return this.get(`products${query}`);
  };
}

// export const client = axios.create({
//   baseURL: "https://amz-app.herokuapp.com/api/v1/",
// });
//
// export const getAllProducts = (query) => {
//   return client.get(`products${query}`);
// };
//
// export const searchProducts = (query) => {
//   return client.get(`products${query}`);
// };
