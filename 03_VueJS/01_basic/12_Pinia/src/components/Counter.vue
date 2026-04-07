<template>
  <div>
    <h2>Counter</h2>
    <!-- 차이점? -->
    <!-- 1. 반응형 값 꺼내기  -->
    <h3>반응형 값 꺼내기 : {{ counter.count }}</h3>
    <!-- 2. 값만 꺼내기  -->
    <h3>값만 꺼내기 : {{ count }}</h3>
    <button @click="counter.increment">1씩 증가</button>
    <button @click="reset">초기화</button>
    <button @click="selfIncrement">자체적으로 1 증가</button>
  </div>
</template>

<script setup>
// counter 화면 보여주기
// count 값 보여주기
import { useCounterStore } from '@/stores/01_basic/counter';
// 1-1.
const counter = useCounterStore();
// 2-2. 값 자체를 가져올 때 -> 반응형이 깨지기 때문에
// 객체 자체를 가져와서 꺼내 쓰는 것이 권장됨.
const { count, reset } = useCounterStore();
// store 안에서 coun, increment만 꺼내서 담기

const selfIncrement = () => {
  counter.count++;
};
</script>
