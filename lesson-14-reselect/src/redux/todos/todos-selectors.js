import { createSelector } from "@reduxjs/toolkit";

const getTodos = (state) => state.todos.items;
const getTodosCount = (state) => state.todos.items.length;
const getFilter = (state) => state.todos.filter;
const getLoading = (state) => state.todos.loading;
const getError = (state) => state.todos.error;

const getFilteredTodos = createSelector(
  [getTodos, getFilter],
  (items, filter) =>
    items.filter((item) => new RegExp(filter, "i").test(item.label))
);

const getCompletedCount = createSelector(
  [getTodos],
  (todos) => todos.filter((item) => item.completed).length
);

const getNoCompleted = createSelector(
  [getTodosCount, getCompletedCount],
  (count, completed) => count - completed
);

/// const cacheFunction = (...func) => {
// const cache = {};
// func.forEach(fn => {
//
// const resultFn = fn(a, b);
// if(cache) {
// return cache
// }
// cache.f1 = resultFn;
// })
//
// }
//
//
//
//

export {
  getFilteredTodos,
  getLoading,
  getError,
  getFilter,
  getTodos,
  getCompletedCount,
  getNoCompleted,
  getTodosCount,
};
