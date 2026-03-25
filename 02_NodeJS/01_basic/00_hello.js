const c = require('ansi-colors');
function hello(name) {
  console.log(c.green(name) + '님아 안녕하세요');
}
// 실행하기
// 1) 터미널 열기 : ctrl + shift + `
// 2) cmd 로 변경 후 파일이 있는 곳으로 이동 (cd)
// 3) node 파일명.js
hello('홍길동');
