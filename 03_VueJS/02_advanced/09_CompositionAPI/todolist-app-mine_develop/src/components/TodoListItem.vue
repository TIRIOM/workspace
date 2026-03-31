<template>
  <li
    class="list-group-item"
    :class="{ 'list-group-item-success': todoitem.completed }"
  >
    <input type="checkbox" class="pointer me-3" v-model="todoitem.completed" />
    <span class="pointer" :class="todoitem.completed ? 'todo-done' : ''">
      {{ todoitem.todo }}
      {{ todoitem.completed ? '(완료)' : '' }}
      <!-- 삼항연산자 : 조건식 ? true일 때 : false일 때 -->
    </span>
    <span
      class="float-end badge bg-secondary pointer"
      @click="$emit('delete-todo', todoitem.id)"
      >삭제</span
    >
  </li>
</template>

<script setup>
// [Composition API 변환]
// 기존 Options API:
// export default {
//   name: 'TodoListItem',
//   props: {
//     todoitem: { type: Object, required: true },
//   },
// };

// defineProps : 부모로부터 받을 props 선언 (Options API의 props: {...} 와 동일)
// <script setup> 에서는 export default 없이 defineProps로 바로 선언
defineProps({
  todoitem: {
    type: Object,
    required: true,
  },
});

// defineEmits : 이 컴포넌트가 emit할 이벤트 목록 선언
// 템플릿의 $emit('delete-todo', ...) 와 짝을 맞춤
defineEmits(['delete-todo']);
</script>
