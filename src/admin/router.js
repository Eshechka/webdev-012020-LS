import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


const routes = [
    {    
        path: '/',
        component: () => import('./components/app-section-about.vue'),
    },
    {    
        path: '/works',
        component: () => import('./components/app-section-works.vue'),
    },
    {    
        path: '/reviews',
        component: () => import('./components/app-section-reviews.vue'),
    },

    {
        path: '/auth',
        component: () => import('./components/app-auth.vue'),
    },

];

export default new VueRouter({ routes });