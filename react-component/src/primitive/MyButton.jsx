import React, { Component, useState } from "react";
import styled from "styled-components";

// 클래스 이름을 받아서 사용하기
// 부트스트랩처럼 type명을 정해서 그 타입에 맞는 색상을 정하고 싶다.
// 라이브러리를 :root에 만들어서 type명에 맞춰서 논리 연산자로 처리?
/* 
  if(props === 'dark'){
    background-color: var(--color-black);
    color: var(--color-white);
  }
  else if(props === 'light'){
    backgroung-color: gray;
    color: white;
  }
}
}
*/

// 사이즈별로도 필요
// 꽉 차는 full / 중간 size / small size

const MyButton = ({
  value,
  color,
  background,
  callback = () => {
    console.log("none");
  },
}) => {
  const clickEvent = () => {
    callback();
  };

  return (
    <StyledDiv>
      <StyledButton
        background={background}
        color={color}
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
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  width: 8rem;
  height: 4rem;
  border-radius: 1.5rem;
  border: 0.2rem solid black;
  box-shadow: 0.1rem 0.2rem 0.2rem 0rem black;
  transition: 0.25s;
  font-size: 1.2rem;

  &:hover {
    background-color: black;
    color: white;
  }

  &:active {
    background-color: black;
    color: white;
    box-shadow: none;
  }
`;

const StyledDiv = styled.div``;

export default MyButton;
