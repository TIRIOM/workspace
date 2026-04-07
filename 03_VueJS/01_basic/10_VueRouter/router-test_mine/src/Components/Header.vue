<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
    <span class="navbar-brand">이날치(LeeNalChi)</span>
    <button class="navbar-toggler" type="button" @click="changeIsNavShow">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="navClass">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">홈</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">소개</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/members">멤버</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/videos">영상</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
\

<script>
import { reactive, computed } from 'vue';
export default {
  setup() {
    const state = reactive({ isNavShow: false });
    // 반응형 클래스 바인딩: 토글 상태에 따라 show 클래스 추가/제거
    const navClass = computed(
      () =>
        //삼항연산자
        state.isNavShow
          ? 'collapse navbar-collapse show' //true일 때 show 클래스 추가
          : 'collapse navbar-collapse', //false일 때 show 클래스 제거
    );
    const changeIsNavShow = () => {
      state.isNavShow = !state.isNavShow;
    };
    return { state, changeIsNavShow, navClass };
  },
};
</script>
