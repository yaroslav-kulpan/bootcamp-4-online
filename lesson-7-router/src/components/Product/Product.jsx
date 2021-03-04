import React from "react";
import { toCurrency } from "../../lib";

const Product = ({ name, price, thumbnail }) => {
  return (
    <div className="col-12 col-lg-4">
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
    </div>
  );
};

export default Product;
