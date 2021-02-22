import React from 'react';
import products from '../../products';

import ProductsList from '../ProductsList/ProductsList';

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <ProductsList products={products} label={null} />
      {/*<Product*/}
      {/*  price={product.price}*/}
      {/*  name={product.name}*/}
      {/*  thumbnail={product.thumbnail}*/}
      {/*/>*/}
      {/*<Product*/}
      {/*  price={product.price}*/}
      {/*  name={product.name}*/}
      {/*  thumbnail={product.thumbnail}*/}
      {/*/>*/}
      {/*<Product {...product} />*/}
    </div>
  );
};

// export default function App() {
//
// }

export default App;
