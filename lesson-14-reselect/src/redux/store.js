import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger';

import rootReducer from "./root-reducer";

// const loggerMiddleware = (store) => (next) => (action) => {
//   console.group(action.type);
//   console.info(action);
//   console.log(action.type);
//   console.groupEnd();
//
//   return next(action);
// };

// function f(store) {
//   return function (next) {
//     return function (action) {
//
//     }
//   }
// }

// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(dispatch, getState);
//   }
//
//   return next(action);
// };

// console.log(getDefaultMiddleware(), '[getDefaultMiddleware]')

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  // middleware: [...getDefaultMiddleware(), logger],
});

export default store;
