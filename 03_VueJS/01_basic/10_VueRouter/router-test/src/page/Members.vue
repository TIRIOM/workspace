<template>
  <div>
    <h2>Members</h2>
    <p>요청 경로 (fullPath): {{ currRoute.fullPath }}</p>
    <p>요청 경로 (path): {{ currRoute.path }}</p>
    <!-- fullPath는 : 쿼리 (?k=v) 까지 포함한 전체 경로 -->
    <!-- path는 : 쿼리 없이 경로만 포함 -->
    <!-- 현재는 쿼리가 없으니 다 똑같게 보임!!! -->
  </div>
  <div>
    <h2 class="m-4">이날치 멤버</h2>
    <div class="container">
      <div class="row">
        <div
          v-for="mem in members"
          :key="mem.id"
          class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2"
        >
          <!-- 멤버 카드 -->
          <!-- 동적 라우트 : 라우트 경로에 변수를 포함시키는 방식 
           - : 를 사용 
           -  자바스크립트 표현식 -->
          <!-- <router-link :to="'/members/' + mem.id"> -->
          <!--
            params: { id: mem.id }
           -> index.js에 작성된 path의 변수명(:id)과 params 키 값(id)이 동일해야 함
           -->
          <router-link :to="{ name: 'members/id', params: { id: mem.id } }">
            <img
              class="img-thumbnail"
              style="width: 90px; height: 110px"
              :src="mem.photo"
            />
            <!-- :속성 = js 표현식 넣기
             단순 문자열이 아님! -->
            <br />
            <h6 class="display-7">{{ mem.name }}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 1 . members.json 파일을 가져오기
// -> json 파일을 읽와서 자동으로 JS 객체로 변환 -> 따라서
//    (json.parse () 함수 사용 효과가 자동으로 있음. )
import members from '@/member.json';
// 2. 라우터 정보 가져오기
//    가. useRoute :  현재 라우트 정보를 가져오는 함수
//    -> url 경로, param, query, fullPath 등 현재 상태를 읽을 때 사용

//    나. useRouter : 라우터 인스턴스를 가져오는 함수
//    -> 페이지 이동 / 변경을 담당하는 함수
//    -> push(), replace(), back() 등으로 라우팀 제어
import { useRoute, useRouter } from 'vue-router';

export default {
  name: 'Members',
  setup() {
    const currRoute = useRoute();
    const router = useRouter();
    console.log('currentRoute:', currRoute);
    console.log('router:', router);

    return { members, currRoute, router };
  },
};
</script>

<style scoped></style>
