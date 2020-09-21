import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Inner from "../Shared/Inner";

const StyledSection = styled.section`
  padding: 10rem 0;
  color: #272643;
  text-align: center;
  h2 {
    font-size: 3rem;
    font-weight: bold;
  }
  p {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  img {
    margin-top: 2rem;
  }
  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: #272643;
    color: #ffffff;
    margin: 1rem auto;
    max-width: 20rem;
    height: 8rem;
    border-radius: 2rem;
    font-size: 2rem;
    font-weight: bold;
    &:hover {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
`;

function NotFoundPage() {
  return (
    <Inner>
      <StyledSection>
        <h2>The page does not exist.</h2>
        <p>Please try different page.</p>
        <img src={require("./nf.png")} alt="noface" />
        <Link to="/">To Home</Link>
      </StyledSection>
    </Inner>
  );
}

export default NotFoundPage;
