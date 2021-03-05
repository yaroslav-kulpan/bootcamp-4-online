import React from "react";
import { toCurrency } from "../../lib";
import { Link } from "react-router-dom";

const Product = ({ name, price, thumbnail, _id }) => {
  return (
    <div className="col-12 col-lg-4">
      <Link to={`/products/${_id}`} className="text-decoration-none">
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

export default Product;
