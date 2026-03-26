<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <div class="card card-default panel-borderless">
      <div class="card-body">
        <InputTodo @addTodo="addTodo" />

        <!-- 목록 컴포넌트
         props를 이용해서 to do list 를 자식 컴포넌트로 전달 
          -->
        <!-- v-bind:todo-list="todoList" 는 전체 문법, 축약하면 :todo-list="todoList" 와 동일 -->
        <TodoList
          v-bind:todo-list="todoList"
          @delete-todo="deleteTodo"
          @toggle-completed="toggleCompleted"
        />
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
      // console.log(id);
      // id가 일치하는 요소의 index 변수에 담기
      let index = this.todoList.findIndex((item) => id === item.id);
      // console.log(index);
      // 배열에서 index 위치의 요소 1개 삭제

      //splice (시작 index, 삭제 개수)
      this.todoList.splice(index, 1);
    },
    // 할 일 완료 상태 토글
    toggleCompleted(id) {
      //  배열.findIndex((item) => 조건 ) : 조건이 true가 되는 첫 번재 요소의 index 반환
      let index = this.todoList.findIndex((item) => item.id === id);
      // == 동등 비교 : 값만 비교
      // === 동일 비교 : 값과 타입 모두 비교
      // let index = this.todoList.findIndex((item) => false);
      //참고 : findIndex는 조건이 true가 되는 요소가 없으면 -1 반환
      // console.log(index);

      // console.log(this.todoList[index]);
      // console.log(this.todoList[index].completed);
      // console.log(!this.todoList[index].completed);
      // ! : 논리 부정 연산자 -> true는 false로, false는 true로 바꿔줌

      // 기존의 COMPLETED 값을 반대로 바꿔서 할 일 완료 상태 토글
      this.todoList[index].completed = !this.todoList[index].completed;
    },

    /**
     * 할일 추가
     * @param todo  : InputTodo에서 전달된 todo (할일 내용)
     */
    addTodo(todo) {
      console.log(todo);
      this.todoList.push({
        id: new Date().getTime(),
        todo: todo,
        completed: false,
      });
    },
  },
};
</script>
