<template lang="pug">

    form.skills-form__add-new-item(@submit.prevent='createNewSkill')
      input.skills-form__input-new-item-name(
        placeholder='Новый навык'
        v-model='skill.title'
        )
      input.skills-form__input-new-item-percent(
        placeholder='100'
        v-model='skill.percent'

        type='number' step='1' min='0' max='100'        
        )
      label.skills-form__label-new-item-percent
      .skills-form__add-button
        .add
          button.add__plus(
            type='submit'
          )

</template>

<script>

    import { mapActions } from 'vuex';

    export default {
      props: {
        categoryObject: Object,
      },

      data() {
        return {
         skill: {
          title: '',
          percent: 0,
          category: this.categoryObject.id,
        },
        }
      },


      methods: {
        
        ...mapActions('skills', ['addSkill']),

        async createNewSkill() {
          try {
            await this.addSkill(this.skill);
            this.skill.title='';
            this.skill.percent='';
          }
          catch (error) {
            alert('исправь потом меня, я ошибка: ' + error.message);
          }
        },
      },
    }
</script>

<style lang="postcss">

   @import "normalize.css";
   @import "../../styles/mixins.pcss";
   @import "../../styles/layout/base.pcss";
   @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

  

  
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