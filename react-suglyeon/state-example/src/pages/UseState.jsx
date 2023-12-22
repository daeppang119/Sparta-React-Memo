import React, { useState } from "react";

export default function UseState() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div>{number}</div>
      <button
        onClick={() => {
          // 기존 업데이트 방법
          // 배치업데이트
          // setNumber(number + 1);
          // setNumber(number + 1);
          // setNumber(number + 1);
          // 렌더링의 잦다 -> 성능에 이슈가 있는것!

          // 함수형 업데이트 방법
          setNumber((currentNumber) => currentNumber + 1);
          setNumber((currentNumber) => currentNumber + 1);
          setNumber((currentNumber) => currentNumber + 1);
        }}
      >
        누르면 UP
      </button>
    </>
  );
}
