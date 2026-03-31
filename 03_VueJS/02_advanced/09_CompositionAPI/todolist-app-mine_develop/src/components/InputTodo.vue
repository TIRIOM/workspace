<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="할일을 여기에 입력"
          @keyup.enter="addTodoHandler"
          v-model="todo"
        />
        <button
          class="btn btn-primary"
          type="button"
          @click="addTodoHandler"
          :disabled="!todo.trim()"
        >
          추가
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// [Composition API 변환]
// 기존 Options API:
// export default {
//   name: 'InputTodo',
//   data() {
//     return { todo: '' };       // 반응형 데이터
//   },
//   methods: {
//     addTodoHandler() {
//       this.$emit('add-todo', this.todo);  // this 사용
//       this.todo = '';
//     },
//   },
//   emits: ['add-todo'],
// };

import { ref } from 'vue';

// ref() : 반응형 변수 선언 (Options API의 data() return { todo: '' } 와 동일)
// 스크립트 안에서는 todo.value 로 접근, 템플릿에서는 그냥 todo 사용
const todo = ref('');

// defineEmits : 이 컴포넌트가 부모로 emit할 이벤트 목록 선언
// Options API의 emits: ['add-todo'] 와 동일
const emit = defineEmits(['add-todo']);

// 기존 methods 안의 함수 → 그냥 함수로 선언
// this.$emit → emit() / this.todo → todo.value
function addTodoHandler() {
  console.log('addToHandler 호출됨');
  emit('add-todo', todo.value); // this.$emit → emit()
  todo.value = '';              // this.todo = '' → todo.value = ''
}
</script>
