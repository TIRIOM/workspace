// [index.js]
// vue router 라이브러리에서 필요한 함수들을 가져옴
// createWebhistory : HTML 5 History API를 사용하여
//                    URL 경로를 관리하는 함수

import { createRouter, createWebHistory } from 'vue-router';
// 페이지 컴포넌트 가져오기
// @ : src 폴더의 별칭 (alias)
import Members from '@/page/Members.vue';
import MemberInfo from '@/page/MemberInfo.vue';
import Home from '@/page/Home.vue';
import MembersLeft from '@/components/members/MembersLeft.vue';
import MembersFooter from '@/components/members/MembersFooter.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes :URL 주소와 컴포넌트를 연결해놓은 설정 목록
  routes: [
    // 1. 정적 라우트 패턴
    //  -> URL이 고정되어 있는 패턴
    {
      path: '/members', // 해당 url 일 때
      components: {
        default: Members,
        left: MembersLeft,
        footer: MembersFooter,
      }, // 보여줄 컴포넌트 지정
      name: 'Members', // 라우트 이름 (선택 사항)
    },
    // 2. 동적 라우트 패턴
    //  -> URL의 일부가 변수처럼 동적으로 변하는 패턴
    // (\\d+) : 정규 표현식, id는 숫자만 허용한다는 의미
    {
      path: '/members/:id(\\d+)', // :id -> id는 변수, (\\d+) -> id는 숫자만 허용
      component: MemberInfo,
      name: 'members/id',
    },
    { path: '/', component: Home, name: 'Home' },
    // { path: '/about', component: About },
    // { path: '/videos', component: Videos },
  ],
});

export default router;
