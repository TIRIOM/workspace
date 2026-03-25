<template>
  <li><input type="checkbox" :checked="checked" />{{ id }} - {{ name }}</li>
</template>

<script>
export default {
  name: 'CheckboxItem',
  // VER1 : 유효성 검사 없는 버젼
  // props: ['name', 'checked', 'id'],
  // props로 전달 받는  idol 객체

  // VER2 : 유효성 검사 있는 버젼
  //부모 -> 자식으로 넘어오는 데이터 규칙 정의
  props: {
    id: [Number, String], // 타입 (숫자, 문자열) 만 정의
    name: String, // 문자열
    checked: {
      // 타입 + 옵션 정의
      type: Boolean, // 불리언 타입
      default: false, // 기본값 false
      required: false, // 필수값 여부
    },
  },
};
</script>
