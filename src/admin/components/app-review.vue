<template lang="pug">

  .review
    .review__topgroup
      .review__avatar 
        img.review__image-author(:src='`${baseUrl}/${reviewObject.photo}`')
      .review__author {{reviewObject.author}}
        .review__occupation {{reviewObject.occ}}
    .review__info
      .review__text {{reviewObject.text}}
    .review__controls
      .controls.controls_with_text
        span.controls__text Править                          
        button.controls__btn.controls__btn_blue_edit(
          @click='editReview'
        )
      .controls.controls_with_text
        span.controls__text Удалить                          
        button.controls__btn.controls__btn_red_remove(
          @click='removeReview'
        )

</template>

<script>

    import { mapActions } from 'vuex';

    import { required, numeric, minLength, maxLength, between } from 'vuelidate/lib/validators';

    import requests from '../requests';
    const baseUrl = requests.defaults.baseURL;

    export default {

        props: {
          reviewObject: Object,
        },  

        data() {
          return {
            changedReview: {
              ...this.reviewObject,
            },
            baseUrl: baseUrl,
          }
        },

        methods: {
          ...mapActions('reviews', ['deleteReview', 'setCurrentReview']), 

          editReview() {
            this.setCurrentReview(this.changedReview.id);
            this.$emit("showEditForm", "edit");            
          },

          async removeReview() {
            try { 
              await this.deleteReview(this.reviewObject.id);            
            }
            catch(error) {
                alert('исправь потом меня, я ошибка из removeReview: ' + error.message);
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
      flex-shrink: 0;
    }

    &__image-author {
      @include img-object-fit;
    }

    &__author {
      overflow: hidden;
      font-size: 18px;
      font-weight: bold;
      color: $base-color;
    }

    &__occupation{
      overflow: hidden;
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
        overflow: hidden;
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
  
</style>