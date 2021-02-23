import React from 'react';
import PropTypes from 'prop-types';
import { toCurrency } from '../../lib/to-currency';
// import Button from '../Button/Button';
// import ButtonCss from '../ButtonCSS/ButonCss';
import ButtonModule from '../ButtonModule/ButtonModule';
import css from './Product.module.scss';

const Product = ({ thumbnail, name, price, productViews, calories }) => {
  // const { thumbnail, name, price } = props;
  const webpURL = `${thumbnail?.substring(
    0,
    thumbnail?.lastIndexOf('.'),
  )}.webp`;
  const isPopular = productViews > 20 ? <span>Popular product</span> : null;
  return (
    <article className={css.article}>
      <picture>
        <source srcSet={webpURL} type="image/webp" />
        <img src={thumbnail} className={css.image} alt={name.ukr} />
      </picture>
      {isPopular}
      <h3 className={css.article__title}>{name.ukr}</h3>
      <h5>Калории: {calories}</h5>
      <b>Цена: {toCurrency(price)}</b>
      {/*<Button disabled={!isPopular}>Buy</Button>*/}
      {/*<ButtonCss disabled={!isPopular}>Buy CSS</ButtonCss>*/}
      <ButtonModule disabled={!isPopular}>Btn Module</ButtonModule>
    </article>
  );
};

Product.defaultProps = {
  calories: 0,
};

Product.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.exact({
    ukr: PropTypes.string.isRequired,
    ru: PropTypes.string.isRequired,
    en: PropTypes.string.isRequired,
  }),
  calories: PropTypes.number,
  price: PropTypes.number.isRequired,
  productViews: PropTypes.number.isRequired,
};

export default Product;
