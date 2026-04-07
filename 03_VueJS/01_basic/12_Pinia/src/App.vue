<script setup>
import Like from '@/components/Like.vue';

// 01_basic
import { useLikeStore } from '@/stores/01_basic/like';
import { useCounterStore } from '@/stores/01_basic/counter';
import Counter from './components/Counter.vue';
const likeStore = useLikeStore();
const counterStore = useCounterStore();
</script>

<template>
  <div>
    <h1>Pinia 상태 관리 예제</h1>
    <h2>좋아요 수 : {{ likeStore.like }}</h2>
    <h2>좋아요 수 5배 증가 : {{ likeStore.fivetimes }}</h2>
    <Like />
    <hr />
    <h2>카운터 수 : {{ counterStore.count }}</h2>
    <h2>
      카운터 수 2배 증가 : {{ counterStore.doubleCount }}
      <Counter />
    </h2>
  </div>
</template>

<style scoped></style>
