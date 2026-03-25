<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <div class="card card-default panel-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />

        <!-- 개수 표시 영역 -->
        <div class="row text-center mb-2">
          <div class="col">전체 todo 개수 : {{ totalCount }}</div>
          <div class="col">
            완료 todo 개수 :
            <span class="text-success">{{ completedCount }}</span>
          </div>
          <div class="col">
            미완료 todo 개수 :
            <span class="text-danger">{{ incompleteCount }}</span>
          </div>
        </div>
        <TodoList v-bind:todoList="sortedTodoList" @delete-todo="deleteTodo" />
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
  computed: {
    totalCount() {
      return this.todoList.length;
    },
    completedCount() {
      return this.todoList.filter((item) => item.completed).length;
    },
    incompleteCount() {
      return this.todoList.filter((item) => !item.completed).length;
    },
    sortedTodoList() {
      // 미완료(false), 완료(true) 두 그룹으로 분리
      const incomplete = this.todoList.filter((item) => !item.completed);
      const complete = this.todoList.filter((item) => item.completed);

      // 각각 글자 오름차순 정렬 후 합치기 (미완료 먼저)
      // 'en' 지정 → 영어가 한글보다 앞에 오도록
      // filter()가 이미 새 배열을 만들어서 원본 todoList는 건드리지 않음
      // sort()는 원본을 바꾸지만 여기선 filter()로 만든 새 배열에 적용하므로 안전
      // 'en' 지정 → 영어가 한글보다 앞에 오도록
      // 스프레드(...) → 두 배열을 하나로 합치기
      return [
        ...incomplete.sort((a, b) => a.todo.localeCompare(b.todo, 'en')),
        ...complete.sort((a, b) => a.todo.localeCompare(b.todo, 'en')),
      ];
    },
  },
  methods: {
    addTodo(receivedTodo) {
      this.todoList.push({
        id: new Date().getTime(),
        todo: receivedTodo,
        completed: false,
      });
    },
    deleteTodo(id) {
      let index = this.todoList.findIndex((item) => id === item.id);
      // 기본 형태
      // (매개변수) => 반환값

      // // 화살표 함수
      // (item) => id === item.id

      // // 일반 함수
      // function(item) {
      //   return id === item.id;
      // }

      this.todoList.splice(index, 1);
      // splice(인덱스, 삭제할 요소의 개수)
    },
  },
};
</script>
