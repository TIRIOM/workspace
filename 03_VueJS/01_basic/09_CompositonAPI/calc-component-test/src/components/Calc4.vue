<template>
  <div>
    X : <input type="text" v-model.number="state.x" /> <br />
    Y : <input type="text" v-model.number="state.y" /> <br />
    <div>결과 : {{ result }}</div>
  </div>
</template>

<script>
// 힌트: 의존하는 반응형 값이 바뀌면 자동으로 재계산되는 함수
import { reactive, ____ } from 'vue';

export default {
  name: 'Calc4',
  setup() {
    const state = reactive({ x: 10, y: 20 });

    // 힌트: 버튼 없이 자동 계산 → computed(() => 계산식)
    const result = ___________(__________);

    // 힌트: template에서 쓸 것들 반환
    return ____________;
  },
};
</script>
