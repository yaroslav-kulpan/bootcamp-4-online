import React from 'react';
import { toCurrency } from '../../index';

const Product = ({ thumbnail, name, price, productViews }) => {
  // const { thumbnail, name, price } = props;
  const isPopular = productViews > 20 ? <h1>popular</h1> : null;
  return (
    <article>
      {/*<picture>*/}
      {/*<source*/}
      {/*  srcSet="https://res.cloudinary.com/djeaatusf/image/upload/v1611086805/hzhjwzlstqrpy60enmtx.webp"*/}
      {/*  type="image/webp"*/}
      {/*/>*/}
      <img src={thumbnail} alt={name.ukr} />
      {/*</picture>*/}
      {isPopular}
      <h3>{name.ukr}</h3>
      <b>Цена: {toCurrency(price)}</b>
    </article>
  );
};

export default Product;
