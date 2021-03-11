import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./todos/todos.reducer";

const store = createStore(rootReducer, composeWithDevTools());
// console.log(store, '[STORE]');
export default store;
