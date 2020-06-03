<template lang="pug">
.maincontent

  //- .maincontent__message.maincontent__message_green Сообщение отправлено
  //- .maincontent__message.maincontent__message_orange Сервер перегружен
  //- .maincontent__message.maincontent__message_red Сообщение не отправлено


  template(v-if='userIsLogged()' )    
    appHeader
    appMenu

  router-view

  </template>


<script>

  import appAuth from './components/app-auth';
  import appMenu from './components/app-menu';
  import appHeader from './components/app-header';

  import { mapGetters } from "vuex";

  export default {   

    components: {
      appAuth, appMenu, appHeader, 
    },
    data() {
      return {
      }
    },
    methods: {
      ...mapGetters('user', ['userIsLogged']),
    }

  }
</script>


<style lang="postcss">

   @import "normalize.css";
   @import "../styles/mixins.pcss";
   @import "../styles/layout/base.pcss";
   @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");


  .maincontent {

    &__message {

      max-width: 390px;
      min-width: 25%;
      padding: 25px 30px;
      position: fixed;
      text-align: center;
      bottom: 0;
      color: $white-color;
      z-index: 1000;

      &_orange {
        background-color: #b18333;
        left: 10%;
      }
      &_green {
        background-color: #4bb133;
        left: 50%;
        transform: translateX(-50%);
      }
      &_red {
        background-color: #b13333;
        right: 10%;
      }
    }
  }

</style>
