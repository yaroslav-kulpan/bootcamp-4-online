import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  filterChange,
  fetchTodosFailure,
  fetchTodosSuccess,
  fetchTodosRequested,
  removeTodoRequested,
  removeTodoSuccess,
  removeTodoFailure,
  addTodoSuccess,
  addTodoRequested,
  addTodoFailure,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedFailure,
  unselectItem,
  selectItem,
  deleteItems,
} from "./todos-actions";
import deleteItemById from "../../lib/delete-item-by-id";

const loading = createReducer(false, {
  [fetchTodosRequested]: () => true,
  [fetchTodosSuccess]: () => false,
  [fetchTodosFailure]: () => false,
  [addTodoRequested]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoFailure]: () => false,
  [removeTodoRequested]: () => true,
  [removeTodoSuccess]: () => false,
  [removeTodoFailure]: () => false,
  [toggleCompletedRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedFailure]: () => false,
});

const items = createReducer([], {
  [fetchTodosSuccess]: (_, { payload }) => payload,
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [removeTodoSuccess]: (state, { payload }) => {
    return deleteItemById(state, "id", Number(payload));
    // const index = state.findIndex(({ id }) => id === Number(payload));
    // return [...state.slice(0, index), ...state.slice(index + 1)];
  },
  [deleteItems]: (state, { payload }) => {
    return state.filter(
      (item) => !payload.some((deleteId) => item.id === Number(deleteId))
    );
  },
  [toggleCompletedSuccess]: (state, { payload }) => {
    const index = state.findIndex((item) => item.id === payload.id);
    return [...state.slice(0, index), payload, ...state.slice(index + 1)];
  },
});

const selectedItems = createReducer([], {
  [selectItem]: (state, { payload }) => [...state, payload],
  [deleteItems]: (state, { payload }) => {
    return state.filter(
      (item) => !payload.some((deletedId) => +item === +deletedId)
    ); // or return [];
  },
  [unselectItem]: (state, { payload }) => {
    const index = state.findIndex((item) => +item === +payload);
    return [...state.slice(0, index), ...state.slice(index + 1)];
  },
});

const handleError = (_, { payload }) => payload.response.data;
const clearError = () => null;

const error = createReducer(null, {
  [fetchTodosRequested]: clearError,
  [fetchTodosFailure]: handleError,
  [addTodoRequested]: clearError,
  [addTodoFailure]: handleError,
  [removeTodoRequested]: clearError,
  [removeTodoFailure]: handleError,
  [toggleCompletedRequest]: clearError,
  [toggleCompletedFailure]: handleError,
});

const filter = createReducer("", {
  [filterChange]: (_, { payload }) => payload,
});

const todos = combineReducers({
  items,
  selectedItems,
  loading,
  error,
  filter,
});

export default todos;
