<template lang="pug">

  .work
    .work__image
      img.work__picture(:src='`${baseUrl}/${workObject.photo}`')
      ul.work__tags 
        li.work__tag(
          v-for='tag in tags'
        ) {{tag}}

    .work__info
      .work__title {{workObject.title}}
      .work__text {{workObject.description}}
      a.work__link {{workObject.link}}
    .work__controls
      .controls.controls_with_text
        span.controls__text Править                          
        button.controls__btn.controls__btn_blue_edit(
          @click='editWork'
        )
      .controls.controls_with_text
        span.controls__text Удалить                          
        button.controls__btn.controls__btn_red_remove(
          @click='removeWork'
        )

</template>

<script>

    import { mapActions } from 'vuex';

    import requests from '../requests';
    const baseUrl = requests.defaults.baseURL;

    export default {

      props: {
        workObject: Object,
      },  

      data() {
        return {
          changedWork: {
            ...this.workObject,
          },
          baseUrl: baseUrl,
        }
      },

      computed: {
        tags() {
          return this.workObject.techs.split(/[\s|,]+/);
        },
      },      

      methods: {
        ...mapActions('works', ['deleteWork', 'setCurrentWork']), 

        editWork() {
          this.setCurrentWork(this.changedWork.id);
          this.$emit("showEditForm", "edit");            
        },

        async removeWork() {
          try { 
            await this.deleteWork(this.workObject.id);            
          }
          catch(error) {
            alert('исправь потом меня, я ошибка из removeWork: ' + error.message);
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


  .work {

    height: 100% ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__image {
      position: relative;
      height: 190px;
      width: 100%;

      @include tablets {
        height: 220px;
      }
      @include phones {
        height: 216px;
      }
    }

    &__picture {
      @include img-object-fit;      
    }

    &__tags {
      position: absolute;
      bottom: 0;
      width: 100%;
      max-height: 60%;
      overflow: hidden;
      display: flex;
      justify-content: flex-end;
      flex-wrap: wrap-reverse;

        @include tablets {
          max-height: 50%;
        }
    }

    &__tag {
      margin: 5px;
      margin-left: 10px;
      padding: 8px 20px;
      font-size: 12px;
      line-height: 1;
      position: relative;
      background-color: rgba(#dee4ed, 0.5);
      border-radius: 30px;

      }


    &__info {
        padding: 20px;
        padding-top: 40px;

        @include phones {
          padding-top: 26px;
          padding-bottom: 42px;
        }
    }
    &__title {
        overflow: hidden;
        margin-bottom: 15px;
        font-size: 18px;
        font-weight: bold;
    }

    &__text {
        overflow: hidden;
        font-size: 16px;
        line-height: 30px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    &__link {
      overflow: hidden;
      display: block;
      text-overflow: ellipsis;
      font-size: 16px;
      line-height: 30px;
      font-weight: 600;
      color: $color-blue;

      &:hover, &:active, &:focus {
        color: rgba($color-blue, 0.8);
      }
    }

    &__controls {
      padding: 0 20px 30px; 
      margin-top: auto;
      display: flex;
      justify-content: space-between;
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