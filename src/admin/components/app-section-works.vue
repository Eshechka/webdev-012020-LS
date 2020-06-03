<template lang="pug">

section.works
  .container.container_admin
    .works__topgroup
      h3.works__title Блок "Работы" 

    .works__content.works__content_edit-work
      editWork(
        v-if='isVisibleEditForm'
        @hideEditForm='hideEditForm'
        :editMode='editMode'
      )

    .works__content.works__content_added-works
      .added-works
        ul.added-works__list
          li.added-works__item
            .add.add_theme_big(
              @click='showEditForm("new")'
            )
              span.add__text Добавить работу
              button.add__plus(type='button')

          li.added-works__item(
            v-for='work in works' :key='work.id'
          )
            work(
              :workObject='work'
              @showEditForm='showEditForm'
            )


</template>

<script>
    import editWork from './app-edit-work'
    import work from './app-work'

    import { mapState, mapActions } from 'vuex';

    export default {

      components: {
        editWork, work
      },

      data() {
        return {
          isVisibleEditForm: false,
          editMode: '',
        }
      },

      computed: {
        
      ...mapState('works', {
        allWorks: state => state.works
      }),
      
      works() {
        return (this.allWorks).sort( (a, b) => b.id - a.id );
        },
      },
            
      created() {
        this.refreshAllWorks();
      }, 

      methods: {

        ...mapActions('works', ['refreshAllWorks', 'setCurrentWork']),

        showEditForm(mode) {      
          this.isVisibleEditForm = true;
          this.editMode = mode;

          if (mode === 'new') this.setCurrentWork();
        },
        hideEditForm() {
          this.isVisibleEditForm = false;
        },

      },
    }
</script>

<style lang="postcss">

   @import "normalize.css";
   @import "../../styles/mixins.pcss";
   @import "../../styles/layout/base.pcss";
   @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

  .works {  

    background-color: #f7f9fe;
    background-image: url('../../images/content/Mountain_Baloon_admin.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 30px 0;

    &__topgroup {

      display: flex;
      align-items: center;
      padding-top: 22px;
      margin-bottom: 55px;

      @include tablets {
        margin-bottom: 40px;
      }

      @include phones {
        margin-bottom: 20px;
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

    &__content {
      
      &_edit-work {

        margin-bottom: 30px;
        
        @include tablets {
          margin-bottom: 40px;
        }
        @include phones {
          width: 110%;
          margin-left: -5%;
          margin-bottom: 20px;
        }
      }

      &_added-works {

        @include phones {
          width: 110%;
          margin-left: -5%;
        }
      }

    }
  }

  .added-works {

    &__list {
      margin-left: -30px;
      display: flex;
      flex-wrap: wrap;
    }

    &__item {
      min-height: 556px;
      width: calc( 100% / 3 - 30px);
      margin-left: 30px;
      margin-bottom: 30px;
      background-color: $white-color;
      box-shadow: 4px 3px 20px 0px rgba(0, 0, 0, 0.07);

      @include tablets {
        width: calc( 100% / 2 - 30px);
        min-height: 640px;
      }
      @include phones {
        width: 100%;
        min-height: 130px;
        margin-bottom: 12px;
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

    &_theme_big {
      position: relative;
      width: 100%;
      height: 100%;
      cursor: pointer;
      background: $admin-base-gradient;

      
      &:hover, &:active, &:focus  {
          
        background: $admin-base-color;

        .add__text { 
          text-shadow: 0px 0px 30px rgba($white-color, 0.6);
          color: $white-color;
        }
      }

      & .add__text {
        position: absolute;
        width: 30%;
        height: 20%;
        bottom: 19%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        color: $white-color;
        font-size: 18px;
        line-height: 30px;
        font-weight: bold;

        @include phones {
          width: unset;
          bottom: 45%;
        }

        &_bottom_offset {
          bottom: 15%;

          @include phones {
            bottom: 44%;
          }
        }
      }

      & .add__plus {
        width: 100%;
        height: 100%;    
        position: relative;
        padding: 0;
        border-radius: 0;
        background: unset;

        &:hover, &:active, &:focus {
          background: unset;
        }

        &::after {
          content: '+';
          font-size: 68px;
          font-weight: 400;
          line-height: 150px;
          color: $white-color;
          text-align: center;
          position: absolute;
          width: 150px;
          height: 150px;
          top: 43%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid $white-color;

          @include phones {
            width: 52px;
            height: 52px;
            font-size: 30px;
            line-height: 52px;
            top: 48%;
            left: 14%;
          }
          
        }
        &_top_offset {

          &::after {
            top: 39%;

            @include tablets{
              top: 39%;
              width: 170px;
              height: 170px;
              font-size: 80px;
              line-height: 170px;
            }
            @include phones {
              top: 50%;
              width: 55px;
              height: 55px;
              font-size: 30px;
              line-height: 50px;
            }
          }
        }
      }
    }

  }

</style>