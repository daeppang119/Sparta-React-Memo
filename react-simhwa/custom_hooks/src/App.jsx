import React, { useState } from "react";
import useInput from "./hooks/userInput";

export default function App() {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  const [name, onChangeNameHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();

  // const onChangeNameHandler = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangePasswordHandler = (e) => {
  //   setPassword(e.target.value);
  // };

  return (
    <>
      <input type="text" value={name} onChange={onChangeNameHandler} />
      <input
        type="password"
        value={password}
        onChange={onChangePasswordHandler}
      />
    </>
  );
}
