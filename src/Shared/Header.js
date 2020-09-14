import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tabs from './tabs.json';

const StyledHeader = styled.header`
  h1 {
    color: #DDDDDD;
    font-size: 3rem;
    letter-spacing: -3px;
    font-weight: 700;
    text-align: center;
    background: #272643;
    padding: 2rem;
  }
  ul.nav-tabs {
    padding: 0;
    margin: 0;
    list-style: none;
    height: 3rem;
    width: 100%;
    display: flex;
    justify-content: center;
    background: #2C698D;
    li {
      a {
        padding: 1rem;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #EEEEEE;
        font-weight: bold;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    li + li {
      margin-left: 2rem;
    }
  }
`;

function Header() {
  return <StyledHeader>
    <h1>
      Beom Seok's React Sandbox
    </h1>
    <ul className="nav-tabs">
      {
        tabs.map((tab) => (
          <li key={tab.tab}><Link to={tab.path}>{tab.tab}</Link></li>
        ))
      }
    </ul>
  </StyledHeader>
}

export default Header;