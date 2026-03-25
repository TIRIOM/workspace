<!-- props 속성 사용 (객체 전달) 
  - props 목적 : 자식 컴포넌트가 필요한 데이터를 전달 받아
  - UI를 랜더링 하는 것을 목적으로 함. 
  -->
<template>
  <li><input type="checkbox" />{{ idol.name }}</li>
</template>

<script>
export default {
  name: 'CheckboxItem',
  props: ['idol'],
  // props로 전달 받는  idol 객체
};
</script>
