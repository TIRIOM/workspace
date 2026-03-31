<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <div class="card card-default panel-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />
        <GeminiTodoForm @add-todos="addTodos" />

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

<script setup>
// [Composition API 변환]
// 기존 Options API:
// import TodoList from './components/TodoList.vue';
// import InputTodo from './components/InputTodo.vue';
// import GeminiTodoForm from './components/GeminiTodoForm.vue';
// export default {
//   name: 'App',
//   components: { InputTodo, TodoList, GeminiTodoForm }, // <-- 등록 필요했음
//   data() { return { todoList: [...] } },
//   computed: { totalCount() {}, completedCount() {}, ... },
//   methods: { addTodo() {}, addTodos() {}, deleteTodo() {} },
// };

import { ref, computed } from 'vue';

// <script setup> 에서는 import만 해도 자동으로 컴포넌트 등록됨 (components: 불필요)
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';
import GeminiTodoForm from './components/GeminiTodoForm.vue';

// ref() : 반응형 배열 선언 (Options API의 data() return { todoList: [...] } 와 동일)
// 배열 자체를 교체할 때는 todoList.value = [...] 사용
// push/splice 등 배열 메서드는 .value 없이 todoList.value.push() 사용
let ts = new Date().getTime();
const todoList = ref([
  { id: ts,     todo: '자전거 타기',    completed: false },
  { id: ts + 1, todo: '딸과 공원 산책', completed: true },
  { id: ts + 2, todo: '일요일 애견 카페', completed: false },
  { id: ts + 3, todo: 'Vue 원고 집필',  completed: false },
]);

// computed() : 반응형 계산값 (Options API의 computed: { totalCount() {} } 와 동일)
// todoList.value가 바뀔 때마다 자동으로 재계산됨
const totalCount = computed(() => todoList.value.length);

const completedCount = computed(
  () => todoList.value.filter((item) => item.completed).length
);

const incompleteCount = computed(
  () => todoList.value.filter((item) => !item.completed).length
);

const sortedTodoList = computed(() => {
  // 미완료(false), 완료(true) 두 그룹으로 분리
  const incomplete = todoList.value.filter((item) => !item.completed);
  const complete = todoList.value.filter((item) => item.completed);

  // 각각 글자 오름차순 정렬 후 합치기 (미완료 먼저)
  return [
    ...incomplete.sort((a, b) => a.todo.localeCompare(b.todo, 'en')),
    ...complete.sort((a, b) => a.todo.localeCompare(b.todo, 'en')),
  ];
});

// 기존 methods 안의 함수 → 그냥 함수로 선언
// this.todoList → todoList.value

// InputTodo에서 전달된 todo를 추가하는 함수
function addTodo(receivedTodo) {
  todoList.value.push({           // this.todoList.push → todoList.value.push
    id: new Date().getTime(),
    todo: receivedTodo,
    completed: false,
  });
}

// GeminiTodoForm에서 전달된 todos를 추가하는 함수
function addTodos(generatedTodos) {
  generatedTodos.forEach((item) => {
    // forEach 쓰는 이유 : generatedTodos는 array임으로
    todoList.value.push({         // this.todoList.push → todoList.value.push
      id: new Date().getTime() + Math.random(), // math.random() 추가해서 id 중복 방지
      todo: item.todo,
      completed: false,
    });
  });
}

// TodoList에서 전달된 id를 가진 todo를 삭제하는 함수
function deleteTodo(id) {
  let index = todoList.value.findIndex((item) => id === item.id); // todoList.value
  todoList.value.splice(index, 1); // splice(인덱스, 삭제할 요소의 개수)
}
</script>
