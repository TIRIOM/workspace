<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoListItem
          v-for="todoitem in todoList"
          :key="todoitem.id"
          :todoitem="todoitem"
          @delete-todo="$emit('delete-todo', $event)"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
// [Composition API 변환]
// 기존 Options API:
// import TodoListItem from './TodoListItem.vue';
// export default {
//   name: 'TodoList',
//   components: { TodoListItem },   // <-- 컴포넌트 등록 필요했음
//   props: {
//     todoList: { type: Array, required: true },
//   },
// };

// <script setup> 에서는 import한 컴포넌트가 자동으로 등록됨 (components: 불필요)
import TodoListItem from './TodoListItem.vue';

// defineProps : 부모(App.vue)로부터 받을 props 선언
defineProps({
  todoList: {
    type: Array,
    required: true,
  },
});

// defineEmits : 자식(TodoListItem)에서 올라온 이벤트를 부모(App.vue)로 재전달
defineEmits(['delete-todo']);
</script>
