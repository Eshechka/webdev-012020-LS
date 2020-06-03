<template lang="pug">

section.reviews
  .container.container_admin
    .reviews__topgroup.reviews__topgroup_reviews
      h3.reviews__title Блок "Отзывы"   

    .reviews__content.reviews__content_edit-review
      editReview(
        v-if='isVisibleEditForm'
        @hideEditForm='hideEditForm'
        :editMode='editMode'
      )

    .reviews__content.reviews__content_added-reviews
      .added-reviews
        ul.added-reviews__list
          li.added-reviews__item
            .add.add_theme_big(
              @click='showEditForm("new")'
            )
              span.add__text.add__text_bottom_offset Добавить отзыв
              button.add__plus.add__plus_top_offset(type='button')

          li.added-reviews__item(
            v-for='review in reviews' :key='review.id'
          )
            review(
              :reviewObject='review'
              @showEditForm='showEditForm'
            )

</template>

<script>

    import editReview from './app-edit-review';
    import review from './app-review';

    import { mapState, mapActions } from 'vuex';

    export default {

      components: {
        editReview, review
      },

      data() {
        return {
          isVisibleEditForm: false,
          editMode: '',
        }
      },
            
      computed: {
        
        ...mapState('reviews', {
          allReviews: state => state.reviews
        }),
        
        reviews() {
          return (this.allReviews).sort( (a, b) => b.id - a.id );
        },
      },

      created() {
        this.refreshAllReviews();
      }, 

      methods: {

        ...mapActions('reviews', ['refreshAllReviews', 'setCurrentReview']),

        showEditForm(mode) {      
          this.isVisibleEditForm = true;
          this.editMode = mode;

          if (mode === 'new') this.setCurrentReview();
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

  .reviews {  

    background-color: #f7f9fe;
    background-image: url('../../images/content/Mountain_Baloon_admin.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 30px 0;
    padding-top: 55px;

      @include tablets {
        padding-top: 0;
      }

    &__topgroup {

      display: flex;
      align-items: center;
      margin-bottom: 55px;

      @include tablets {
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
      
      &_edit-review {
        margin-bottom: 38px;

        @include phones {
          width: 110%;
          margin-left: -5%;
          margin-bottom: 16px;
        }
      }
      &_added-reviews {
        margin-bottom: 30px;

        @include phones {
          width: 110%;
          margin-left: -5%;
        }
      }
    }
  }

  .added-reviews {

    &__list {
      margin-left: -30px;
      display: flex;
      flex-wrap: wrap;
    }

    &__item {
      min-height: 380px;
      width: calc( 100% / 3 - 30px);
      margin-left: 30px;
      margin-bottom: 30px;
      background-color: $white-color;
      box-shadow: 4px 3px 20px 0px rgba(0, 0, 0, 0.07);

      @include tablets {
        width: calc( 100% / 2 - 30px);
        min-height: 440px;
      }
      @include phones {
        width: calc(100% - 30px);
        min-height: 128px;
        margin-bottom: 10px;
      }
    }
  }

  .review {

    height: 100% ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__topgroup {
      margin: 0 20px;
      padding: 20px 0 20px 10px;
      color: $base-color;
      font-size: 18px;
      line-height: 34px;
      font-weight: 700;
      border-bottom: 1px solid rgba(#1f232d, 0.5);
      display: flex;
      align-items: center;

      @include tablets {
        padding-top: 33px;
        padding-bottom: 32px;
        padding-left: 22px;
      }
      @include phones {
        margin-left: 0;
        margin-right: 0;
      }
    }

    &__avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20px;
    }

    &__image-author {
      @include img-object-fit;
    }

    &__author {
      font-size: 18px;
      font-weight: bold;
      color: $base-color;
    }

    &__occupation{
      font-size: 16px;
      line-height: 30px;
      font-weight: 600;
      color: $color-light;
    }

    &__info {
        padding: 30px;

        @include tablets {
          padding: 26px 36px 26px 36px;
        }
        @include phones {
          padding: 26px 16px 16px 16px;
        }
    }

    &__text {
        font-size: 16px;
        line-height: 30px;
        font-weight: 600;
        margin-bottom: 15px;

        @include phones {
          line-height: 28px;
        }
    }

    &__controls {
      padding: 0 30px 30px;
      margin-top: auto;
      display: flex;
      justify-content: space-between; 

      @include tablets {
        padding: 0 36px 40px;
      }
      @include phones {
        padding-right: 16px;
        padding-left: 16px;
        padding-bottom: 34px;
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