import React, { Component } from "react";

class Search extends Component {
  state = {
    query: "",
  };

  handleChange = ({ target }) => {
    const { value: query } = target;
    this.setState({ query });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;
    return (
      <form className="d-flex" onSubmit={this.onSubmit}>
        <input
          className="form-control me-2"
          type="search"
          onChange={this.handleChange}
          placeholder="Search"
          aria-label="Search"
          value={query}
        />
        <button className="btn btn-outline-success" type="submit">
          Поиск
        </button>
      </form>
    );
  }
}

export default Search;
