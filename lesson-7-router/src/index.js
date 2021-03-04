import {StrictMode} from "react";
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from "react-dom";
import App from './components/App';
// import SearchPage from "./pages/SearchPage/SearchPage";

ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>,
    document.getElementById("root")
);


// url = http://localhost:3000/products/search
// switch(url) {
// case '/products/search':
// return <Foo />
// case /products:
// return <Bar />
// }