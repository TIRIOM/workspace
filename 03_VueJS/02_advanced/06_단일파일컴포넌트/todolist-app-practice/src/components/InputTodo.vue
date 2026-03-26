<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="할 일을 여기에 입력!"
          v-model="todo"
          @keyup="addTodoHandler"
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
      // 할 일이 3글자 이상인 경우에만
      if (this.todo.length >= 3) {
        // 부모 컴포넌트에 이벤트 전달(방출)
        this.$emit('addTodo', this.todo);

        // 입력창이 초기화가 안되서 새로 추가하려면 귀찮음 -> 입력창 초기화
        this.todo = '';
        return; // 메소드 종료 == 밑에 코드 수행 X
      }
      alert('할 일은 3글자 이상 입력해주세요.');
    },
  },
  emits: ['addTodo'],
  // 이벤트 방출 검사
  // -> 부모 컴포넌트로 전달되는 이벤트가
  //   addTodo 라는 이름으로 방출되고 있는지 확인
};
</script>
