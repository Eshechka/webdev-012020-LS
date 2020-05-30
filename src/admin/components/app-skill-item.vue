<template lang="pug">
div
  pre {{'Форма валидна  ' + !$v.$invalid}}
  pre {{'Режим редактирования ' + changedSkill.editModeSkill}}

  pre {{'Текущее значение  ' + skillObject.title}}                         {{skillObject.percent}}
  pre {{'Новое значение  '  + changedSkill.newTitle}}                       {{changedSkill.newPercent}}

  form.skill-item(
    @submit.prevent='changeSkillNamePercent'
  )
    .skill-item__group-input-error.skill-item__group-input-error_name

      input.skill-item__name(
        :disabled='!changedSkill.editModeSkill'
        :placeholder='skillObject.title'
        v-model='changedSkill.newTitle'
        ref='editSkillNameInput'
        )
      div.skill-item__error.skill-item__error_name(v-if="changedSkill.editModeSkill && $v.changedSkill.newTitle.$invalid")
        span(v-if="!$v.changedSkill.newTitle.maxLength") Максимум символов в названии: {{ $v.changedSkill.newTitle.$params.maxLength.max }}
        span(v-else-if="!$v.changedSkill.newTitle.minLength") Минимум символов в названии: {{ $v.changedSkill.newTitle.$params.minLength.min }}
        span(v-else) Обязательно для заполнения

    .skill-item__percent
      input.skill-item__input-percent(type='number' step='1' min='0' max='100' 
        :disabled='!changedSkill.editModeSkill'
        :placeholder='skillObject.percent'
        v-model='changedSkill.newPercent'
        )
      div.skill-item__error.skill-item__error_percent(v-if="changedSkill.editModeSkill && $v.changedSkill.newPercent.$invalid")
        span(v-if="!$v.changedSkill.newPercent.between") Диапазон значений: от {{ $v.changedSkill.newPercent.$params.between.min }} до {{ $v.changedSkill.newPercent.$params.between.max }}
        span(v-else) Обязательно для заполнения

    .skill-item__controls
      .controls
        button.controls__btn.controls__btn_edit(
          :class='{"controls__btn_none" : changedSkill.editModeSkill}'
          @click='editModeSkillON'
        )
        button.controls__btn.controls__btn_trash(
          :class='{"controls__btn_none" : changedSkill.editModeSkill}'
          @click='removeSkill'
        )
        button.controls__btn.controls__btn_tick(type='submit'
          :class='{"controls__btn_none" : !changedSkill.editModeSkill}'
        )
        button.controls__btn.controls__btn_red_remove(
          :class='{"controls__btn_none" : !changedSkill.editModeSkill}'
          @click='editModeSkillOff(true)'
        )

</template>

<script>
        
    import { mapActions, mapState } from 'vuex';
    import { required, numeric, minLength, maxLength, between } from 'vuelidate/lib/validators';
    
    export default {

      props: {
        skillObject: Object,
      },

      data() {
        return {

          changedSkill: {
            ...this.skillObject,
            editModeSkill: false,
            newTitle: '',
            newPercent: '',
          },
        }
      },

      validations: {
        changedSkill: {
          newTitle: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(30),
          },
          newPercent: {
            required,
            numeric,
            between: between(0, 100),
          },
        },
      },

      methods: {
        editModeSkillON() {
          console.log('меняю editModeSkill');          
          this.changedSkill.editModeSkill = true;

          this.$nextTick(() => {            
            this.$refs['editSkillNameInput'].focus();
          });

          // this.changedSkill.newTitle = this.skillObject.title;
          // this.changedSkill.newPercent = this.skillObject.percent;
        },

        editModeSkillOff(needClear) {
          this.changedSkill.editModeSkill = false;
          if (needClear) {
            console.log('очистка инпутов');            
            this.inputsClear();
          }
        },

        inputsClear() {
            this.changedSkill.newTitle = '';
            this.changedSkill.newPercent = '';
        },


        ...mapActions('skills', ['deleteSkill', 'changeSkill']),        

        async removeSkill() {
          try { 
            await this.deleteSkill(this.skillObject.id);            
          }
          catch(error) {
              alert('исправь потом меня, я ошибка из removeCategory: ' + error.message);
          }
        },

        async changeSkillNamePercent() {

              if (this.$v.$invalid) {
                  console.log('INVALID FORM');                
                  return;
              }

            this.editModeSkillOff();           
              try {
                await this.changeSkill(this.changedSkill);
              }
              catch(error) {
                  alert('исправь потом меня, я ошибка из changeSkillNamePercent: ' + error.message);
              }
              finally {
                this.inputsClear();
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

  
  
  .skill-item {    
      display: flex;
      align-items: center;
      margin-bottom: 10px;

    &__group-input-error {
      position: relative;

      &_name {
        flex-basis: 58%;
        width: 58%;

        @include tablets {
          width: 40%;
        }
      }
    }

    &__name {
      @include admin-input(16px, $color-light);
      width: 100%;
      font-weight: 600;
      padding: 0;

      @include tablets {
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

      &_percent {
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

</style>