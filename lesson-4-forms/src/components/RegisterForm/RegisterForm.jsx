import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import FormControl from "../FormControl";

const INITIAL_STATE = {
  email: "",
  password: "",
  age: "",
  agreed: false,
  gender: "male",
};

class RegisterForm extends Component {
  // INITIAL_STATE = {
  //   email: "",
  //   password: "",
  // };

  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { value, type, name, checked } = target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.agreed) {
      return;
    }
    this.props.handleSubmit(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    const { email, password, age, agreed, gender } = this.state;
    // const emailId = uuid();
    // const passwordId = uuid();
    const ageId = uuid();
    return (
      <form onSubmit={this.handleSubmit}>
        {/*<div className="mt-3">*/}
        {/*  <label htmlFor={emailId}>Email*</label>*/}
        {/*  <input*/}
        {/*    id={emailId}*/}
        {/*    name="email"*/}
        {/*    type="email"*/}
        {/*    autoComplete="off"*/}
        {/*    placeholder="Email*"*/}
        {/*    className="form-control"*/}
        {/*    onChange={this.handleChange}*/}
        {/*    value={email}*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<div className="mt-3">*/}
        {/*  <label htmlFor={passwordId}>Password*</label>*/}
        {/*  <input*/}
        {/*    id={passwordId}*/}
        {/*    name="password"*/}
        {/*    type="password"*/}
        {/*    autoComplete="off"*/}
        {/*    placeholder="Password*"*/}
        {/*    className="form-control"*/}
        {/*    onChange={this.handleChange}*/}
        {/*    value={password}*/}
        {/*  />*/}
        {/*</div>*/}
        <FormControl
          name="email"
          label="Email*"
          type="email"
          placeholder="Email*"
          handleChange={this.handleChange}
          value={email}
        />
        <FormControl
          name="password"
          label="Password*"
          type="password"
          placeholder="Password*"
          handleChange={this.handleChange}
          value={password}
        />
        <select
          name="age"
          id={ageId}
          className="form-control"
          onChange={this.handleChange}
          value={age}
        >
          <option value="" disabled>
            No Selected
          </option>
          <option value="18">18</option>
          <option value="21">21</option>
          <option value="26">26</option>
        </select>

        <div className="mt-3">
          <label>
            Female
            <input
              name="gender"
              type="radio"
              checked={gender === "female"}
              onChange={this.handleChange}
              value="female"
            />
          </label>
          <label>
            Male
            <input
              name="gender"
              type="radio"
              checked={gender === "male"}
              onChange={this.handleChange}
              value="male"
            />
          </label>

          <label>
            Other
            <input
              name="gender"
              type="radio"
              checked={gender === "other"}
              onChange={this.handleChange}
              value="other"
            />
          </label>
          {/*<h3>Checked: {gender}</h3>*/}
        </div>

        <div className="mt-3">
          <input
            name="agreed"
            type="checkbox"
            onChange={this.handleChange}
            checked={agreed}
          />
        </div>

        <button
          type="submit"
          className="btn btn-lg  btn-primary mt-3"
          disabled={!agreed}
        >
          Sign Up
        </button>
      </form>
    );
  }
}

export default RegisterForm;
