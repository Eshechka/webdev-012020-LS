import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from './store/index';
import axios from 'axios';

Vue.use(VueRouter);

const guard = axios.create({
    baseURL: 'https://webdev-api.loftschool.com',    
});

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
        component: () => import('./components/app-auth/app-auth.vue'),
        meta: {
            public: true,
        },
    },

];

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
    const isPublicRoute = to.matched.some(route => route.meta.public);
    const isUserLogged = store.getters['user/userIsLogged'];

    if (!isPublicRoute && !isUserLogged) {
        const token = localStorage.getItem('token');
        guard.defaults.headers["Authorization"] = `Bearer ${token}`;

       try {
        const {data} = await guard.get('/user');
        store.commit('user/SET_USER', data.user);
        next();

       } catch (error) {        
        router.replace('/auth');
        localStorage.clear();
       }
    }
    else {
        next();
    }

  })

export default router;