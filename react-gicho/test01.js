// 상수와 변수
// 상수: const(constant: 변함없는 수)
// 변수: let

// javascript에서 말하는 object는
// key - value pair
// const testObj = {
//   name: "대빵",
//   age: 23,
//   company: "Daeppang",
// };

// 구조문해 할당
// De(out 반대) + struct + ring: 객체를 뜯어버린다.
// const person = {
//   name: "대빵",
//   age: 21,
// };

// const { name, age } = person;

// 배열의 비구조화(구조분해 할당)
// const testArr = [1, 2, 3, 4, 5];
// const [one, two, three] = testArr;

// 전개 연산자(Spread Operator)
// let [name, ...rest] = ["daeppang", 21, "Suwon"];
// console.log(rest); // [ 21, 'Suwon' ]

// let tom = {
//   name: "Tom",
//   age: 10,
//   region: "Seoul",
// };

// let steve = {
//   ...tom,
//   name: "Steve",
// };

// console.log(steve); // { name: 'Steve', age: 10, region: 'Seoul' }

// Arrow Functions
// const mysum1 = (x, y) => x + y;
// const mysum2 = (x, y) => {
//   return x, y;
// };
// const mysum3 = (x, y) => ({ x: x, y: y });
// const mysum4 = (x, y) => {
//   return { x: x, y: y };
// };
// const mysum5 = function (x, y) {
//   return { x: x, y: y };
// };
// function mysum6(x, y) {
//   return { x: x, y: y };
// }
