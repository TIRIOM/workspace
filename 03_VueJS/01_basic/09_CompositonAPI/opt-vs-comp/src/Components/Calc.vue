<template>
  <div></div>
</template>

<script setup>
// !! 중요 길게 쓰기 싫어서 script setup
import { useCalc } from './Composition.vue';
const { x, y, sum1, calculateSum } = useCalc();
// useCalc()의 return된 객체에서 필요한 속성만 가져온다.
</script>

<!-- ----------------------------------------------- -->

<!-- 아래는 원래 코드  -->
<!-- <script>
import { useCalc } from './Composition.vue';
export default {
  setup() {
    const { x, y, sum1, calculateSum } = useCalc();

    return { x, y, sum1, calculateSum };
  },
};
</script> -->
