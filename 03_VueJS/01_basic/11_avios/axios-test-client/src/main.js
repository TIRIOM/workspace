import { createApp } from 'vue';
import App1 from './App1.vue';
import router from './router';

const app = createApp(App1);

app.use(router);

app.mount('#app');
