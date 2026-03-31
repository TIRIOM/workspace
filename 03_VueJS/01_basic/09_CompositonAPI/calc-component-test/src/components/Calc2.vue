<template>
  <div>
    X : <input type="text" v-model.number="____" /> <br />
    Y : <input type="text" v-model.number="____" /> <br />
    <button @click="________________">계산</button> <br />
    <div>결과 : {{ __________ }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Calc2',
  setup() {
    const x = ref(10);
    const y = ref(20);
    const result = ref(30);

    const calcAdd = () => {
      ____________________________;
    };

    return ___________________ ;
  },
};
</script>
