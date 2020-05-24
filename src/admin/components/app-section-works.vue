<template lang="pug">

section.works
  .container.container_admin
    .works__topgroup
      h3.works__title Блок "Работы" 

    .works__content.works__content_edit-work
      .edit-work
        .edit-work__title Редактирование работы
        .edit-work__content
          form.edit-work__form(action='change-me' method='get')
            .edit-work__image
              .edit-work__image-wrapper
                .edit-work__image-text Перетащите или загрузите для загрузки изображения
                button.edit-work__image-load Загрузить
            .edit-work__info
              .edit-work__row.edit-work__row_name 
                label.edit-work__label Название
                input.edit-work__input(placeholder='Дизайн сайта для авто салона Porsche' required)
              .edit-work__row.edit-work__row_link 
                label.edit-work__label Ссылка
                input.edit-work__input(type='url' placeholder='https://www.porsche-pulkovo.ru' required)
              .edit-work__row.edit-work__row_desc 
                label.edit-work__label Описание
                textarea.edit-work__input(type="textarea" name="work-description" rows=4 resize='none' placeholder='Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей')
              .edit-work__row.edit-work__row_tags 
                label.edit-work__label Добавление тега
                input.edit-work__input(placeholder='Jquery, Vue.js, HTML5')
                .edit-work__added-tags
                  .edit-work__added-tag Jquery
                  .edit-work__added-tag Vue.js
                  .edit-work__added-tag HTML5
              .edit-work__row.edit-work__row_buttons    
                button.edit-work__cancel Отмена
                button.edit-work__submit(type='submit') Сохранить

    .works__content.works__content_added-works
      .added-works
        ul.added-works__list
          li.added-works__item
            .add.add_theme_big
              span.add__text Добавить работу
              button.add__plus(type='button')

          li.added-works__item
            .work
              .work__image
                img.work__picture(src='../../images/content/sliderpicture1.jpg')
              .work__info
                .work__title Сайт школы образования
                .work__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a.work__link http://loftschool.ru
              .work__controls
                .controls.controls_with_text
                  span.controls__text Править                          
                  button.controls__btn.controls__btn_blue_edit
                .controls.controls_with_text
                  span.controls__text Удалить                          
                  button.controls__btn.controls__btn_red_remove

          li.added-works__item
            .work
              .work__image
                img.work__picture(src='../../images/content/sliderpicture2.jpg')
              .work__info
                .work__title Сайт школы образования
                .work__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a.work__link http://loftschool.ru
              .work__controls
                .controls.controls_with_text
                  span.controls__text Править                          
                  button.controls__btn.controls__btn_blue_edit
                .controls.controls_with_text
                  span.controls__text Удалить                          
                  button.controls__btn.controls__btn_red_remove

          li.added-works__item
            .work
              .work__image
                img.work__picture(src='../../images/content/sliderpicture3.jpg')
              .work__info
                .work__title Сайт школы образования
                .work__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a.work__link http://loftschool.ru
              .work__controls
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

  .edit-work {

    background-color: $white-color;
    box-shadow: 4px 3px 20px 0px rgba(0, 0, 0, 0.07);

    &__title {
      margin: 11px;
      padding: 0 11px;
      padding-top: 20px;
      padding-bottom: 20px;
      color: $base-color;
      font-size: 18px;
      line-height: 34px;
      font-weight: 700;
      border-bottom: 1px solid rgba(#1f232d, 0.5);

      @include tablets {        
        padding-top: 24px;
        padding-bottom: 24px;
      }
      @include phones {
        padding-left: 0px;
        margin-left: 0;
      }
    }

    &__content {
      padding: 30px;
      padding-top: 36px;

      @include tablets {
        padding-top: 20px;
      }

      @include phones {
        padding-left: 0;
        padding-right: 0;
        padding-top: 20px;
      }
    }

    &__form {
      display: flex;

      @include tablets {
        flex-direction: column;
        align-items: center;
      }
    }

    &__image {
      width: calc(53% - 30px);
      height: 276px;
      margin-right: 30px;

      @include tablets { 
        width: 70%;
        margin-right: 0;
        height: 370px;
        padding-bottom: 70px;
      }    
      @include phones { 
        width: 84%;
        height: 220px;
        padding-bottom: 40px;
      }
    }

    &__image-wrapper {
      width: 100%;
      height: 100%;
      background-color: rgba(#dee4ed, 0.5);
      border: 1px dashed #d5d7da;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @include tablets {
        position: relative;
      }
    }


    &__image-text {
      color: rgba($base-color, 0.95);
      font-size: 16px;
      line-height: 34px;
      font-weight: 600;
      width: 45%;
      text-align: center;
    
      @include tablets {
        display: none;
      }
    }

    &__image-load {
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
      margin-top: 30px;

      &:hover, &:active, &:focus {
        background: $admin-base-color;
      }

      @include tablets {
        position: absolute;
        bottom: -70px;
        margin-top: 0;
      }
      @include phones {
        position: absolute;
        bottom: -60px;
      }
    }


    &__info {
      width: 50%;

      @include tablets { 
        width: 75%;
        margin-top: 35px;
      }
      @include phones { 
        width: 90%;
      }
    }

    &__row {
      margin-bottom: 25px;

      @include phones {
        margin-bottom: 30px;
      }

      &_buttons {
        justify-content: flex-end;
        text-align: right;
        margin-top: 45px;
        margin-bottom: 0;

        @include tablets {
          margin-top: 48px;
          text-align: center;
        }
        @include phones {
          justify-content: space-around;
          display: flex;
        }
      }

      &_desc {
        margin-bottom: 15px;

      }
      &_link {
        
        @include phones {
          margin-bottom: 18px;
        }
      }
    }

    &__label {
      display: block;
      width: 100%;
      font-size: 16px;
      line-height: 30px;
      color: rgba(#base-color, 0.95);
    }

    &__input {
      @include admin-input();
      width: 100%;

      &[type='textarea'] {
        resize: none;
        border: 1px solid $color-light;
        padding: 20px;
        line-height: 28px;

        @include tablets {
          margin-top: 18px;
          line-height: 32px;        
        }
        @include phones {
          padding-bottom: 10px;
          padding-top: 10px;
          height: 240px;
        }
      }

      @include tablets {
        padding-bottom: 17px;
      }
    }

    
    &__added-tags {
      display: flex;
      margin-top: 20px;
    }  
    &__added-tag {
      margin-right: 10px;
      padding: 8px 33px 8px 19px;
      font-size: 12px;
      line-height: 1;
      position: relative;
      background-color: rgba(#dee4ed, 0.5);
      border-radius: 30px;

      &:after {
        content: '';
        cursor: pointer;
        position: absolute;
        right: 14px;
        top: 50%;      
        transform: translateY(-50%);
        height: 10px;
        width: 10px;
        padding: 0;
        background-image: svg-load('remove.svg', width=100%, height=100%, fill=#{$color-middle});
        background-repeat: no-repeat;
        background-size: 10px 10px;
        background-position: center;

        @include tablets {
          height: 12px;
          width: 12px;
          background-size: 12px 12px;
        }
      }

      @include tablets {
        padding: 11px 40px 11px 19px;
        font-size: 14px;
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
        margin-right: 0;
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

  .work {

    height: 100% ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__image {

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

    &__info {
        padding: 20px;
        padding-top: 40px;

        @include phones {
          padding-top: 26px;
          padding-bottom: 42px;
        }
    }
    &__title {
        margin-bottom: 15px;
        font-size: 18px;
        font-weight: bold;
    }

    &__text {
        font-size: 16px;
        line-height: 30px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    &__link {
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