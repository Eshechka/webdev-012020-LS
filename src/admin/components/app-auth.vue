<template lang="pug">

section.auth
  .auth__wrapper
  .auth__block
    form.auth-form(@submit.prevent='login')
        .auth-form__title Авторизация
        .auth-form__row
            .auth-form__group.auth-form__group_login
                label.auth-form__label(data-text='Логин')
                    input.auth-form__input(type='text' required
                      v-model='user.name'
                    )
        .auth-form__row
            .auth-form__group.auth-form__group_password
                label.auth-form__label(data-text='Пароль') 
                    input.auth-form__input(type='password' required
                      v-model='user.password'
                    )
        .auth-form__row
            .auth-form__group.auth-form__group_button
                button.auth-form__submit(type='submit') Отправить

</template>

<script>

    import $axios from '../requests'

    export default {

      data () {
        return {
          user: {
            name: '',
            password: '',
          },
        }
      },

      methods: {
        async login() {
          try {
            const response = await $axios.post('login/', {
              name: this.user.name,
              password: this.user.password,
            });

            const token = response.data.token;
            localStorage.setItem('token',token);
            $axios.defaults.headers['Authorization'] = `Bearer ${token}`;
            
            this.$emit('loginFromAuth');

            this.$router.replace('/about');
            console.log(response);

          } catch(error) {
            alert('исправь потом меня, я ошибка: ' + error.message);
          }
          
          // .then(function (response) {
          //   console.log('data: ', response.data);
          // })
          // .catch(function (error) {
          //   console.log(error.response.data);
          // });
          
        }, 

      //   getUserId () {
      //     $axios.get('user/')
      //     .then(function (response) {
      //       console.log('ID data: ', response.data);
      //     })
      //     .catch(function (error) {
      //       console.log(error.response.data);
      //     });
      //   },
      },

    }
</script>

<style lang="postcss">

   @import "normalize.css";
   @import "../../styles/mixins.pcss";
   @import "../../styles/layout/base.pcss";
   @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

  .auth {

    background-color: #f7f9fe;
    background-image: url('../../images/content/Mountain_Baloon_admin.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    min-height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: relative;
    
    @include phones {
      height: unset;
    }

    &__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba($base-color, 0.9);
    }

    &__block {
      width: 80%;
      max-width: 563px;
      min-width: 320px;

      @include phones {
        width: 100%;
      }
    }
  }

  .auth-form {
    z-index: 100;
    opacity: 0.999;
    width: 100%;
    background: $white-color;
    padding: 60px 78px;

    &__title {
      font-size: 36px;
      margin-bottom: 15px;
      font-weight: 600;
      text-align: center;
    }

    &__row {		
      line-height: 0;
      margin-bottom: 35px;
    }

    &__group {
      position: relative;
      border-bottom: 1px solid $base-color;

      &::before {
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
        bottom: 16px;
        left: 0px;
        background-repeat: no-repeat;
        background-position: center;
      }

      &:active, &:focus, &:hover {
        border-color: $base-color-hover;
        outline: none;
      }


      &_login {

        &::before {
          background-image: svg-load('user.svg' fill=#{$color-light});				
        }

        &:active, &:focus, &:hover {
          &::before {
            background-image: svg-load('user.svg' fill=#{$base-color-hover});
          }
        }
      }

      &_password {

        &::before {
          background-image: svg-load('key.svg' fill=#{$color-light});				
        }

        &:active, &:focus, &:hover {
          &::before {
            background-image: svg-load('key.svg' fill=#{$base-color-hover});
          }
        }
      }
          
      &_button {
        padding-top: 25px;
        border: none;
        text-align: center;

        &::before {
          content: none;
        }
      }

    }

    &__label {
      font-size: 16px;
      line-height: 30px;
      font-weight: 600;
      color: $color-light;
      overflow: hidden;

      &::before {
        content: attr(data-text);
        display: block;
        padding-left: 46px;		
      }

    }

    &__input {
      font-size: 18px;
      font-weight: bold;
      color: $color-dark;
      padding: 19px 0 20px;
      margin-left: 46px;    
      outline: none;
      border: none;
      background-color: transparent;
    }


    &__submit {
      min-width: 160px;
      max-width: 348px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 30px;
      background-image: linear-gradient(90deg,#9300e8,#4a00ed);
      border-radius: 37px 5px 45px;
      color: $white-color;
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;

      &:hover, &:focus {
        background-image: linear-gradient(90deg,#bb00ff ,#5900ff);
        outline: none;
      }

      @include phones {
        min-width: 260px;
      }
    }


    @include phones {
      padding: 174px 30px;
      
    }
  }

</style>