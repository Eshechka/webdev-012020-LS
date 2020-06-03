<template lang="pug">

  header.header      
    .container.container_admin
      .header__container.header__container_admin
        .header__logo
          .logotype
            .logotype__image
              img.logotype__picture(src='../../images/content/user.jpg')
        .header__info  
          .header__name Владимир Астаханов

          .header__desc Панель администрирования

          .header__login
            .login
              a.login__link(
                @click.prevent='logout',
              ) Выйти

</template>

<script>
import { mapActions } from 'vuex';

    export default {
        methods: {
          ...mapActions({
            logoutUser: 'user/logout'
          }),

          logout() {
            this.logoutUser();
            this.$router.replace('/auth');
          },

        },
    }
</script>

<style lang="postcss">

   @import "normalize.css";
   @import "../../styles/mixins.pcss";
   @import "../../styles/layout/base.pcss";
   @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

  .header {  

    background: $admin-header-gradient;  

    &__container {     

      &_admin {
        display: flex;
        color: $white-color;
        min-height: 80px;
        align-items: center;

        @include tablets {
          min-height: 90px;
        }
      }
    }

    &__info {
      display: inline-flex;
      justify-content: space-between;
      align-items: center; 
      flex-grow: 1;

      @include phones {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    &__name {
      color: $white-color;
      margin-left: 20px;
      font-size: 18px;

      @include tablets {
        font-size: 22px;
      }
      @include phones {
        font-size: 18px;
      }
    }

    &__desc {
      margin-left: 35px;
      font-size: 14px;
      color: rgba($white-color, 0.5);

      @include tablets {
        font-size: 14px;
      }
      @include phones {
        display: none;
      }
    }   

    &__login {
      margin-left: auto;

      @include tablets {
        padding-left: 20px;
      }
      @include phones {
        margin-left: 0;
      }
    }
  }

  .logotype {
    
    display: flex;
    align-items: center;

    &__image {
      height: 45px;
      width: 45px;
      min-width: 45px;
      min-height: 45px;
      border-radius: 50%;
    }

    &__picture {      
      @include img-object-fit;
    }

    &__name {
      color: $white-color;
      margin-left: 20px;
      font-size: 18px;

      @include tablets {
        font-size: 22px;
      }
      @include phones {
        font-size: 18px;
      }
    }
  }

  .login {

    &__link {
      text-decoration: underline;
      color: rgba($white-color, 0.5);

        &:hover {
          color: $white-color;
        }
        &:active, &:focus  {
          outline: none;          
          color: rgba($white-color, 0.75);
        }
    }
  } 

</style>