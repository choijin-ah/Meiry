import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/layout/memo.vue';
import AboutView from '@/layout/text.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,  // 기본 홈 페이지 컴포넌트
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView, // 클릭 시 전환될 페이지 컴포넌트
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
