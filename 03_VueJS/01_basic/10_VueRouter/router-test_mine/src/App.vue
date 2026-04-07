<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Header from '@/Components/Header.vue';
</script>

<style>
.container {
  text-align: center;
  margin-top: 10px;
}
</style>
