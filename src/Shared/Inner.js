import React from "react";
import styled from "styled-components";

const StyledInnerDiv = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

function Inner({ children }) {
  return <StyledInnerDiv>{children}</StyledInnerDiv>;
}

export default Inner;
