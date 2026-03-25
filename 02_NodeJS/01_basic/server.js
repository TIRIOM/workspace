const http = require('http');
let count = 0;
const server = http.createServer((req, res) => {
  count++;
  if (req.url === '/home') {
    console.log('/home 요청 들어옴');
    res.end('HOME' + count);
  } else if (req.url === '/about') {
    console.log('/about 요청 들어옴');

    setTimeout(() => {
      console.log('/about 작업 끝');
      res.end('ABOUT' + count);
    }, 20000);
  } else {
    res.end('NOT FOUND' + count);
  }
});

server.listen(3000, () => {
  console.log('http://localhost:3000 서버 실행 중');
});
