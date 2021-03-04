import React from "react";

const ProductsToolbar = ({ children }) => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 col-lg-4 offset-lg-8 ">{children}</div>
      </div>
    </div>
  );
};

export default ProductsToolbar;
