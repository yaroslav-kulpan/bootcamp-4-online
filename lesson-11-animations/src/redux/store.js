import {configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from "./root-reducer";

// import {createStore} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import rootReducer from "./root-reducer";
//
// const store = createStore(rootReducer, composeWithDevTools());

// console.log(window, '[STORE]');

// store.subscribe(() => {
//     console.log(store.getState(), '[STORE_UPDATED]');
// })

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
