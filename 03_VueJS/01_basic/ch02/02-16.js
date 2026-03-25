let name = '홍길동';
let age = 20;
let email = 'gdhong@test.com';
//let obj = { name: name, age: age, email: email };
// ES6에서는 객체의 속성명과 변수명이 같으면,
// 속성명 생략 가능
let obj = { name, age, email };

// 왜 name에 줄 표시가 있는가?
// name이 이미 전역 객체의 속성으로 존재하기 때문.
// 브라우저에서는 window.name, node.js에서는 global.name이 이미 존재함.
// 따라서 obj.name과 충돌이 발생하여 줄 표시가 나타남.
console.log(obj);
