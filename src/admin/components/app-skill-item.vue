<template lang="pug">

  form.skill-item(
    @submit.prevent='changeSkillNamePercent'
  )
    input.skill-item__name(
      :disabled='!changedSkill.editModeSkill'
      :placeholder='skillObject.title'
      )
    .skill-item__percent
      input.skill-item__input-percent(
        :disabled='!changedSkill.editModeSkill'
        :placeholder='skillObject.percent'
        type='number' step='1' min='0' max='100' 
        )
    .skill-item__controls
      .controls
        button.controls__btn.controls__btn_edit(
          :class='{"controls__btn_none" : changedSkill.editModeSkill}'
          @click.prevent='editModeSkillON'
        )
        button.controls__btn.controls__btn_trash(
          :class='{"controls__btn_none" : changedSkill.editModeSkill}'
          @click.prevent='removeSkill'
        )
        button.controls__btn.controls__btn_tick(type='submit'
          :class='{"controls__btn_none" : !changedSkill.editModeSkill}'
        )
        button.controls__btn.controls__btn_red_remove(
          :class='{"controls__btn_none" : !changedSkill.editModeSkill}'
          @click.prevent='editModeSkillOff'
        )
  
  //- li.skill-item__row
  //-   input.skill-item__name(placeholder='CSS3')
  //-   .skill-item__percent
  //-     input.skill-item__input-percent(type='number' step='1' min='0' max='100' placeholder='90')
  //-   .skill-item__controls
  //-     .controls
  //-       button.controls__btn.controls__btn_edit.controls__btn_none
  //-       button.controls__btn.controls__btn_trash.controls__btn_none
  //-       button.controls__btn.controls__btn_tick(type='submit')
  //-       button.controls__btn.controls__btn_red_remove

</template>

<script>
        
    import { mapActions } from 'vuex';
    import { mapState } from 'vuex';
    
    export default {

      props: {
        skillObject: Object,
      },

      data() {
        return {

          changedSkill: {
            ...this.skillObject,
            editModeSkill: false,
          },

        }
      },


      methods: {
        editModeSkillON() {
          this.changedSkill.editModeSkill = true;
        },
        editModeSkillOff() {
          this.changedSkill.editModeSkill = false;
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
          try { 
            await this.changeSkill(this.skillObject);
            this.changedSkill.editModeSkill = false;             
          }
          catch(error) {
              alert('исправь потом меня, я ошибка из changeSkillNamePercent: ' + error.message);
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


</style>