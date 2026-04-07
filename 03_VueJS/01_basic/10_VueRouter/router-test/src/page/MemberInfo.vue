<template>
  <div class="card card-body">
    <h2>Member Info</h2>
    <div>
      경로 패턴: /members/:id<br />
      요청 경로: {{ currentRoute.fullPath }}<br />
      id값: {{ currentRoute.params }}<br />
    </div>

    <div className="mt-5">
      <img
        :src="member.photo"
        class="img"
        placeholder="https://placehold.co/120x120"
      />
      <h4 class="mt-2">{{ member.name }}({{ member.role }})</h4>
      <p>{{ member.desc }}</p>
      <a class="fa fa-instagram m-1"></a>
      <a class="fa fa-facebook m-1"></a>
      <a class="fa fa-youtube m-1"></a>
      <br /><br />
      <RouterLink :to="{ name: 'Members' }">맴버 목록으로 </RouterLink>
      <!-- <RouterLink to="Members">맴버 목록으로 </RouterLink> -->
      <!--  :to="{ name: 'Members' } 하는 이유 : 라우터 이름을 사용하여 더 나은 유지보수성과 유연성 제공  -->
    </div>
  </div>
</template>
<script setup>
// 왜 setup() 안에서 작성하는가? -> 라우터 정보는 페이지 컴포넌트에서만 사용할 수 있기 때문
import { useRoute } from 'vue-router';
import members from '@/member.json';

const currentRoute = useRoute();

const id = parseInt(currentRoute.params.id, 10); // 10진법 문자로 파싱
console.log(id);

// 맴버 정보 조회 (id값이 일치하는 멤버 객체 찾기)
// 배열.find((요소) => 조건식) : 조건이 true라면, 해당 요소 반환 및 종료 / 없다면 undefined 반환

const member = members.find((mem) => mem.id === id);
console.log(member);
</script>
