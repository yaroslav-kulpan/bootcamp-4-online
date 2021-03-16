import React from "react";
import styled from "styled-components";

const StyledTypography = styled.p`
  font-size: 16px;
`;

const Typography = ({ component, ...rest }) => (
  <StyledTypography as={component} {...rest} />
);

export default Typography;
