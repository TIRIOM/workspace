<template>
  <div>
    X : <input type="text" v-model.number="x" /><br />
    Y : <input type="text" v-model.number="y" /><br />
  </div>
</template>

<script>
// 힌트1: Composition API에서 반응형 데이터를 만들 때 쓰는 함수를 vue에서 가져와야 함
import { ref } from 'vue';

export default {
  name: 'Calc',
  // setup() : 컴포넌트의 로직을 작성하는 함수
  // 컴포넌트 생명 주기 : beforecreage 이후 created 이전에 실행됨
  setup() {
    // 힌트2: Composition API의 진입점 함수 이름. beforeCreate/created 단계에서 실행됨
    /* Options API의 data()+methods()를 대체하는 함수 */
    // 힌트3: 반응형 변수를 만드는 함수. .value로 접근하고, 인자로 초기값을 넘김
    const x = ref(10); // 10으로 초기화
    const y = ref(20); // 20으로 초기화

    // 힌트4: template에서 x, y를 쓰려면 이 함수에서 반드시 반환해야 함
    return { x, y };
  },
};
</script>
