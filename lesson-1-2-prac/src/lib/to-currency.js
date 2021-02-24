const toCurrency = ({locales, currency, price}) => {
    return new Intl.NumberFormat(locales, {
        style: 'currency',
        currency,
    }).format(price)
}

export default toCurrency;