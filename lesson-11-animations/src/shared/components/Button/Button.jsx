import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 15px 25px;
  background-color: navy;
  color: #ffffff;
  border: none;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.5);

  :disabled {
    background-color: #777;
  }
  
  :hover {
    opacity: 0.5;
  }
`;

// const Button = ({ type = "button", className, disabled = false, children }) => {
//   return (
//     <button type={type} className={className} disabled={disabled}>
//       {children}
//     </button>
//   );
// };

export default Button;
