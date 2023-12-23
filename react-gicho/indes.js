// 불변성: 메모리에 있는 값을 변경할 수 없는 것.
let num = 1;
let secondNum = 1;

// 원시데이터: 숫자, 문자, 불리언...
console.log("num과 secondNum가 일치하나요?", num === secondNum); // true

// 원시데이터가 아닌 것들: 배열, 객체, 함수...
let obj1 = {
  name: "kim",
};

obj1.name = "park"; // 객체는 불변없이 없다

let obj2 = {
  name: "kim",
};

console.log("num과 secondNum가 일치하나요?", obj1 === obj2); // false
