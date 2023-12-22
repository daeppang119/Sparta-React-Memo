// useEffect: 렌더링 될 때, 특정한 작업을 수행할 때 설정하는 훅
// 컴포넌트가 화면에 보여졌을 때, 컴포넌트가 화면에서 사라졌을 때
import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [value, setValue] = useState("");

  //  Dependency Array(의존성 배열): 배열에 값을 넣으면, 그 값이 바뀔 때만 useEffect를 실행한다!
  useEffect(() => {
    console.log("hello");

    // clean up
    return () => {
      console.log("나 사라져!");
    };
  }, []);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
}
