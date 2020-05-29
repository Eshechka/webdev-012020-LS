import Vue from 'vue';
import App from './App.vue';

import router from './router';
import vuelidate from './vuelidate';
import { store } from './store/index';

import $axios from './requests';

store.$axios = $axios;

new Vue({
  el: "#app-root",
  router,
  store,
  vuelidate,
  render: h => h(App)
});