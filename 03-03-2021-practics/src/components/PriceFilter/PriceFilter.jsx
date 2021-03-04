import React from "react";
import { toCurrency } from "../../lib";

const PriceFilter = () => {
  return (
    <form>
      <h5>Цена</h5>
      <div className="row mt-3">
        <div className="col-6">
          <input
            type="text"
            name="minPrice"
            className="form-control"
            placeholder={toCurrency({ price: 0 })}
            aria-label="default input example"
          />
        </div>
        <div className="col-6">
          <input
            type="text"
            name="maxPrice"
            className="form-control"
            placeholder={toCurrency({ price: 1000 })}
            aria-label="default input example"
          />
        </div>
      </div>
      <button className="btn btn-primary mt-3" type="submit">
        Применить
      </button>
    </form>
  );
};

export default PriceFilter;
