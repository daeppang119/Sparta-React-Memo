// CSS-in-JS: 자바스크립트로 CSS코드를 작성하는 방식
// porps를 통해서 부모컴포넌트에서 자식컴포넌트로 조건부 스타일링이 가능

import React from "react";
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
`;
const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid
    ${(props) => {
      return props.borderColor;
    }};
  margin: 20px;
`;

// 박스의 색
const boxList = ["red", "blue", "green"];

// 색을 넣으면, 이름을 반환
const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "빨간박스";
    case "blue":
      return "파란박스";
    case "green":
      return "초록박스";
    default:
      return "검정박스";
  }
};

export default function App() {
  return (
    <StContainer>
      {}
      {/* <StBox borderColor="red">박스</StBox>
      <StBox borderColor="blue">박스</StBox>
      <StBox borderColor="green">박스</StBox> */}
      {boxList.map((box) => {
        return (
          <StBox key={box} borderColor={box}>
            {getBoxName(box)}
          </StBox>
        );
      })}
    </StContainer>
  );
}
