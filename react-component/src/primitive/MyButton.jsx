import React, { Component, useState } from "react";
import styled from "styled-components";

// 클래스 이름을 받아서 사용하기

const MyButton = ({
  value = 'Button Name',
  className = 'default',
  callback = () => {
    alert("button clicked!");
  },
}) => {
  const clickEvent = () => {
    callback();
  };

  return (
    <StyledDiv>
      <StyledButton
        className={className}
        onClick={clickEvent}
      >
        {value}
      </StyledButton>
    </StyledDiv>
  );
};

// 구조분해할당불가
const StyledButton = styled.button`
  margin: 2rem;
  padding: 1rem;
  cursor: pointer;
  height: 4rem;
  border-radius: 1.5rem;
  transition: 0.25s;
  font-size: 1.2rem;

  &:hover {
    background-color: black;
    color: white;
    opacity: 0.7;
  }

  &:active {
    background-color: black;
    color: white;
    box-shadow: none;
  }

`;

const StyledDiv = styled.div`
.default {
  background-color: var(--color-black);
}

.danger {
  background-color: var(--color-red);
}

.warning {
  background-color: var(--color-yellow);
}

.primary {
  background-color: var(--color-blue);
}

.secondary {
  background-color: var(--color-skyblue);
}

.success {
  background-color: var(--color-green);
}

.info {
  background-color: var(--color-navy);
}

.light {
  background-color: var(--color-white);
}

.neutral {
  background-color: var(--color-gray);
}

.highlight {
  background-color: var(--color-purple);
}

.neutral2 {
  background-color: var(--color-brown);
}
`

export default MyButton;
