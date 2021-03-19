import axios from "axios";

import {
  fetchTodosRequested,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodoRequested,
  addTodoSuccess,
  removeTodoFailure,
  removeTodoSuccess,
  removeTodoRequested,
  addTodoFailure,
} from "./todos-actions";

axios.defaults.baseURL = "http://localhost:3004";

const fetchTodos = () => async (dispatch, getState) => {
  console.log(getState, "[getState]");
  console.log(dispatch, "[dispatch]");
  dispatch(fetchTodosRequested());
  try {
    const { data } = await axios.get("/todos");
    dispatch(fetchTodosSuccess(data));
  } catch (errors) {
    dispatch(fetchTodosFailure(errors));
  }
};

const deleteTodo = (id) => async (dispatch) => {
  dispatch(removeTodoRequested());
  try {
    await axios.delete(`/todos/${id}`);
    dispatch(removeTodoSuccess(id));
  } catch (errors) {
    dispatch(removeTodoFailure(errors));
  }
};

const addToDo = (label) => async (dispatch) => {
  dispatch(addTodoRequested());
  try {
    const { data } = await axios.post("/todos", { label, completed: false });
    dispatch(addTodoSuccess(data));
  } catch (errors) {
    dispatch(addTodoFailure(errors));
  }
};

export { fetchTodos, deleteTodo, addToDo };
