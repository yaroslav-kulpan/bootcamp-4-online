import { connect } from "react-redux";
import {
  getCompletedCount,
  getError,
  getFilter,
  getFilteredTodos,
  getLoading,
  getNoCompleted,
  getSelectedItems,
  getSelectedItemsCount,
  getTodosCount,
} from "../../redux/todos/todos-selectors";
import {
  addToDo,
  deleteTodo,
  fetchTodos,
  toggleCompleted,
} from "../../redux/todos/todos-operations";

import {
  filterChange,
  unselectItem,
  selectItem,
  deleteItems,
} from "../../redux/todos/todos-actions";

import App from "./App";

const mapStateToProps = (state) => ({
  todos: getFilteredTodos(state),
  todoCount: getTodosCount(state),
  selectItems: getSelectedItems(state),
  selectedItemsCount: getSelectedItemsCount(state),
  completedCount: getCompletedCount(state),
  noCompletedCount: getNoCompleted(state),
  filter: getFilter(state),
  loading: getLoading(state),
  error: getError(state),
});

// const fetchTodos = (dispatch) => async () => {
//   const f = await fetch(`http://localhost:3004/todos`);
//   const data = await f.json();
//   dispatch(fetchTodosAction());
// };

const mapDispatchToProps = {
  addToDo,
  deleteTodo,
  fetchTodos,
  filterChange,
  toggleCompleted,
  selectItem,
  unselectItem,
  deleteItems,
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchTodos: () => fetchTodos(dispatch)(),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
