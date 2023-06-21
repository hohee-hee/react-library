import React, { Component, useState } from "react";
import styled from "styled-components";

const Button = ({ value, type }) => {
  // const [props, setProps] = useState(1);
  const StyledButton = styled.button`
    cursor: pointer;
    background-color: var(--color-white);
    width: 4rem;
    height: 4rem;
    border-radius: 1.5rem;
    border: 0.2rem solid black;
    box-shadow: 0.1rem 0.2rem 0.2rem 0rem var(--color-gray);
  `;
  return (
    <>
      <button>버튼</button>
    </>
  );
};

export default Button;
