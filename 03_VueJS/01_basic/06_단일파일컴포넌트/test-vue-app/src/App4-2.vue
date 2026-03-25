<!-- 이벤트 발신 시 유효성 검증 처리
  - emits 옵션 : 발신하는 이벤트에 대한 유효성 검사를 수행

  - 작성법 1) 배열 형태로 이벤트명 나열 : 등록된 이벤트가 발생하는지 이벤트명 확인
  const component = {
    emits : ["이벤트명1", "이벤트명2", ...]
    }
  }


  - 작성법 2) 객체 형태로 이벤트명 나열 : 이벤트명 + eventArgs 유효성 여부도 확인
  const component = {
    emits : {
      이벤트명1 : (eventArgs) => {
        // true 반환 : 이벤트 발신 허용
        // false 반환 : 이벤트 발신 거부
      },
      이벤트명2 : null, // 유효성 검사 없음
    }
  }
-->

<template>
  <h1>이벤트 유효성 검증</h1>

  <InputName @nameChanged="nameChangedHandler" />
  <br />
  <h3>APP 데이터 : {{ parentName }}</h3>
</template>

<script>
import InputName from './Components/InputName-2.vue';

export default {
  name: 'App4-2',
  components: { InputName }, // InputName 컴포넌트 등록
  data() {
    return {
      parentName: '', // 사용자가 입력한 이름을 저장할 변수
    };
  },
  methods: {
    nameChangedHandler(e) {
      this.parentName = e.name;
    },
  },
};
</script>
