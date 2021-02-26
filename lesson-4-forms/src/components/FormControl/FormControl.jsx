import React from "react";
import { v4 as uuid } from "uuid";

const FormControl = ({
  name,
  type = "text",
  label,
  value,
  handleChange,
  placeholder,
  ...rest
}) => {
  const id = uuid();
  return (
    <div className="mt-3">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        className="form-control"
        onChange={handleChange}
        value={value}
        {...rest}
      />
    </div>
  );
};

export default FormControl;
