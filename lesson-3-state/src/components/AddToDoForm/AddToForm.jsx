import React, { Component } from "react";
import { Button } from "../../shared/components";

class AddToForm extends Component {
  state = {
    trim: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { trim } = this.state;
    const { createTodo } = this.props;
    createTodo(trim);
    this.setState({ trim: "" });
  };

  render() {
    const { trim } = this.state;
    return (
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
    );
  }
}

export default AddToForm;
