import React, { useState } from "react";

//  User 컴포넌트를 분리해서 구현
function User(props) {
  return (
    <div>
      {props.user.age}살 - {props.user.name}
    </div>
  );
}

export default function App() {
  //기존 users 배열
  const initalState = [
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ];

  //useState를 이용한 상태값 만들기
  const [users, setUsers] = useState(initalState);

  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  const id = Date.now();
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // 새로운 형태의 객체를 만든다
    // 객체를 배열에 더한다.
    const newUser = {
      id,
      age,
      name,
    };

    setUsers([newUser, ...users]);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <label>나이 :</label>
        <input
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <br />
        <label>이름 :</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>등록</button>
      </form>
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </>
  );
}
