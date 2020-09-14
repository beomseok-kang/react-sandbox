import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

function StyledHeading({ children }) {
  return (
    <StyledH2>
      {children}
    </StyledH2>
  );
}

export default StyledHeading;