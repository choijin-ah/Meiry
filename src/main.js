import { createApp } from 'vue';
import App from './App.vue';

// Bootstrap CSS를 불러옵니다
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/global_css.css';
import router from './router';

createApp(App)
    .use(router)  // Vue 애플리케이션에 라우터 추가
    .mount('#app');
