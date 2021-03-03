import { memo } from "react";
import Product from "../Product";

const ProductsGrid = ({ products }) => {
  const items = products.map((props) => (
    <div className="col-4" key={props._id}>
      <Product {...props} />
    </div>
  ));

  return (
    <div className="container">
      <div className="row">{items}</div>
    </div>
  );
};

export default memo(ProductsGrid);