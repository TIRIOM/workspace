import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createApp } from 'vue';
import App from './App.vue';
//  router 임포트
import router from './router';

const app = createApp(App);

app.use(router);
//router 인스턴스를 애플리케이션에 등록.

app.mount('#app');
