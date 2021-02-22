import React from 'react';
import Product from '../Product/Product';

const ProductsList = ({ products, label }) => {
  const items =
    products && !!products.length ? (
      products.map(({ name, price, thumbnail, _id, productViews }) => (
        <Product
          key={_id}
          name={name}
          price={price}
          productViews={productViews}
          thumbnail={thumbnail}
        />
      ))
    ) : (
      <p>Not Found Items</p>
    );

  const items2 =
    products &&
    products.map(({ _id }) => (
      <li key={_id}>
        <div>{_id}</div>
      </li>
    ));

  return (
    <div>
      <h3>{label ? label : 'default label'}</h3>
      <ul>
        {items}
        {items2}
      </ul>
    </div>
  );
};

ProductsList.defaultProps = {
  products: [],
  label: 'default label',
};

export default ProductsList;
