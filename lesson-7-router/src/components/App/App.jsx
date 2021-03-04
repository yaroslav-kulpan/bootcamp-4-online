import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import ProductsPage from "../../pages/ProductsPage";
import HomePage from "../../pages/HomePage";
import SearchPage from "../../pages/SearchPage";

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

const NotFoundPage = ({match}) => {
    return (
        <div>
            <h1>Not Found Page</h1>
            <p>This page {match.url}</p>
        </div>
    )
}

const App = () => {
    // state = {
    //     date: Date.now()
    // }
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/products" component={ProductsPage}/>
            <Route path="/products/:id" component={ProductsPage}/>
            <Route path="/search" component={SearchPage}/>
            <Route path="/404" component={NotFoundPage}/>
            {/*<Route render={() => <Redirect to="/404"/>}/>*/}
            <Redirect to="/404" />
            {/*<ProductsPage/>*/}
            {/*<SearchPage/>*/}
        </Switch>
    );
};

export default App;