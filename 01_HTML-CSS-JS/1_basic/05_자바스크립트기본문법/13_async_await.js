// function getData() {
//   console.log('안녕하세요');
// }
// const { log } = require('node:console');

// const { log } = require('node:console');

async function getData() {
  // getData라는 비동기 함수 선언
  // async라는 함수 앞에 붙이면 이 함수는 promis를 반환한고
  // 함수 내에서 await 사용 가능

  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

  // fetch() :  서버에 비동기 요청을 보내는 함수
  // await : 서버에서 응답이 올 때까지 기다림 .

  // console.log(response);

  const data = await response.json();
  // json() : 응답 데이터 json -> JS 객체로 변환

  console.log(data);

  // 응답 받은 데이터로 화면 만들기
  const td = document.querySelectorAll('#tbody1 tr td');
  console.log(td);

  //textContent / innetHTML 둘 다 상관없음.
  td[0].textContent = data.userId;
  td[1].textContent = data.id;
  td[2].textContent = data.title;
}
