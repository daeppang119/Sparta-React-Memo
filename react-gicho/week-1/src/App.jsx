import React from "react";
function Child() {
  return <>나는 자식입니다.</>;
}

export default function App() {
  // 여기가 자바스크립트를 쓸 수 있는 영역
  // const handleBtnClick = () => {
  //   alert("클릭");
  // };

  return (
    // JSX(JavaScript + XML - HTML)
    // <div
    //   style={{
    //     height: "100vh",
    //     display: " flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <span>이것은 내가 만든 App컴포넌트 입니다</span>
    //   <button onClick={handleBtnClick}>클릭!</button>
    // </div>
    <>
      <Child />
    </>
  );
}
