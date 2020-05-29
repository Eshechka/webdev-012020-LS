<template lang="pug">

    form.skills-form__add-new-item(@submit.prevent='handleForm')

      .skills-form__group-input-error.skills-form__group-input-error_name
        input.skills-form__input-new-item-name(
          placeholder='Новый навык'
          v-model='skill.title'
          )
        div.skills-form__error.skills-form__error_name(v-if="checkForm && $v.skill.title.$invalid")
          span(v-if="!$v.skill.title.maxLength") Максимум символов в названии: {{ $v.skill.title.$params.maxLength.max }}
          span(v-else-if="!$v.skill.title.minLength") Минимум символов в названии: {{ $v.skill.title.$params.minLength.min }}
          span(v-else) Обязательно для заполнения

      .skills-form__group-input-error.skills-form__group-input-error_percent
        input.skills-form__input-new-item-percent(
          placeholder='100'
          v-model='skill.percent'
          type='number' step='1' min='0' max='100'        
          )

        label.skills-form__label-new-item-percent
        
        div.skills-form__error.skills-form__error_percent(v-if="checkForm && $v.skill.percent.$invalid")
          span(v-if="!$v.skill.percent.between") Диапазон: от {{ $v.skill.percent.$params.between.min }} до {{ $v.skill.percent.$params.between.max }}
          span(v-else) Обязательно для заполнения

      .skills-form__add-button
        .add
          button.add__plus(
            type='submit'
            :disabled='disableForRequest'
          )

</template>

<script>

    import { mapActions } from 'vuex';
    import { required, numeric, minLength, maxLength, between } from 'vuelidate/lib/validators';

    export default {
      props: {
        categoryObject: Object,
      },

      data() {
        return {
        
        skill: {
          title: '',
          percent: '',
          category: this.categoryObject.id,
        },

        checkForm: false,

        disableForRequest: false,
        }
      },


      validations: {

        skill: {
          title: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(30),
          },
          percent: {
            required,
            numeric,
            between: between(0, 100),
          },
        },
      },

      methods: {

        handleForm() {
          this.checkForm = true;
          
          if (!this.$v.$invalid) {
            this.createNewSkill();
            this.checkForm = false;
          }
        },
        
        ...mapActions('skills', ['addSkill']),

        async createNewSkill() {
          if (!this.disableForRequest) {

            this.disableForRequest = true;

            try {
              await this.addSkill(this.skill);
              this.skill.title='';
              this.skill.percent='';
            }
            catch (error) {
              alert('исправь потом меня, я ошибка из createNewSkill: ' + error.message);
            } 
            finally {
              this.disableForRequest = false;
            }

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

      &[disabled] {
        background-color: rgba($admin-button-color, 0.5);
      }

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

    &__group-input-error {
      position: relative;

      &_name {

      min-width: 40%;
      width: 235px;

        @include tablets {
          max-width: 145px;
          min-width: unset;
          width: 50%;
        }
      }

      &_percent {


      }

    }
    
    &__error {
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translate(-50%, 25px);
      min-height: 30px;		
      font-size: 12px;
      line-height: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 600;
      padding: 5px 10px;
      color: $white-color;
      background-color: rgba($color-red, 0.8);
      border-radius: 15px 5px 15px 5px;

        &::before {
          content: '';
          position: absolute;
          top: -5px;
          left: 50%;			
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-width: 0 5px 5px 5px;
          border-color: transparent transparent rgba($color-red, 0.8) transparent;
          border-style: solid;
        }

    }

    &__input-new-item-name {
      width: 100%;
      @include admin-input();
      padding-left: 20px;

      @include tablets {
        font-size: 14px;        

      }
    }

    &__input-new-item-percent {
      
      @include admin-input();
      width: 15%;
      min-width: 50px;
      margin-left: 9px;
      padding-right: 20px;
      
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
            right: 0px;
            color: $color-middle;
            height: 20px;
            width: 20px;
          }
      }
    }
  }

</style>