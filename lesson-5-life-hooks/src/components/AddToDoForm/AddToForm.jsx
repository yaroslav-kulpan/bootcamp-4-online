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
      <form className="row mt-3" onSubmit={this.handleSubmit}>
        <div className="col-9">
          <input
            name="trim"
            type="text"
            className="form-control"
            onChange={this.handleChange}
            value={trim}
          />
        </div>
        <div className="col-3">
          <Button type="submit" className="btn w-100 btn-primary">
            Добавить
          </Button>
        </div>
      </form>
    );
  }
}

export default AddToForm;
