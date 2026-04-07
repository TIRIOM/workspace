<template>
  <div>
    <h2>콘솔 확인하기</h2>
  </div>
</template>

<script setup>
import axios from 'axios';
// axios : 서버랑 데이터를 주고 받는 도구

//  전체 목록 조회 URL
const listUrl = '/api/todos';

// promise 체인 방식
// -> 결과를 다음으로 넘기면서 순서대로 실행하는 구조

// 4건의 목록을 조회한 후, 첫번째, 두번대 할 일을 순차적으로 조회
const requestAPI = () => {
  let todoList = []; //  전역 변수로 선언하여 모든 then에서 접근 가능하도록 함

  // 1. 전체 목록 조회
  axios
    .get(listUrl)
    .then((resp) => {
      console.log('1. 전체 목록 조회');

      // console.log(resp);
      todoList = resp.data; // 응답에서 데이터만 추출하여 todoList에 저장
      console.log('#todoList', todoList);
      // 다음 then으로 전달할 값, 첫번째 todo의 id값 전달
      return todoList[0].id; // 첫번째 todo의 id값 반환
    })
    // 2. 첫번째 todo 상세 조회
    .then((id) => {
      console.log('2. 첫번째 todo 상세 조회');
      return axios.get('/api/todos/' + id);
    })
    .then((response) => {
      console.log('## 첫 번째 todo:', response.data);
      // 두번째 todo id를 다음 then으로 전달
      return todoList[1].id;
    })
    // 3. 두번째 todo 상세 조회;
    .then((id) => {
      console.log('3. 두번째 todo 상세 조회');
      return axios.get('/api/todos/' + id).then((response) => {
        console.log('## 두 번째 todo:', response.data);
      });
    });
};

requestAPI(); // 함수 호출
</script>
