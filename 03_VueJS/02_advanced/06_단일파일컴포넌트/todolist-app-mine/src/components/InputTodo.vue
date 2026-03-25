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
        <button class="btn btn-primary" type="button" @click="addTodoHandler">
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
      todo: '',
    };
  },
  methods: {
    addTodoHandler() {
      console.log('addToHandler 호출됨');

      this.$emit('add-todo', this.todo);
      this.todo = '';
    },
  },
  emits: ['add-todo'],
};
</script>
