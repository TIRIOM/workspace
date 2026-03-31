<template>
  <div>
    x : <input type="text" v-model.number="x" />
    <br />
    결과 : {{result}}
  </div>
</template>

<script>
// 힌트: ref 외에, 특정 값의 변화를 감지하는 함수도 함께 import
import { ____ } from 'vue';

export default {
  name: 'Calc5',
  setup() {
    const x = ____;      // 0으로 초기화
    const result = ____;  // 0으로 초기화

    // 힌트: watch(감시할값, (newVal, oldVal) => { ... })
    //       x가 바뀔 때마다 콘솔 출력 + result 갱신
    // 필요한 경우 코드 추가

    return { x, result }
  }
}
</script>
