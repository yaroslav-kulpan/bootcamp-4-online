import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ProductsPage from "../../pages/ProductsPage";
import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";
import NotFoundPage from "../../pages/NotFoundPage";
import CommonLayout from "../../shared/layouts/CommonLayout";
import ProductDetailsPage from "../../pages/ProductDetailsPage";

// url = http://localhost:3000/products/search
// or location.pathname
// switch(url) {
// case '/products/search':
// return <Foo />
// case /products:
// return <Bar />
// default:
// return NotFoundPage
// }

const App = () => {
  // state = {
  //     date: Date.now()
  // }
  return (
    <CommonLayout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route path="/products/:productId" component={ProductDetailsPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </CommonLayout>
  );
};

export default App;
