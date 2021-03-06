<template lang="pug">

section.about()
  .container.container_admin
    .about__topgroup.about__topgroup_about
      h3.about__title Блок "Обо мне"

      .add.add_small(
        v-if='!editModeNewCategory'
        @click='showAddForm'
      )
        span.add__text Добавить группу
        button.add__plus.add__plus_small

    .skills-groups
        ul.skills-groups__list

          li.skills-groups__item.skills-groups__item_new(
            v-if='editModeNewCategory'
          )
            form.skills-form(@submit.prevent='addNewCategory')
              .skills-form__title 
                input.skills-form__input-title(
                  placeholder='Название новой группы'
                  v-model='newCategory.title'
                  ref='editNewCategoryInput'
                )
                               
                .skills-form__controls
                  .controls
                    button.controls__btn.controls__btn_tick(
                      type='submit'
                    )
                    button.controls__btn.controls__btn_red_remove(
                      @click='hideAddForm'
                    )

          li.skills-groups__item(v-for='item in categories' :key='item.id')
            skillsForm(
              :categoryObject='item'
              )
                
</template>

<script>

    import skillsForm from './app-skills-form'

    import { mapActions, mapState } from 'vuex';

    export default {
      components: {
          skillsForm,
        },

      data() {
        return {
          editModeNewCategory: false,

          newCategory: {
            title: '',
          }
        }
      },
      
      computed: {

        editNewCategoryInput() { 
          return this.$refs['editNewCategoryInput'];
        },

        ...mapState('categories', {
          allCategories: state => state.categories
        }),
        
        categories() {
          return (this.allCategories).sort( (a, b) => b.id - a.id );
        },
      },
      
      created() {
        this.refreshAllCategories();
      },      

      methods: {

        hideAddForm() {
          this.editModeNewCategory = false;
          this.newCategory.title = '';
        },
        showAddForm() {
          this.editModeNewCategory = true;

          this.$nextTick(() => {            
            this.editNewCategoryInput.focus();
          });
        },

        ...mapActions('categories', ['addCategory', 'refreshAllCategories']),

        async addNewCategory() {
          
          try {
            await this.addCategory(this.newCategory.title);
          }
          catch (error) {
            alert('исправь потом меня, я ошибка из addNewCategory: ' + error.message);
          }
          finally {
            this.hideAddForm();
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

  .about {  

    background-color: #f7f9fe;
    background-image: url('../../images/content/Mountain_Baloon_admin.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 30px 0;

    &__topgroup {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      padding-top: 22px;
      margin-bottom: 40px;

      @include tablets {
        margin-bottom: 40px;
      }

      @include phones {
        flex-direction: column;
        align-items: flex-start;
        padding-top: 10px;
        padding-bottom: 0;
        margin-bottom: 43px;
      }
    }

    &__title {
      font-weight: bold;
      font-size: 22px;
      margin-right: 52px;

      @include phones {
        margin-bottom: 25px;
      }
    }
  }
    
  .skills-groups {
    width: 100%;

    &__list {
      display: flex;
      flex-wrap: wrap;
      width: calc(100% + 30px);
      margin-left: -30px;

      @include phones {
        width: 110%;
        margin-left: -5%;
      }
    }
    &__item {      
      width: calc( (100% - 30px * 2) / 2);
      min-height: 390px;
      background-color: $white-color;
      box-shadow: 4px 2px 20px 0px rgba(0, 0, 0, 0.07);
      padding: 20px;
      margin-left: 30px;
      margin-bottom: 30px;

      &_new {
        .controls__btn {
          padding: 9px;

          &:hover, &:active, &:focus  {
            background-size: 18px 18px;
          }

          &_tick {
            background-size: 16px 16px;
          }

          &_red_remove {
            background-size: 16px 14px;
            
            &:hover, &:active, &:focus  {
              background-size: 18px 16px;
            }
          }
        }
      }

      @include tablets {
        min-height: 450px;
      }      
      @include phones {
        min-height: 360px;
        width: 100%;
        margin-left: 0;
        padding-left: 10px;
        margin-bottom: 10px;
      }
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

    &_with_text {
      cursor: pointer;
      width: unset;
      align-items: center;
      position: relative;
                      
        &:hover, &:active, &:focus  {

          & .controls__text {
            color: $color-middle;
          }
        }

      & .controls__btn {
        width: 100%;
        position: absolute;
        background-position: right;
        padding: 9px;
        margin-right: 0px;
        margin-left: 0px;

          &_red_remove {
            
            background-size: 16px 15px;
            
            &:hover, &:active, &:focus  {
              background-size: 17px 16px;
            }

            @include phones {
              background-size: 18px 16px;
            }
          }
          &_blue_edit {
            
            background-size: 17px 17px;

                          
            &:hover, &:active, &:focus  {
              background-size: 18px 18px;
            }

            @include phones {
              background-size: 18px 18px;
            }
          }
      }

      & .controls__text {
        margin-right: 26px;
        font-size: 16px;
        font-weight: 600;
        color: $color-light;
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
      .add__text { 
        color: rgba($admin-base-color, 0.8);
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

    &__text {
      color: $admin-base-color;
      font-weight: 700;
      font-size: 16px;
    } 

    
    &_small {
      .add__plus {
        width: 20px;
        height: 20px;

        &::after {
          font-size: 14px;
        }

        @include tablets {
          &::after {
            font-size: 14px;
          }
        }
      }

      .add__text {
        cursor: pointer;
        color: $admin-base-color;
        font-weight: 700;
        font-size: 16px;
        padding-left: 13px;
        padding-top: 5px;
        padding-bottom: 5px;
      }
    }
  }

</style>