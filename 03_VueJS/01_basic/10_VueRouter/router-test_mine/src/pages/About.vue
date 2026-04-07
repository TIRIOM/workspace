<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 :{{ $route.fullPath }}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  created() {
    /// created 함수는 컴포넌트 생성된 직후 한번 자동으로 호출됨.
    console.log(this.$route);
    // $route 객체는 현재 라우터의 정보 담고 있음.
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
