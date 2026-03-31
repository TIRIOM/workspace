<template>
  <div>
    <h5>옵션 API 적용</h5>
  </div>
  <!-- 입력된 값을 changeName 메서드에서 대문자로 변환할 것.  -->
  <div>
    이름 :
    <input
      type="text"
      placeholder="입력 시 대문자로 변환"
      :value="name"
      @keyup.enter="changeName($event.target.value)"
    />
    <!-- $event.target : 이벤트가 발생한 요소  -->

    <div>
      <hr />
      <h5>계산하기</h5>
      <div>
        X : <input type="text" v-model.number="x" /> Y :<input
          type="text"
          v-model.number="y"
        />
        <button @click="calculateSum(x, y, 1)">X+Y</button>
        <p>X + Y = {{ sum }}</p>
      </div>

      <div>
        A : <input type="text" v-model.number="a" /> B :
        <input type="text" v-model.number="b" />
        <button @click="calculateSum(a, b, 2)">A+B</button>
        <p>A + B = {{ sum2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Options',
  data() {
    return {
      name: '',
      x: 3,
      y: 5,

      a: 4,
      b: 5,

      sum: '여기에 더한 값이 표시됩니다.',
      sum2: '여기에 더한 값이 표시됩니다.',
    };
  },

  methods: {
    changeName(inputName) {
      //data의 retunn 객체의 name을 반환하기 위해 ".this" 사용
      this.name = inputName.toUpperCase();
      console.log('changeName 메서드 호출됨, 변경된 이름은 ' + this.name);
    },
    calculateSum(num1, num2, type) {
      //console.log('calculateSum 메서드 호출됨, x : ' + x + ', y : ' + y);

      if (type === 1) {
        // x + y 버튼 클릭 시
        this.sum = num1 + num2;
      } else {
        // a + b 버튼 클릭 시
        this.sum2 = num1 + num2;
      }
    },
  },
};
</script>

<style scoped></style>
