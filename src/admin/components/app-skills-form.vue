<template lang="pug">

  form.skills-form(
    @submit.prevent='changeCategoryName'
  )

    .skills-form__title 
      input.skills-form__input-title(
        placeholder='Название новой группы'
        v-model='changedCategory.newtitle'
        :class='{"skills-form__input-title_hidden" : !editModeCategory}'
        @keyup.enter='changeCategoryName'
        ref='editCategoryInput'
      )
      .skills-form__tooltip(
        :class='{"skills-form__tooltip_error" : isErrorCategoryInput}',
      ) {{textErrorCategoryInput}}
      
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
    
    addNewSkill(
      :categoryObject='categoryObject'
    )


</template>

<script>

    import skillItem from './app-skill-item'
    import addNewSkill from './app-add-new-skill'
        
    import { mapActions, mapState } from 'vuex';    

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

          isErrorCategoryInput: false,
          textErrorCategoryInput: 'Некорректное имя',
        }
      },

      computed: {

        editCategoryInput() { 
          return this.$refs['editCategoryInput'];
        },

        ...mapState('skills', {
          allSkills: state => state.skills
        }),

        skills() {
          return (this.allSkills.filter(skill => skill.category === this.categoryObject.id)).sort( (a, b) => a.id - b.id );
        },
      },
      
      created() {
        this.refreshAllSkills();
      },

      methods: {

        validateCategoryInput() {
          let newCategoryName = this.editCategoryInput.value;

          if (newCategoryName.length < 2) {
            this.textErrorCategoryInput = 'Короткое имя категории';
            this.isErrorCategoryInput = true;
          }
          else {
            console.log('Валидное имя', newCategoryName);
            this.isErrorCategoryInput = false;
          }
          return !this.isErrorCategoryInput;
        },

        editModeCategoryON() {
          this.editModeCategory = true;
          this.$nextTick(() => {
            
            this.editCategoryInput.focus();
          });
        },
        editModeCategoryOff() {
          this.editModeCategory = false;
          this.isErrorCategoryInput = false;
        },

        ...mapActions('categories', ['deleteCategory', 'renameCategory']),
        ...mapActions('skills', ['refreshAllSkills']),        

        async removeCategory() {
          try { 
            await this.deleteCategory(this.categoryObject.id);
          }
          catch(error) {
              alert('исправь потом меня, я ошибка из removeCategory: ' + error.message);
          }          
        },

        async changeCategoryName() {
          //валидация
          if (this.validateCategoryInput()) {
            
            this.editModeCategoryOff();
            try { 
              await this.renameCategory(this.changedCategory);                        
            }
            catch(error) {
                alert('исправь потом меня, я ошибка из changeCategoryName: ' + error.message);
            }
            finally {
              this.changedCategory.newtitle = '';
            }

          }
          else
            console.log('Валидация не пройдена!');
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
      position: relative;

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

    &__tooltip {
      display: none;
      position: absolute;
      min-height: 36px;		
      bottom: 0%;
      left: calc(56% / 2);
      transform: translate(-50%, 25px);
      font-size: 14px;
      line-height: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 80%;
      font-weight: 600;
      padding: 10px 20px;
      color: $white-color;
      background-color: rgba($color-red, 0.8);
      border-radius: 20px 5px 20px 5px;
       
        &::before {
          content: '';
          position: absolute;
          top: -5px;
          left: 50%;			
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-width: 0 5px 5px 5px;
          border-color: transparent transparent $color-red transparent;
          border-style: solid;
        }

      &_error {
        display: block;
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