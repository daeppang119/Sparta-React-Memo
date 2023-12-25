import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counterSlice";

export default function App() {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const handlerOnPluseBtnClick = () => {
    dispatch(addNumber(1));
  };

  const handlerOnMinusBtnClick = () => {
    dispatch(minusNumber(1));
  };

  return (
    <div>
      {number}
      <button onClick={handlerOnPluseBtnClick}>+</button>
      <button onClick={handlerOnMinusBtnClick}>-</button>
    </div>
  );
}
