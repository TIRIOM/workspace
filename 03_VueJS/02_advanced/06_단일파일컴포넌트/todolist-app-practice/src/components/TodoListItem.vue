<template>
  <li
    class="list-group-item"
    :class="{ 'list-group-item-success': todoitem.completed }"
  >
    <!-- :class="{클래스명 : 조건}" -> 조건이 true일 때 클래스 적용 -->
    <input type="checkbox" class="pointer me-3" v-model="todoitem.completed" />
    <!-- v-model은 양방향 데이터 바인딩을 제공하여 checkbox의 상태를 todoitem.completed와 동기화 -->

    <span class="pointer" :class="todoitem.completed ? 'todo-done' : ''">
      {{ todoitem.todo }}
      {{ todoitem.completed ? '(완료)' : '' }}
      <!-- 삼항연산자 : 조건식 ? true일 때 : false일 때 -->
    </span>

    <span
      class="float-end badge bg-secondary pointer"
      @click="$emit('delete-todo', todoitem)"
      >삭제</span
    >
  </li>
</template>
<script>
export default {
  name: 'TodoListItem',
  // props : 부모 컴포넌트에서 전달된 데이터 수신 ]
  // 유효성 검사 - type : 데이터 타입, required : 필수 여부
  props: {
    todoitem: {
      type: Object,
      required: true,
    },
  },
};
</script>
