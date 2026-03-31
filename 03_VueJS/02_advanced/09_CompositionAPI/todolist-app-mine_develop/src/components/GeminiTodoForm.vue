<template>
  <div class="mb-3">
    <textarea
      v-model="inputText"
      class="form-control mb-2"
      rows="3"
      placeholder="하고 싶은 일들을 자유롭게 적어보세요. AI가 ToDolist를 만들어줘요."
    ></textarea>
    <button
      class="btn btn-primary w-100"
      @click="generateTodos"
      :disabled="!inputText.trim()"
    >
      <!--입력이 없으면 버튼 비활성화,  trim()은 공백 제거 -->
      AI로 생성하기
    </button>
    <div v-if="errorMsg" class="text-danger mt-1 small">{{ errorMsg }}</div>
  </div>
</template>

<script setup>
// [Composition API 변환]
// 기존 Options API:
// export default {
//   name: 'GeminiTodoForm',
//   emits: ['add-todos'],
//   data() {
//     return {
//       inputText: '',
//       errorMsg: '',
//     };
//   },
//   methods: {
//     async generateTodos() { ... }
//   },
// };

import { ref } from 'vue';

// 컴포넌트 바깥 상수 : ref() 불필요 (반응형 아님, 변하지 않는 값)
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent?key=${API_KEY}`;

// ref() : 반응형 변수 선언 (Options API의 data() return {...} 와 동일)
const inputText = ref(''); // textarea 입력값
const errorMsg = ref('');  // API 오류 메시지 저장하는 변수

// defineEmits : 부모로 emit할 이벤트 선언 (Options API의 emits: [...] 와 동일)
const emit = defineEmits(['add-todos']);

// 기존 methods 안의 함수 → 그냥 async 함수로 선언
// this.변수 → 변수.value 로 변경
async function generateTodos() {
  errorMsg.value = ''; // this.errorMsg = '' → errorMsg.value = ''
  const prompt = `다음 텍스트에서 할 일 목록을 추출해서 JSON 배열로만 응답해줘.
형식: [{"todo": "할 일 내용"}]
마크다운 없이 순수 JSON만 반환.
텍스트: ${inputText.value}`; // this.inputText → inputText.value

  try {
    const res = await fetch(API_URL, {
      // await : API 응답 기다림 (비동기)
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // 문자열로 변환해서 body에 담음
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });
    const data = await res.json(); // json 변환
    const responseText = // ?. 옵셔널 체이닝 : 중간에 값이 undefined/null이면 멈추고 undefined 반환
      data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

    // Gemini가 마크다운 코드블록 등으로 감싸도 [...] 부분만 추출
    const match = responseText.match(/\[[\s\S]*\]/);
    const items = match ? JSON.parse(match[0]) : []; // match 결과가 있으면 JSON.parse로 배열로 변환, 없으면 빈 배열

    if (items.length === 0) {
      errorMsg.value = '할 일을 파싱하지 못했어요. 다시 시도해보세요.';
      return;
    }

    emit('add-todos', items); // this.$emit → emit()
    inputText.value = '';     // this.inputText = '' → inputText.value = ''
  } catch (e) {
    errorMsg.value =
      'API 오류가 발생했어요. API 키와 네트워크를 확인해보세요.';
  }
}
</script>
