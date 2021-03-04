import { memo } from "react";
import Product from "../Product";

const ProductsGrid = ({ products }) => {
  const items = products.map((props) => (
      <Product key={props._id} {...props} />
  ));

  return (
    <div className="container">
      <div className="row">{items}</div>
    </div>
  );
};

export default memo(ProductsGrid);