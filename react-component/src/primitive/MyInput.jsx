import React, { useState } from "react";
import styled from "styled-components";

// CJK  문제 ^__^
// 로직이 같은 부분은 custom Hook으로 빼줄 수 있다

const MyInput = ({ type, name, value, width, height }) => {
  const [data, setData] = useState(value);

  const onChangeData = (e) => {
    setData(e.target.value, console.log(data));
  };

  return (
    <StyledDiv>
      <StyledInput
        type={type}
        name={name}
        value={data}
        onChange={onChangeData}
        width={width}
        height={height}
      />
    </StyledDiv>
  );
};

const StyledInput = styled.input`
  margin: 1rem;
  padding: 1rem;
  border: none;
  border-bottom: 0.2rem solid gray;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 1.2rem;
`;

const StyledDiv = styled.div``;

export default MyInput;
