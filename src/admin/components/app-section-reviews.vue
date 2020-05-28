<template lang="pug">

section.reviews
  .container.container_admin
    .reviews__topgroup.reviews__topgroup_reviews
      h3.reviews__title Блок "Отзывы"   

    .reviews__content.reviews__content_edit-review
      .edit-review
        .edit-review__title Новый отзыв
        .edit-review__content
          form.edit-review__form(action='./change-me' method='get')
            .edit-review__image
              .edit-review__image-place
              input.edit-review__image-load(type='file' name='review-image')
              a.edit-review__image-text(href='./change-me') Добавить фото

            .edit-review__info
              .edit-review__row
                .edit-review__group.edit-review__group_name
                  label.edit-review__label Имя автора
                  input.edit-review__input(placeholder='Ковальчук Дмитрий' required)
                .edit-review__group.edit-review__group_occupation
                  label.edit-review__label Титул автора
                  input.edit-review__input(placeholder='Основатель' required)
              .edit-review__row.edit-review__row_textarea
                .edit-review__group.edit-review__group_review
                  label.edit-review__label Отзыв
                  textarea.edit-review__input.edit-review__input_textarea(type="textarea" name="review-description" rows=3 resize='none' placeholder='Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!' required)

              .edit-review__row.edit-review__row_buttons    
                button.edit-review__cancel Отмена
                button.edit-review__submit(type='submit') Сохранить

    .reviews__content.reviews__content_added-reviews
      .added-reviews
        ul.added-reviews__list
          li.added-reviews__item
            .add.add_theme_big
              span.add__text.add__text_bottom_offset Добавить отзыв
              button.add__plus.add__plus_top_offset(type='button')

          li.added-reviews__item
            .review
              .review__topgroup
                .review__avatar
                  img.review__image-author(src='../../images/content/review_authot1.png')
                .review__author Ковальчук Дмитрий
                  .review__occupation Основатель Loftschool
              .review__info
                .review__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
              .review__controls
                .controls.controls_with_text
                  span.controls__text Править                          
                  button.controls__btn.controls__btn_blue_edit
                .controls.controls_with_text
                  span.controls__text Удалить                          
                  button.controls__btn.controls__btn_red_remove
                  
          li.added-reviews__item
            .review
              .review__topgroup
                .review__avatar
                  img.review__image-author(src='../../images/content/review_authot1.png')
                .review__author Ковальчук Дмитрий
                  .review__occupation Основатель Loftschool
              .review__info
                .review__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
              .review__controls
                .controls.controls_with_text
                  span.controls__text Править                          
                  button.controls__btn.controls__btn_blue_edit
                .controls.controls_with_text
                  span.controls__text Удалить                          
                  button.controls__btn.controls__btn_red_remove
                  
          li.added-reviews__item
            .review
              .review__topgroup
                .review__avatar
                  img.review__image-author(src='../../images/content/review_authot1.png')
                .review__author Ковальчук Дмитрий
                  .review__occupation Основатель Loftschool
              .review__info
                .review__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
              .review__controls
                .controls.controls_with_text
                  span.controls__text Править                          
                  button.controls__btn.controls__btn_blue_edit
                .controls.controls_with_text
                  span.controls__text Удалить                          
                  button.controls__btn.controls__btn_red_remove

</template>

<script>
    export default {
        
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

  .edit-review {

    background-color: $white-color;
    box-shadow: 4px 3px 20px 0px rgba(0, 0, 0, 0.07);
    padding-bottom: 24px;

    &__title {
      margin: 11px;
      padding: 20px 11px 20px;
      color: $base-color;
      font-size: 18px;
      line-height: 34px;
      font-weight: 700;
      border-bottom: 1px solid rgba(#1f232d, 0.5);

      @include tablets {
        padding-top: 24px;
        padding-bottom: 24px;
      }
    }

    &__content {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &__image {
      width: 200px;
      margin-right: 30px;

      @include tablets {
        width: 260px;
      }
      @include phones {
        margin-right: 0;
        width: unset;
        margin-bottom: 38px;
      }
    }

    &__image-place {
      width: 200px;
      height: 200px;
      background-color: #dee4ed;
      border-radius: 50%;
      margin-bottom: 21px;

      @include tablets {
        width: 230px;
        height: 230px;
      }
    }

    &__image-load {
      display: none;
    }

    &__image-text {
      color: $color-blue;
      font-size: 16px;
      line-height: 34px;
      font-weight: 600;
      display: block;
      width: 100%;
      text-align: center;
      text-decoration: none;

      &:hover, &:active, &:focus {
        color: rgba($color-blue, 0.8);
      }
    }

    &__info {
      width: calc(100% - 200px - 30px);
      max-width: 610px;
      
      @include phones {
        width: 100%;
      }
    }

    &__form {
      padding: 30px;
      padding-top: 34px;
      display: flex;

      @include tablets {
        padding-top: 40px;
        padding-bottom: 10px;
      }
      @include phones {
        flex-direction: column;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
      }
    }

    &__row {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 32px;

      @include tablets {
        flex-direction: column;
      }
      @include phones {
        margin-bottom: 22px;
      }

      &_textarea {
        margin-bottom: 32px;
      }

      &_buttons {
        justify-content: flex-end;
        text-align: right;
        margin-bottom: 0;

        @include tablets {
          flex-direction: row;
        }
        @include phones {
          justify-content: space-around;
        }
      }
      

    }
    
    &__cancel {
      color: $admin-base-color;
      font-size: 16px;
      line-height: 34px;
      font-weight: 700;
      background-color: transparent;
      margin-right: 60px;
          
      &:hover, &:active, &:focus {
        color: rgba($admin-base-color, 0.8);
        outline: none;
      }

      @include phones {
        margin-right: 0px;
      }
    }

    &__submit {
      text-transform: uppercase;
      background-image: $admin-base-gradient;
      border-radius: 40px;
      padding: 19px;
      color: $white-color;
      min-width: 180px;
      font-size: 16px;
      font-weight: bold;
      border: none;
      outline: none;
      
      &:hover, &:active, &:focus {
        background: $admin-base-color;
      }


      @include tablets {
        font-size: 18px;
        padding: 23px 46px;
      }
    }


    &__group {
      display: flex;
      flex-direction: column;
      width: calc( (100% - 30px) / 2);

      @include tablets {
        width: 70%;
      }
      @include phones {
        width: 100%;
      }

      &_name {

        @include tablets {
          margin-bottom: 40px;
        }
        @include phones {
          margin-bottom: 26px;
        }
      }
      &_review {
        width: 100%;
      }
    }

    &__label {
      display: block;
      width: 100%;
      font-size: 16px;
      line-height: 24px;
      color: rgba(#base-color, 0.95);

      @include tablets {
        line-height: 32px;
      }
    }

    &__input {
      @include admin-input;
      padding-bottom: 10px;

      &[type='textarea'] {
        padding: 10px 20px 12px 20px;
        resize: none;
        border: 1px solid $color-light;
        line-height: 30px;
        margin-top: 16px;

        @include tablets {
          line-height: 36px;
          height: 170px;
        }
        @include phones {
          line-height: 29px;
          font-size: 16px;
          padding-right: 10px;
        }
      }

      @include tablets {
        padding-bottom: 15px;
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