import React from "react";
import { Link, withRouter } from "react-router-dom";

import { toCurrency } from "../../lib";

const Product = ({ name, price, thumbnail, _id, location }) => {
  return (
    <div className="col-12 col-lg-4">
      <Link
        to={{ pathname: `/products/${_id}`, state: { from: location } }}
        className="text-decoration-none"
      >
        <div className="card mt-3">
          <img
            src={thumbnail}
            className="card-img-top card-image"
            alt={name.ukr}
            title={name.ukr}
          />
          <div className="card-body">
            <h6 className="card-title">{name.ukr}</h6>
            <p>Цена: {toCurrency({ price })}</p>
            <button className="btn btn-primary">Купить</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

/// provider ---// location, history, match
// <Route component render={(props) => }/>
// <Consumer>
// {(props)  => (
// <AnyComponent {...props}/>
// )}
// </Consumer>
//
//
//
export default withRouter(Product);
/// ----> returned new Component ??? Что в нем location, history, match
