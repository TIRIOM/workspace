<template>
  <div>
    <!-- v - model을 사용하여 입력값을 name 변수에 양방향 바인딩 -->
    이름 : <input type="text" v-model="name" />

    <!-- $emit 메소드를 사용하여 부모 컴포넌트로 이벤트 발신
     $emit 은 직계 부모 컴포넌트에게만 이벤트 발신 가능. 
      -->

    <!-- 버튼 클릿 시, NAMECHANGED 이벤트를 발신(방출)하고, 
       NAME 데이터가  들어간 변수를 전달-->
    <button @click="$emit('nameChanged', { name })">이벤트 발신</button>
  </div>
</template>

<script>
export default {
  name: 'InputName',
  data() {
    return {
      name: '',
    };
  },
  methods: {},
};
</script>

<style scoped></style>
