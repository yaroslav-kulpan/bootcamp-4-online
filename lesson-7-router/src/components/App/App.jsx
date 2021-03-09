import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import CommonLayout from "../../shared/layouts/CommonLayout";
import Loader from "../../shared/components/Loader";

const HomePage = lazy(() =>
  import("../../pages/HomePage" /* webpackChunkName: "home-page" */)
);
const ProductsPage = lazy(() =>
  import("../../pages/ProductsPage" /* webpackChunkName: "products-page" */)
);
const SearchPage = lazy(() =>
  import("../../pages/SearchPage" /* webpackChunkName: "search-page" */)
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage" /* webpackChunkName: "not-found-page" */)
);
const ProductDetailsPage = lazy(() =>
  import(
    "../../pages/ProductDetailsPage" /* webpackChunkName: "products-details-page" */
  )
);

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

// [   >> i <<   ] ----> [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ 100GB
// console.log(
//   import("../../pages/ProductDetailsPage").then((m) => console.log(m))
// );

const App = () => {
  // state = {
  //     date: Date.now()
  // }
  return (
    <CommonLayout>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route path="/products/:productId" component={ProductDetailsPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </CommonLayout>
  );
};

export default App;
