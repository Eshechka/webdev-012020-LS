<template lang="pug">

  form.skills-form(
    @submit.prevent='changeCategoryName'
  )
    .skills-form__title 
      input.skills-form__input-title(
        placeholder='Название новой группы'
        v-model='changedCategory.newtitle'
        :class='{"skills-form__input-title_hidden" : !editModeCategory}'
      )
      .skills-form__added-title(
        :class='{"skills-form__added-title_hidden" : editModeCategory}'
      ) {{categoryObject.category}}
      
      .skills-form__controls
        .controls
          button.controls__btn.controls__btn_edit(
            :class='{"controls__btn_none" : editModeCategory}'
            @click.prevent='editModeCategoryON'
          )          
          button.controls__btn.controls__btn_tick(type='submit'
            :class='{"controls__btn_none" : !editModeCategory}'
          )
          button.controls__btn.controls__btn_red_remove(
            :class='{"controls__btn_none" : !editModeCategory}'
            @click.prevent='editModeCategoryOff'

          )
          button.controls__btn.controls__btn_trash(
            :class='{"controls__btn_none" : editModeCategory}'
            @click.prevent='removeCategory'
          )

    .skills-form__added-items
      ul.added-items
        li.added-items__row(v-for='skill in skills' :key='skill.id')
          skillItem(
            :skillObject='skill'
          )
          //- form.added-items__form(
          //-   @submit.prevent='changeSkillNamePercent(skill)'
          //- )
          //-   input.added-items__name(
          //-     :disabled='!skillObj.editModeSkill'
          //-     :placeholder='skill.title'
          //-     )
          //-   .added-items__percent
          //-     input.added-items__input-percent(
          //-       :disabled='!skillObj.editModeSkill'
          //-       :placeholder='skill.percent'
          //-       type='number' step='1' min='0' max='100' 
          //-       )
          //-   .added-items__controls
          //-     .controls
          //-       button.controls__btn.controls__btn_edit(
          //-         :class='{"controls__btn_none" : skillObj.editModeSkill}'
          //-         @click.prevent='editModeSkillON'
          //-       )
          //-       button.controls__btn.controls__btn_trash(
          //-         :class='{"controls__btn_none" : skillObj.editModeSkill}'
          //-         @click.prevent='removeSkill(skill.id)'
          //-       )
          //-       button.controls__btn.controls__btn_tick(type='submit'
          //-         :class='{"controls__btn_none" : !skillObj.editModeSkill}'
          //-       )
          //-       button.controls__btn.controls__btn_red_remove(
          //-         :class='{"controls__btn_none" : !skillObj.editModeSkill}'
          //-         @click.prevent='editModeSkillOff'
          //-       )

    
    addNewSkill(
      :categoryObject='categoryObject'
    )


</template>

<script>

    import skillItem from './app-skill-item'
    import addNewSkill from './app-add-new-skill'
        
    import { mapActions } from 'vuex';
    import { mapState } from 'vuex';
    

    export default {
      components: {
        skillItem,
        addNewSkill,
        },

      props: {
        categoryObject: Object,
        editModeNewCategory: Boolean,
      },

      data() {
        return {

          editModeCategory: this.editModeNewCategory,

          changedCategory: {
            ...this.categoryObject,
            newtitle: '',
          },


          //это данные списка скиллов, которые можно потом вынести в компонент

          // skillObj: {
          //   // ...this.skill,
          //   editModeSkill: false,
          // },

        }
      },

      computed: {
        ...mapState('skills', {
          allSkills: state => state.skills
        }),

        skills() {
          return this.allSkills.filter(skill => skill.category === this.categoryObject.id)
        },
      },
      
      created() {
        this.refreshAllSkills();
      },

      methods: {

        editModeCategoryON() {
          this.editModeCategory = true;
        },
        editModeCategoryOff() {
          this.editModeCategory = false;
          this.changedCategory.newtitle = '';
        },


        //это методы списка скиллов, которые можно потом вынести в компонент
        // editModeSkillON() {
        //   this.skillObj.editModeSkill = true;
        // },
        // editModeSkillOff() {
        //   this.skillObj.editModeSkill = false;
        // },




        ...mapActions('categories', ['deleteCategory', 'renameCategory']),
        ...mapActions('skills', ['refreshAllSkills']),        
        // ...mapActions('skills', ['refreshAllSkills', 'deleteSkill', 'changeSkill']),        

        async removeCategory() {
          try { 
            await this.deleteCategory(this.categoryObject.id);
          }
          catch(error) {
              alert('исправь потом меня, я ошибка из removeCategory: ' + error.message);
          }
        },

        async changeCategoryName() {
          try { 
            await this.renameCategory(this.changedCategory);
            this.editModeCategory = false;             
          }
          catch(error) {
              alert('исправь потом меня, я ошибка из changeCategoryName: ' + error.message);
          }
          finally {
            // this.editModeCategory = false; 
          }
        },

        //это async методы списка скиллов, которые можно потом вынести в компонент
        // async removeSkill(skillId) {
        //   try { 
        //     await this.deleteSkill(skillId);            
        //   }
        //   catch(error) {
        //       alert('исправь потом меня, я ошибка из removeCategory: ' + error.message);
        //   }
        // },

        // async changeSkillNamePercent(skill) {
        //   try { 
        //     await this.changeSkill(skill);
        //     this.skillObj.editModeSkill = false;             
        //   }
        //   catch(error) {
        //       alert('исправь потом меня, я ошибка из changeSkillNamePercent: ' + error.message);
        //   }
        // },
        
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

    /* &__form {
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
    } */
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

  }

</style>