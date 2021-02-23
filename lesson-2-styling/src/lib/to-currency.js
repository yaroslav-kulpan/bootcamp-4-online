export const toCurrency = price => {
    return new Intl.NumberFormat('ukr', {
        style: 'currency',
        currency: 'uah',
    }).format(price);
};