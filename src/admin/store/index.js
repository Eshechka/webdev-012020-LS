import Vue from 'vue';
import Vuex from 'vuex';
import categories from './modules/categories';
import skills from './modules/skills';
import reviews from './modules/reviews';

Vue.use(Vuex);


export const store = new Vuex.Store({
    modules: {
        categories,
        skills,
        reviews,
    }
});