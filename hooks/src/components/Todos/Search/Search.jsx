import React, { Component } from "react";

class Search extends Component {
  state = {
    term: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    // const { handleFilterChange } = this.props;
    this.setState({ [name]: event.target.value });
    this.props.handleFilterChange(event);
  };

  render() {
    const { term } = this.state;
    return (
      <input
        autoComplete="off"
        type="text"
        name="term"
        className="form-control"
        onChange={this.handleChange}
        value={term}
      />
    );
  }
}

export default Search;
