import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';

const ProductsList = ({ products, label }) => {
  const items =
    products && !!products.length ? (
      products.map(
        ({ name, price, thumbnail, _id, productViews, calories }) => (
          <Product
            key={_id}
            name={name}
            calories={calories}
            price={price}
            productViews={productViews}
            thumbnail={thumbnail}
          />
        ),
      )
    ) : (
      <p>Not Found Items</p>
    );

  const items2 =
    products &&
    products.map(({ name, price, thumbnail, _id, productViews }) => (
      <Product
        key={_id}
        name={name}
        price={price}
        productViews={productViews}
        thumbnail={thumbnail}
      />
    ));

  return (
    <div>
      <h3>{label}</h3>
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

ProductsList.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string]),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductsList;
