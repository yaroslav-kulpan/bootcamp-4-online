import React, { Component } from "react";
// import AddToForm from "../AddToDoForm";
import { Button } from "../../shared/components";

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
    trim: "",
    status: statusEnum.ALL,
  };

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
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
      trim: "",
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { trim } = this.state;
    this.createTodo(trim);
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

  render() {
    const { items, trim, filter, status } = this.state;
    const visibleItems = this.showFilters(
      this.getFilteredTodos(items, filter),
      status
    );

    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <input
            name="trim"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={trim}
          />
          <Button type="submit" className="btn btn-primary">
            Добавить
          </Button>
        </form>

        {/*<AddToForm />*/}
        <div className="mt-3">
          <h3>Filter:</h3>
          <input
            type="text"
            name="filter"
            className="form-control"
            onChange={this.handleChange}
            value={filter}
          />
        </div>
        <button onClick={() => this.handleStatusChange(statusEnum.ALL)}>
          {statusEnum.ALL}
        </button>
        <button onClick={() => this.handleStatusChange(statusEnum.DONE)}>
          {statusEnum.DONE}
        </button>
        <button onClick={() => this.handleStatusChange(statusEnum.NO_DONE)}>
          {statusEnum.NO_DONE}
        </button>
        <ul className="list-group mt-3">
          {visibleItems.map(({ id, label }) => (
            <li className="list-group-item" key={id}>
              <span>{label}</span>
              <button data-id={id} onClick={this.handleRemove}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
