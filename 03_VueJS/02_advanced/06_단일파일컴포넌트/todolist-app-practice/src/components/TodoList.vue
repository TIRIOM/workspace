<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <!-- v bind로 todoitem이란 변수로 자식에게 전달  -->
        <TodoListItem
          v-for="todoitem in todoList"
          :key="todoitem.id"
          :todoitem="todoitem"
          @delete-todo="$emit('delete-todo', $event)"
          @toggle-completed="$emit('toggle-completed', $event)"
        />
      </ul>
    </div>
  </div>
</template>
<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  components: { TodoListItem },
  props: {
    todoList: {
      type: Array,
      required: true,
    },
  },
  // props : 부모 컴포넌트에서 전달된 데이터
};
</script>
