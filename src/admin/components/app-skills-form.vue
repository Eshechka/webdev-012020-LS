<template lang="pug">

  form.skills-form(
    @submit.prevent='createSkillsTitle'
  )
    .skills-form__title 
      input.skills-form__input-title(placeholder='Название новой группы'
        v-model='skillsTitle'
        
      )
      .skills-form__added-title.skills-form__added-title_hidden Frontend
      .skills-form__controls
        .controls
          button.controls__btn.controls__btn_edit.controls__btn_none
          button.controls__btn.controls__btn_tick(type='submit')
          button.controls__btn.controls__btn_red_remove
          button.controls__btn.controls__btn_trash.controls__btn_none

    .skills-form__added-items
      ul.added-items
        li.added-items__row
          input.added-items__name(placeholder='Git' disabled)
          .added-items__percent
            input.added-items__input-percent(type='number' step='1' min='0' max='100' placeholder='100' disabled)
          .added-items__controls
            .controls
              button.controls__btn.controls__btn_edit
              button.controls__btn.controls__btn_trash

        li.added-items__row
          input.added-items__name(placeholder='Terminal' disabled)
          .added-items__percent
            input.added-items__input-percent(type='number' step='1' min='0' max='100' placeholder='90' disabled)
          .added-items__controls
            .controls
              button.controls__btn.controls__btn_edit
              button.controls__btn.controls__btn_trash
              button.controls__btn.controls__btn_tick(type='submit').controls__btn_none
              button.controls__btn.controls__btn_red_remove.controls__btn_none

        li.added-items__row
          input.added-items__name(placeholder='CSS3')
          .added-items__percent
            input.added-items__input-percent(type='number' step='1' min='0' max='100' placeholder='90')
          .added-items__controls
            .controls
              button.controls__btn.controls__btn_edit.controls__btn_none
              button.controls__btn.controls__btn_trash.controls__btn_none
              button.controls__btn.controls__btn_tick(type='submit')
              button.controls__btn.controls__btn_red_remove

    .skills-form__add-new-item
      input.skills-form__input-new-item-name(placeholder='Новый навык')
      input.skills-form__input-new-item-percent(type='number' step='1' min='0' max='100' placeholder='100')
      label.skills-form__label-new-item-percent
      .skills-form__add-button
        .add
          button.add__plus


</template>

<script>

    import $axios from '../requests'

    export default {
      data() {
        return {
          skillsTitle: '',            
        }
      },
      methods: {
        createSkillsTitle() {
          console.log('имя категории: ', this.skillsTitle);
          console.log('$axios: ', $axios);
          this.createCategory();
        },

        createCategory() {
          $axios.post('categories/', {
            title: this.skillsTitle,
          })
          .then(function (response) {
            console.log('data: ', response.data);
          })
          .catch(function (error) {
            console.log(error.response.data);
          });

        }, 
      },
    }
</script>

<style lang="postcss">

   @import "normalize.css";
   @import "../../styles/mixins.pcss";
   @import "../../styles/layout/base.pcss";
   @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

  
  
  .added-items {
    padding-left: 9px;

    &__row {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    &__name {
      @include admin-input(16px, $color-light);
      font-weight: 600;
      padding: 0;
      flex-basis: 58%;
      width: 58%;

      @include tablets {
        width: 40%;
        font-size: 18px;
        line-height: 2;
      }
    }

    &__percent {
      width: 73px;
      margin-left: 10px;
      margin-right: 20px;
      position: relative;
      
      &:after {
        content: '%';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        color: $color-middle;
      }

      @include tablets {
        margin-left: 5px;
        margin-right: 5px;
        font-size: 18px;
        line-height: 2;
      }
    }

    &__input-percent {
      @include admin-input(16px,);
      width: 100%;
      padding: 0;
      padding-right: 20px;
      padding-left: 10px;

      &:active, &:focus {
            border-color: $admin-base-color;
      }
      
      @include tablets {
        padding-right: 10px;
        padding-left: 5px;
      }
    }

    &__controls {
      width: 80px;
      overflow: hidden;
      margin-left: auto;
    }
  }

  .controls {
    width: 100%;
    display: flex;

    justify-content: flex-end;

    &__btn {
      padding: 8px;
      background-color: transparent;
      background-repeat: no-repeat;
      background-size: 15px 15px;
      background-position: center;
      margin-right: 12px;
      margin-left: 8px;

      &:hover, &:active, &:focus  {
        outline: none;
        background-size: 16px 16px;
      }

      @include tablets {
        margin-right: 6px;
        margin-left: 4px;
      }

      &_none {    
        display: none;
      }

      &_tick {    
        background-image: svg-load('tick.svg', fill=#{$color-green});
      }
      &_remove {        
        background-image: svg-load('remove.svg', width=100%, height=100%, fill=#{$color-middle});
      }
      &_red_remove {
        background-image: svg-load('remove.svg', width=100%, height=100%, fill=#{$color-red});
        background-size: 15px 11px;
        
        &:hover, &:active, &:focus  {
          background-size: 16px 12px;
        }
      }
      &_edit {
        background-image: svg-load('pencil.svg', width=100%, height=100%, fill=#{$color-middle});
      }
      &_blue_edit {
        background-image: svg-load('pencil.svg', width=100%, height=100%, fill=#{$color-blue});
      }
      &_trash {
        background-image: svg-load('trash.svg', width=100%, height=100%, fill=#{$color-middle});
      }
    }

  }
  
  .add {

    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    &:hover, &:active, &:focus  {
      .add__plus { 
        background-image: $admin-base-gradient;
      }
    }
      
    &__plus {
      background-color: $admin-button-color;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      position: relative;

      &::after {
        content: '+';
        color: $white-color;
        font-size: 28px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      @include tablets {

        width: 47px;
        height: 47px;

        &::after {
          font-size: 36px;
        }
      }

    }
  }

  .skills-form {

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__title {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 14px;
      border-bottom: 1px solid rgba(#1f232d, 0.15);
      position: relative;

      @include tablets {
        padding-bottom: 25px;
      }
        @include phones {
        padding-bottom: 18px;
      }
    }

    &__added-title {
      position: absolute;
      top: 0;
      left: 0;
      padding: 5px 0;
      padding-left: 9px;
      font-size: 18px;
      line-height: 34px;
      font-weight: 600;

      &_hidden {
        display: none;
      }
    }

    &__input-title {

      @include admin-input();
      width: 56%;
      min-width: 220px;
      margin-left: 9px;

      &_hidden {
        visibility: hidden;
      }

      @include tablets() {
        min-width: unset;

        &::placeholder{
          font-size: 13px;
        }
      }
    }

    &__controls {
      width: 80px;
      padding-bottom: 13px;
    }

    &__added-items {
      @include tablets {
        padding-top: 10px;
        padding-bottom: 40px;
      }
      @include phones {
        padding-top: 25px;
        padding-bottom: 22px;
      }
    }


    &__add-new-item {
      height: 74px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 10px;
    }

    &__input-new-item-name {

      @include admin-input();
      min-width: 40%;
      width: 235px;
      padding-left: 20px;

      @include tablets {
        font-size: 14px;        
        max-width: 145px;
        min-width: unset;
        width: 50%;
      }
    }

    &__input-new-item-percent {
      
      @include admin-input();
      width: 15%;
      min-width: 50px;
      margin-left: 9px;
      margin-right: 20px;//должен совпадать с right следующей label
      
      &::placeholder {
        color: $color-light;
      }
      
      & + label.skills-form__label-new-item-percent {
          position: relative;
          display: inline-block;
          vertical-align: middle;
          padding: 5px 0;
          height: 20px;

          &::after {
            content: '%';
            position: absolute;
            top: -1px;
            right: 20px;//должен совпадать с правым маржином input
            color: $color-middle;
            height: 20px;
            width: 20px;
          }
      }
    }
  }

</style>