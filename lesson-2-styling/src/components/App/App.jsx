import React from 'react';
import ProductsList from '../ProductsList/ProductsList';

import products from '../../products';
// import { styleDiv, styledH1 } from './App.styles';

const styleDiv = {
  width: 1270,
  maxWidth: 1270,
  margin: '0 auto',
  padding: '0 15px',
};

const styledH1 = {
  fontSize: 20,
  fontWeight: 'bold',
};

const App = () => {
  return (
    <div style={styleDiv}>
      <h1 style={styledH1}>Hello World!</h1>
      <ProductsList products={products} label={null} />
    </div>
  );
};

// export default function App() {
//
// }

export default App;
