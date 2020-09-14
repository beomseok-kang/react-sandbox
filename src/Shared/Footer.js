import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: #DDDDDD;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  background: #272643;
  padding: 2rem;
`;

function Footer() {
  return (
    <StyledFooter>
      2020 Designed and deployed by Beom Seok Kang
    </StyledFooter>
  );
}

export default Footer;