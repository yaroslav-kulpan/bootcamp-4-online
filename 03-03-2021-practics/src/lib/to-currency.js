const toCurrency = ({ locales = 'ukr', currency = 'uah', price }) => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency,
  }).format(price);
};

export default toCurrency;