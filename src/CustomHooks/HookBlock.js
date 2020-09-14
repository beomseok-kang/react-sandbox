import React from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: #E3F6F5;
  margin: 1rem;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 50px #2C698D;
  h2 {
    padding: 1rem 1rem 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #272643;
  }
  h3 {
    padding: 3rem 1rem 1rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: #272643;
  }
  pre {
      border-radius: 1rem;
    code {
      line-height: 1.2;
      overflow-x: scroll; 
      background: none;
      padding: 1rem;
      border-radius: 0.25rem;
      display: block;
      color: #FFFFFF;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none;  /* IE 10+ */
      &::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* Chrome/Safari/Webkit */
      }
    }
  }
  code {
    display: inline-block;
    padding: 0.25rem;
    border-radius: 0.25rem;
    background: #BAE8E8;
  }
`;

const StyledComponentWrapper = styled.div`
  padding: 1rem;
  background: #FFFFFF;
  border-radius: 0.5rem;
  border: 2.5px solid #272643;
`;

function HookBlock({
  md,
  ExampleComponent
}) {
  return (
    <StyledDiv>
      <ReactMarkdown source={md} renderers={{
        "code": Highlighter
      }}/>
      <h3>Sample Component</h3>
      <StyledComponentWrapper><ExampleComponent /></StyledComponentWrapper>
    </StyledDiv>
  );
}

function Highlighter(props) {
  return (
    <SyntaxHighlighter language="javascript" style={atomOneDark}>
      {props.value}
    </SyntaxHighlighter>
  );
}

export default HookBlock;