<template>
  <div>
    <!-- 힌트: state.프로퍼티명 으로 접근 -->
    X : <input type="text" v-model.number="____" /> <br />
    Y : <input type="text" v-model.number="____" /> <br />
    <button @click="____">계산</button> <br />
    <div>결과 : {{ ____ }}</div>
  </div>
</template>

<script>
// 힌트: ref()는 단일 값, 이건 객체 전체를 한번에 반응형으로 만드는 함수
import { ____ } from 'vue';

export default {
  name: 'Calc3',
  setup() {
    // 힌트: reactive()로 묶으면 .value 없이 state.x, state.y 로 접근
    const state = ____({ x: 10, y: 20, result: 30 });

    const calcAdd = () => {
      // 힌트: state.result에 state.x + state.y 를 할당
      ____________________________;
    };

    // 힌트: template에서 쓸 것들을 객체로 반환
    return ____;
  },
};
</script>
