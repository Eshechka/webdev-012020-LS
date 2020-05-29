<template lang="pug">
.maincontent

  .maincontent__message.maincontent__message_green Сообщение отправлено
  .maincontent__message.maincontent__message_orange Сервер перегружен
  .maincontent__message.maincontent__message_red Сообщение не отправлено

  template(v-if='checkLogged()' )
    appHeader(
      @logoutFromHeader='logout'
    )

    appMenu

    router-view
    //- appSectionAbout
    //- appSectionWorks
    //- appSectionReviews

  template(v-else-if='!checkLogged()' )    
    appAuth(
      @loginFromAuth='login'
    )
    
  </template>


<script>

  import appAuth from './components/app-auth'
  import appMenu from './components/app-menu'
  import appHeader from './components/app-header'
  // import appSectionAbout from './components/app-section-about'
  // import appSectionWorks from './components/app-section-works'
  // import appSectionReviews from './components/app-section-reviews'

  import axios from 'axios';
  const baseUrl='https://webdev-api.loftschool.com/';
  let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMyOSwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTA0MjU2NTgsImV4cCI6MTU5MDQ0MzY1OCwibmJmIjoxNTkwNDI1NjU4LCJqdGkiOiJ2YTdSUkhuaFhyczdZcUlrIn0.AtjszD6pU7mT-MwpsYHng8WKi1HZYSrVZ76S69n8zKI.LEYUanTXw-QDknNKN8TDtXL49qfCbLH9Tx4h9l7x_YI';

  export default {

    

    components: {
      appAuth, appMenu, appHeader, 
      // appSectionAbout, appSectionWorks, appSectionReviews,
    },
    data() {
      return {
        //isLogged: false, //так должно быть
        isLogged: true,
        baseUrl: baseUrl,
        token: token,
      }
    },
    methods: {
      checkLogged() {
        return this.isLogged;
      },
      login() {
        this.isLogged = true;
        this.$router.replace('/');
        // console.log('isLogged', this.isLogged);
      },
      logout() {
        this.isLogged = false;
        this.$router.replace('/auth');
        // console.log('isLogged', this.isLogged);
      },
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
