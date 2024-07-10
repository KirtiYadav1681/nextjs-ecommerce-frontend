import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  color: #000;
`;
const Input = ( props ) => {
  return <StyledInput {...props} />;
};

export default Input;
