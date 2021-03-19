import { createAction, nanoid } from "@reduxjs/toolkit";

const addToDo = createAction("todos/add", (label) => {
  return {
    payload: {
      id: nanoid(),
      label,
    },
  };
});

const removeToDo = createAction("todos/remove");
const filterChange = createAction("todos/filter");

// getAll
const fetchTodosRequested = createAction("todos/fetch-todos-requested");
const fetchTodosSuccess = createAction("todos/fetch-todos-success");
const fetchTodosFailure = createAction("todos/fetch-todos-failure");

// create
const addTodoRequested = createAction("todos/add-todo-requested");
const addTodoSuccess = createAction("todos/add-todo-success");
const addTodoFailure = createAction("todos/add-todo-failure");

// delete
const removeTodoRequested = createAction("todos/remove-todo-requested");
const removeTodoSuccess = createAction("todos/remove-todo-success");
const removeTodoFailure = createAction("todos/remove-todo-failure");

// const fetchTodosAction = createAction("todos/fetch-todos");

export {
  addToDo,
  removeToDo,
  filterChange,
  fetchTodosRequested,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodoFailure,
  addTodoRequested,
  addTodoSuccess,
  removeTodoFailure,
  removeTodoSuccess,
  removeTodoRequested,
};
