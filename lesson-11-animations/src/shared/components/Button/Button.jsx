import React from "react";

const Button = ({ type = "button", className, disabled = false, children }) => {
  return (
    <button type={type} className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;