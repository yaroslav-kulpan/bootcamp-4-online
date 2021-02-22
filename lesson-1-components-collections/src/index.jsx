import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

// const image = React.createElement('img', {
//   src:
//     'https://res.cloudinary.com/djeaatusf/image/upload/v1610955850/vljfldiruhn5xs8cdiu7.png',
//   alt: 'Sho',
//   title: 'Sho',
// });
//
// const h1 = React.createElement('h1', null, 'Омлет');
//
// const div = React.createElement('div', {
//   className: 'root',
//   children: [image, h1],
// });

export const toCurrency = price => {
  return new Intl.NumberFormat('ukr', {
    style: 'currency',
    currency: 'uah',
  }).format(price);
};

// const h1 = <h1>Омлет</h1>;
// const image = (
//   <img
//     src="https://res.cloudinary.com/djeaatusf/image/upload/v1610955850/vljfldiruhn5xs8cdiu7.png"
//     alt="sho"
//     title="sho"
//   />
// );
//
// const price = `$99`;
//
// const btn = <button disabled>buy</button>;

// const productInView = (
//
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
