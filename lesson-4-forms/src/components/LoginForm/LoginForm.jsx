import React, { Component } from "react";
// import { v4 as uuid } from "uuid";
import FormControl from "../FormControl";

const loginForm = [
  {
    name: "email",
    type: "email",
    label: "Email*",
    placeholder: "Email*",
  },
  {
    name: "password",
    type: "password",
    label: "Password*",
    placeholder: "Password*",
  },
  {
    name: "passwordRepeat",
    type: "passwordRepeat",
    label: "Password Repeat*",
    placeholder: "Password Repeat*",
  },
];

const INITIAL_STATE = {
  email: "",
  password: "",
};

class LoginForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    // const { email, password } = this.state;
    // // const emailId = uuid();
    // // const passwordId = uuid();
    return (
      <form onSubmit={this.handleSubmit}>
        {loginForm.map((props) => (
          <FormControl
            key={props.name}
            handleChange={this.handleChange}
            value={this.state[props.name]}
            {...props}
          />
        ))}
        {/*<FormControl*/}
        {/*  name="email"*/}
        {/*  label="Email*"*/}
        {/*  type="email"*/}
        {/*  placeholder="Email*"*/}
        {/*  handleChange={this.handleChange}*/}
        {/*  value={email}*/}
        {/*/>*/}
        {/*<FormControl*/}
        {/*  name="password"*/}
        {/*  label="Password*"*/}
        {/*  type="password"*/}
        {/*  placeholder="Password*"*/}
        {/*  handleChange={this.handleChange}*/}
        {/*  value={password}*/}
        {/*/>*/}
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
        <button type="submit" className="btn btn-lg  btn-primary mt-3">
          Login
        </button>
      </form>
    );
  }
}

export default LoginForm;
