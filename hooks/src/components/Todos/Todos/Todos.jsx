import React, { useState, useReducer } from "react";
import { v4 as uuid } from "uuid";
import AddToForm from "../AddToDoForm";
import TodosList from "../TodosList";
import Filters from "../Filters";
import Search from "../Search";
import Modal from "../../../shared/components/Modal";
import PlusIcon from "../../../shared/icons/PlusIcon";
// import useHandleChange from "../../../hooks/use-handle-change";

const statusEnum = {
  ALL: "ALL",
  DONE: "DONE",
  NO_DONE: "NO_DONE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_TO_DO":
      console.log(action.payload);
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "FILTER_CHANGE":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      throw new Error("Нет такого actions!");
  }
};

const Todos = () => {
  // const [items, setItems] = useState([]);
  const [status, setStatus] = useState(statusEnum.ALL);
  const [modal, setModal] = useState(false);

  const initialState = {
    items: [],
    filter: "",
  };

  const [{ items, filter }, dispatch] = useReducer(reducer, initialState);

  // const { field: filter, handleChange: setFilter } = useHandleChange("");

  const createTodo = (label) => {
    const payload = {
      id: uuid(),
      label,
      createdAt: Date.now(),
      completed: false,
    };
    dispatch({ type: "ADD_TO_DO", payload });
    // setItems((prevState) =>);
    handleToggleModal();
  };

  const handleRemove = (event) => {
    const { target } = event;
    const id = target.dataset.id;
    // const newItems = (prevState) => prevState.filter((item) => item.id !== id);
    dispatch({ type: "REMOVE_TO_DO", payload: id });
  };

  const getFilteredTodos = (items = [], filterStr = "") => {
    return items.filter((todo) =>
      todo.label.toLowerCase().includes(filterStr.toLowerCase())
    );
  };

  const showFilters = (items, statusStr) => {
    switch (statusStr) {
      case statusEnum.ALL:
        return items;
      case statusEnum.DONE:
        return items.filter((item) => item.completed);
      case statusEnum.NO_DONE:
        return items.filter((item) => !item.completed);
      default:
        return items;
    }
  };

  const handleToggleModal = () => {
    setModal((prevState) => !prevState);
  };

  const setFilter = ({ target: { value: payload } }) => {
    dispatch({ type: "FILTER_CHANGE", payload });
  };

  const visibleItems = showFilters(getFilteredTodos(items, filter), status);

  return (
    <div className="container mt-5">
      <Modal open={modal} onClose={handleToggleModal}>
        <AddToForm createTodo={createTodo} />
      </Modal>
      <div className="row my-4">
        <div className="col-6">
          <Search handleFilterChange={setFilter} />
        </div>
        <div className="col-6 d-flex justify-content-end">
          <Filters handleStatusChange={setStatus} status={status} />
        </div>
      </div>
      <TodosList visibleItems={visibleItems} handleRemove={handleRemove} />
      <button
        className="btn btn-lg btn-primary rounded-circle"
        onClick={handleToggleModal}
        style={{
          position: "fixed",
          right: "15%",
          bottom: "15%",
        }}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default Todos;
