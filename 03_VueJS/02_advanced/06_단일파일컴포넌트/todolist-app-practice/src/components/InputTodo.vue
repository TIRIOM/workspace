<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input
          v-model="todoList"
          type="text"
          class="form-control"
          placeholder="할일을 여기에 입력"
        />
        <button @click="addTodoHandler" class="btn btn-primary" type="button">
          추가
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputTodo',
  data() {
    return {
      todoList: {},
    };
  },
  emits: ['add-todo'],
  props: {
    addTodoHandler: {
      // type: Function,
      // required: true
    },
  },
};
</script>
