import React, { Component } from "react";
import AddToForm from "../AddToDoForm";
import TodosList from "../TodosList";
import Filters from "../Filters";
import Search from "../Search";

const statusEnum = {
  ALL: "ALL",
  DONE: "DONE",
  NO_DONE: "NO_DONE",
};

class Todos extends Component {
  id = 1;
  state = {
    items: [
      {
        id: this.generateId(),
        label: "learning React!",
        createdAt: Date.now(),
        completed: false,
      },
    ],
    filter: "",
    status: statusEnum.ALL,
  };

  generateId() {
    return this.id++;
  }

  createTodo = (label) => {
    const todo = {
      id: this.generateId(),
      label,
      createdAt: Date.now(),
      completed: false,
    };

    this.setState((prevState) => ({
      items: [...prevState.items, todo],
    }));
  };

  handleRemove = (event) => {
    const { target } = event;
    const id = Number(target.dataset.id);
    this.setState((prevState) => {
      // const idx = prevState.items.findIndex((item) => item.id === id);
      // const items = [
      //   ...prevState.items.slice(0, idx),
      //   ...prevState.items.slice(idx + 1),
      // ];
      const items = prevState.items.filter((item) => item.id !== id);
      return {
        items,
      };
    });
  };

  getFilteredTodos(items, filterStr) {
    return items.filter((todo) =>
      todo.label.toLowerCase().includes(filterStr.toLowerCase())
    );
  }

  showFilters = (items, statusStr) => {
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

  handleStatusChange = (status) => {
    this.setState({ status });
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { items, filter, status } = this.state;
    const visibleItems = this.showFilters(
      this.getFilteredTodos(items, filter),
      status
    );

    return (
      <div className="container mt-5">
        <AddToForm createTodo={this.createTodo} />
        <Search handleFilterChange={this.handleFilterChange} />
        <Filters handleStatusChange={this.handleStatusChange} />
        <TodosList
          visibleItems={visibleItems}
          handleRemove={this.handleRemove}
        />
        {/*{!!visibleItems.length ? (*/}
        {/*  <TodosList*/}
        {/*    visibleItems={visibleItems}*/}
        {/*    handleRemove={this.handleRemove}*/}
        {/*  />*/}
        {/*) : (*/}
        {/*  <p>Not found Todos!</p>*/}
        {/*)}*/}
      </div>
    );
  }
}

export default Todos;
