// import { Button, Modal } from "../../shared/components";
import ProductsGrid from "../ProductsGrid";

import products from "../../assets/products";

import '../../shared/css/globalize.css';

const App = () => {
    return (
        <div>
            <ProductsGrid products={products} />
        </div>
    );
};

export default App;