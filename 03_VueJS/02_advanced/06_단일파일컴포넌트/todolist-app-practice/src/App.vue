<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <div class="card card-default panel-borderless">
      <div class="card-body">
        <InputTodo />

        <!-- 목록 컴포넌트
         props를 이용해서 to do list 를 자식 컴포넌트로 전달 
          -->
        <TodoList v-bind:todo-list="todoList" @delete-todo="deleteTodo" />
        <!-- : todo list -> 자식에게 to do list라는 속성으로 데이터 전달 -->

        <!-- @delete-todo -> 자식으로부터 delete-todo 이벤트가 감지되면, 
            deleteTodo 메서드를 호출 -->
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';
let ts = new Date().getTime();
export default {
  name: 'App',
  components: { InputTodo, TodoList },
  data() {
    return {
      todoList: [
        { id: ts, todo: '자전거 타기', completed: false },
        { id: ts + 1, todo: '딸과 공원 산책', completed: true },
        { id: ts + 2, todo: '일요일 애견 카페', completed: false },
        { id: ts + 3, todo: 'Vue 원고 집필', completed: false },
      ],
    };
  },
  methods: {
    // 할 일 삭제
    deleteTodo(id) {
      console.log(id);
    },
  },
};
</script>
