import React, { Component } from "react";

class Search extends Component {
  state = {
    term: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    // const { handleFilterChange } = this.props;
    this.setState({ [name]: event.target.value });
    this.props.handleFilterChange(event.target.value);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="mt-3">
        <h3>Filter:</h3>
        <input
          autoComplete="off"
          type="text"
          name="term"
          className="form-control"
          onChange={this.handleChange}
          value={term}
        />
      </div>
    );
  }
}

export default Search;
