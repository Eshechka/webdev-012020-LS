<template lang="pug">
.maincontent

  section.fullscreen-section.auth
    .auth__wrapper
    .auth__block
      form.auth-form
        .auth-form__title Авторизация
        .auth-form__row
          .auth-form__group.auth-form__group_login
            label.auth-form__label(data-text='Логин')
              input.auth-form__input(type='text' required)
        .auth-form__row
          .auth-form__group.auth-form__group_password
            label.auth-form__label(data-text='Пароль') 
              input.auth-form__input(type='password' required)
        .auth-form__row
          .auth-form__group.auth-form__group_button
            button.auth-form__submit(type='submit') Отправить


  .maincontent__header
    header.header      
      .container.container_admin
        .header__container.header__container_admin
          .header__logo
            .logotype
              .logotype__image
                img.logotype__picture(src='../images/content/user.jpg')
          .header__info  
            .header__name Владимир Астаханов
                //- .logotype__name Владимир Астаханов

            .header__desc Панель администрирования

            .header__login
              .login
                a.login__link Выйти

  .maincontent__menu
    nav.menu.menu_admin_theme
      .container.container_admin
        .menu__container
          ul.menu__list
            li.menu__item
              a.menu__link.menu__link_active(href='./change-me' data-title='Обо мне') Обо мне
            li.menu__item
              a.menu__link.menu__link(href='./change-me' data-title='Работы') Работы
            li.menu__item
              a.menu__link.menu__link(href='./change-me' data-title='Отзывы') Отзывы

  section.maincontent__section.maincontent__section_about
    .container.container_admin
      .maincontent__topgroup.maincontent__topgroup_about
        h3.maincontent__title Блок "Обо мне"       
        .add.add_small
          span.add__text Добавить группу
          button.add__plus.add__plus_small

      .skills-groups
          ul.skills-groups__list
            li.skills-groups__item
              form.skills-groups__form(action='change-me' method='get')
                .skills-groups__add-item-title 
                  input.skills-groups__input-title(placeholder='Название новой группы' required)
                  .skills-groups__title.skills-groups__title_hidden Somename
                  .skills-groups__controls
                    .controls                                   
                      button.controls__btn.controls__btn_edit.controls__btn_none
                      button.controls__btn.controls__btn_tick(type='submit')
                      button.controls__btn.controls__btn_red_remove

                .skills-groups__added-items
                  ul.added-items
                    
                .skills-groups__add-new-item
                  input.skills-groups__input-new-item-name(placeholder='Новый навык' required)
                  input.skills-groups__input-new-item-percent(type='number' step='1' min='0' max='100' placeholder='100' required)
                  label.skills-groups__label-new-item-percent
                  .skills-groups__add-button
                    .add
                      button.add__plus



            li.skills-groups__item
              form.skills-groups__form(action='change-me' method='get')
                .skills-groups__add-item-title 
                  input.skills-groups__input-title(placeholder='Название новой группы' required)
                  .skills-groups__title.skills-groups__title_hidden Frontend
                  .skills-groups__controls
                    .controls                                   
                      button.controls__btn.controls__btn_edit.controls__btn_none
                      button.controls__btn.controls__btn_tick(type='submit')
                      button.controls__btn.controls__btn_red_remove

                .skills-groups__added-items
                  ul.added-items
                    li.added-items__row
                      input.added-items__name(placeholder='Git' disabled required)
                      .added-items__percent
                        input.added-items__input-percent(type='number' step='1' min='0' max='100' placeholder='100' disabled required)
                      .added-items__controls
                        .controls
                          button.controls__btn.controls__btn_edit
                          button.controls__btn.controls__btn_trash

                    li.added-items__row
                      input.added-items__name(placeholder='Terminal' disabled required)
                      .added-items__percent
                        input.added-items__input-percent(type='number' step='1' min='0' max='100' placeholder='90' disabled required)
                      .added-items__controls
                        .controls
                          button.controls__btn.controls__btn_edit
                          button.controls__btn.controls__btn_trash

                    li.added-items__row
                      input.added-items__name(placeholder='Gulp' disabled)
                      .added-items__percent
                        input.added-items__input-percent(type='number' step='1' min='0' max='100' placeholder='80' disabled required)
                      .added-items__controls
                        .controls
                          button.controls__btn.controls__btn_edit
                          button.controls__btn.controls__btn_trash

                    li.added-items__row
                      input.added-items__name(placeholder='Webpack' disabled required)
                      .added-items__percent
                        input.added-items__input-percent(type='number' step='1' min='0' max='100' placeholder='70' disabled required)
                      .added-items__controls
                        .controls
                          button.controls__btn.controls__btn_edit
                          button.controls__btn.controls__btn_trash

                .skills-groups__add-new-item
                  input.skills-groups__input-new-item-name(placeholder='Новый навык' required)
                  input.skills-groups__input-new-item-percent(type='number' step='1' min='0' max='100' placeholder='100' required)
                  label.skills-groups__label-new-item-percent
                  .skills-groups__add-button
                    .add
                      button.add__plus


            li.skills-groups__item
              form.skills-groups__form(action='change-me' method='get')
                .skills-groups__add-item-title 
                  input.skills-groups__input-title.skills-groups__input-title_hidden(placeholder='Название новой группы' required)
                  .skills-groups__title Workflow
                  .skills-groups__controls
                    .controls                                   
                      button.controls__btn.controls__btn_edit
                      button.controls__btn.controls__btn_tick.controls__btn_none(type='submit')
                      button.controls__btn.controls__btn_red_remove.controls__btn_none              

                .skills-groups__added-items
                  ul.added-items
                    li.added-items__row
                      input.added-items__name(placeholder='HTML5' disabled required)
                      .added-items__percent
                        input.added-items__input-percent(type='number' step='1' min='0' max='100' placeholder='100' disabled required)
                      .added-items__controls
                        .controls
                          button.controls__btn.controls__btn_edit
                          button.controls__btn.controls__btn_trash

                    li.added-items__row
                      input.added-items__name(placeholder='CSS3' required)
                      .added-items__percent
                        input.added-items__input-percent(type='number' step='1' min='0' max='100' placeholder='90' required)
                      .added-items__controls
                        .controls
                          button.controls__btn.controls__btn_edit
                          button.controls__btn.controls__btn_trash
                          

                    li.added-items__row
                      input.added-items__name(placeholder='Javascript' disabled required)
                      .added-items__percent
                        input.added-items__input-percent(type='number' step='1' min='0' max='100' placeholder='70' disabled required)
                      .added-items__controls
                        .controls
                          button.controls__btn.controls__btn_edit
                          button.controls__btn.controls__btn_trash

                .skills-groups__add-new-item
                  input.skills-groups__input-new-item-name(placeholder='Новый навык' required)
                  input.skills-groups__input-new-item-percent(type='number' step='1' min='0' max='100' placeholder='100' required)
                  label.skills-groups__label-new-item-percent
                  .skills-groups__add-button
                    .add
                      button.add__plus
              

  section.maincontent__section.maincontent__section_works
    .container.container_admin
      .maincontent__topgroup.maincontent__topgroup_works
        h3.maincontent__title Блок "Работы" 

      .maincontent__content.maincontent__content_edit-work
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
                  input.edit-work__submit(type='submit' value='Сохранить')

      .maincontent__content.maincontent__content_added-works
        .added-works
          ul.added-works__list
            li.added-works__item
              .add.add_theme_big
                span.add__text Добавить работу
                button.add__plus(type='button')

            li.added-works__item
              .work
                .work__image
                  img.work__picture(src='../images/content/sliderpicture1.jpg')
                .work__info
                  .work__title Сайт школы образования
                  .work__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .work__link http://loftschool.ru
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
                  img.work__picture(src='../images/content/sliderpicture2.jpg')
                .work__info
                  .work__title Сайт школы образования
                  .work__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .work__link http://loftschool.ru
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
                  img.work__picture(src='../images/content/sliderpicture3.jpg')
                .work__info
                  .work__title Сайт школы образования
                  .work__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  .work__link http://loftschool.ru
                .work__controls
                  .controls.controls_with_text
                    span.controls__text Править                          
                    button.controls__btn.controls__btn_blue_edit
                  .controls.controls_with_text
                    span.controls__text Удалить                          
                    button.controls__btn.controls__btn_red_remove

  section.maincontent__section.maincontent__section_reviews
    .container.container_admin
      .maincontent__topgroup
        h3.maincontent__title Блок "Отзывы"   

      .maincontent__content.maincontent__content_review
        .edit-review
          .edit-review__title Новый отзыв
          .edit-review__content
            .edit-review__image            
              .edit-review__image-place
              a.edit-review__image-text(href='./change-me') Добавить фото

            .edit-review__info
              form.edit-review__form(action='./change-me' method='get')
                .edit-review__row
                  .edit-review__group.edit-review__group_name
                    label.edit-review__label Имя автора
                    input.edit-review__input(placeholder='Ковальчук Дмитрий' required)
                  .edit-review__group.edit-review__group_occupation
                    label.edit-review__label Титул автора
                    input.edit-review__input(placeholder='Основатель' required)
                .edit-review__row
                  .edit-review__group.edit-review__group_review
                    label.edit-review__label Отзыв
                    textarea.edit-review__input.edit-review__input_textarea(type="textarea" name="review-description" rows=4 resize='none' placeholder='Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!' required)

                .edit-review__row.edit-review__row_buttons    
                  button.edit-work__cancel Отмена
                  input.edit-work__submit(type='submit' value='Сохранить')

        .added-reviews
          ul.added-reviews__list
            li.added-reviews__item
              .add.add_theme_big
                span.add__text Добавить отзыв
                button.add__plus(type='button')

            li.added-reviews__item
              .review
                .review__topgroup
                  .review__avatar
                    img.review__image-author(src='../images/content/review_authot1.png')
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


<style lang="postcss">

   @import "normalize.css";
   @import "../styles/mixins.pcss";
   @import "../styles/layout/base.pcss";
   @import "../styles/blocks/menu.pcss";
   @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");


  
  section {
    /* background-color: #f7f9fe;
    background-image: url('../images/content/Mountain_Baloon_admin.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 30px 0; */
  }

  .maincontent {

    &__header {
      background: $admin-header-gradient;
    }

    &__menu {
      background-color: #ffffff;
      padding-top: 23px;

      @include tablets {
        padding-top: 30px;
      }
    }

    &__section {
      background-color: #f7f9fe;
      background-image: url('../images/content/Mountain_Baloon_admin.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      padding: 30px 0;
    }

    &__topgroup {
      display: flex;
      align-items: center;
      margin-bottom: 40px;

      @include tablets {
        margin-bottom: 40px;
      }

      &_about {
        padding-bottom: 10px;
        padding-top: 22px;
        margin-bottom: 40px;

        @include phones {
          flex-direction: column;
          align-items: flex-start;
          padding-top: 10px;
          padding-bottom: 0;
          margin-bottom: 43px;
        }
      }
      &_works {
        padding-top: 22px;
        margin-bottom: 55px;

        @include phones {
          margin-bottom: 20px;
        }
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

      &_review {
        margin-bottom: 30px;
      }
    }
  }

  .auth {

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: relative;

    &__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(#000, 0.5);
    }

    &__block {
      width: 80%;
      max-width: 563px;
      min-width: 320px;

      @include phones {
        width: 100%;
      }
    }
  }

  .auth-form {
    z-index: 100;
    opacity: 0.999;
    width: 100%;
    background: $white-color;
    padding: 60px 78px;

    &__title {
      font-size: 36px;
      margin-bottom: 15px;
      font-weight: 600;
      text-align: center;
    }

    &__row {		
      line-height: 0;
      margin-bottom: 35px;
    }

    &__group {
      position: relative;
      border-bottom: 1px solid $base-color;

      &::before {
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
        bottom: 16px;
        left: 0px;
        background-repeat: no-repeat;
        background-position: center;
      }

      &:active, &:focus, &:hover {
        border-color: $base-color-hover;
        outline: none;
      }


      &_login {

        &::before {
          background-image: svg-load('user.svg' fill=#{$color-light});				
        }

        &:active, &:focus, &:hover {
          &::before {
            background-image: svg-load('user.svg' fill=#{$base-color-hover});
          }
        }
      }

      &_password {

        &::before {
          background-image: svg-load('key.svg' fill=#{$color-light});				
        }

        &:active, &:focus, &:hover {
          &::before {
            background-image: svg-load('key.svg' fill=#{$base-color-hover});
          }
        }
      }
          
      &_button {
        padding-top: 25px;
        border: none;
        text-align: center;

        &::before {
          content: none;
        }
      }

    }

    &__label {
      font-size: 16px;
      line-height: 30px;
      font-weight: 600;
      color: $color-light;
      overflow: hidden;

      &::before {
        content: attr(data-text);
        display: block;
        padding-left: 46px;		
      }

    }

    &__input {
      font-size: 18px;
      font-weight: bold;
      color: $color-dark;
      padding: 19px 0 20px;
      margin-left: 46px;    
      outline: none;
      border: none;
      background-color: transparent;
    }


    &__submit {
      min-width: 160px;
      max-width: 348px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 30px;
      background-image: linear-gradient(90deg,#9300e8,#4a00ed);
      border-radius: 37px 5px 45px;
      color: $white-color;
      font-size: 18px;
      font-weight: bold;
      text-transform: uppercase;

      &:hover, &:focus {
        background-image: linear-gradient(90deg,#bb00ff ,#5900ff);
        outline: none;
      }

      @include phones {
        min-width: 260px;
      }
    }


    @include phones {
      padding: 174px 30px;
      
    }
  }

  .header {    

    &__container {     

      &_admin {
        display: flex;
        color: $white-color;
        min-height: 80px;
        align-items: center;

        @include tablets {
          min-height: 90px;
        }
      }
    }

    &__info {
      display: inline-flex;
      justify-content: space-between;
      align-items: center; 
      flex-grow: 1;

      @include phones {
        flex-direction: column;
        align-items: flex-start;
      }
    }


    &__name {
      color: $white-color;
      margin-left: 20px;
      font-size: 18px;

      @include tablets {
        font-size: 22px;
      }
      @include phones {
        font-size: 18px;
      }
    }

    &__desc {
      margin-left: 35px;
      font-size: 14px;
      color: rgba($white-color, 0.5);

      @include tablets {
        font-size: 14px;
      }
      @include phones {
        display: none;
      }
    }   

    &__login {
      margin-left: auto;

      @include tablets {
        padding-left: 20px;
      }
      @include phones {
        margin-left: 0;
      }
    }
  }
  

  .logotype {
    display: flex;
    align-items: center;

    &__image {
      height: 45px;
      width: 45px;
      min-width: 45px;
      min-height: 45px;
      border-radius: 50%;

      @include tablets {

      }
    }

    &__picture {      
      @include img-object-fit;
    }

    &__name {
      color: $white-color;
      margin-left: 20px;
      font-size: 18px;

      @include tablets {
        font-size: 22px;
      }
      @include phones {
        font-size: 18px;
      }
    }
  }

  .login {

    &__link {
      text-decoration: underline;
      color: rgba($white-color, 0.5);

        &:hover {
          color: $white-color;
        }
        &:active, &:focus  {
          outline: none;          
          color: rgba($white-color, 0.75);
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

    &__form {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__add-item-title {
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

    &__title {
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


    &__add-new-item {
      height: 74px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 10px;
    }

    &__input-new-item-name {

      @include admin-input();
      min-width: 40%;
      width: 235px;
      padding-left: 20px;

      @include tablets {
        font-size: 14px;        
        max-width: 145px;
        min-width: unset;
        width: 50%;
      }
    }

    &__input-new-item-percent {
      
      @include admin-input();
      width: 15%;
      min-width: 50px;
      margin-left: 9px;
      margin-right: 20px;//должен совпадать с right следующей label
      
      &::placeholder {
        color: $color-light;
      }
      
      & + label.skills-groups__label-new-item-percent {
          position: relative;
          display: inline-block;
          vertical-align: middle;
          padding: 5px 0;
          height: 20px;

          &::after {
            content: '%';
            position: absolute;
            top: -1px;
            right: 20px;//должен совпадать с правым маржином input
            color: $color-middle;
            height: 20px;
            width: 20px;
          }
      }
    }

    &__add-button {
      /* height: 40px;
      width: 40px;

      @include tablets {
        height: 47px;
        width: 47px;
      } */
    }
    
  }   
  
  .added-items {
    padding-left: 9px;

    &__row {
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
    }
  }


  .controls {
      width: 100%;
      display: flex;

      justify-content: flex-end;

      &__btn {
        height: 15px;
        width: 15px;
        padding: 8px;
        background-color: transparent;
        background-repeat: no-repeat;
        background-size: 15px 15px;
        background-position: center;
        margin-right: 12px;
        margin-left: 8px;

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

          @include phones {
            height: 18px;
            width: 18px;
            background-size: 18px 16px;
          }
        }
        &_edit {
          background-image: svg-load('pencil.svg', width=100%, height=100%, fill=#{$color-middle});
        }
        &_blue_edit {
          background-image: svg-load('pencil.svg', width=100%, height=100%, fill=#{$color-blue});
          
          @include phones {
            height: 18px;
            width: 18px;
            background-size: 18px 18px;
          }
        }
        &_trash {
          background-image: svg-load('trash.svg', width=100%, height=100%, fill=#{$color-middle});
        }
      }

      &_with_text {
      
        width: unset;
        align-items: center;
        position: relative;

        & .controls__btn {
          position: absolute;
          width: 100%;
          height: 100%;
          background-position: right;
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
    /* height: 100%; */
      
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
      background: $admin-base-gradient;

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
      }

      & .add__plus {
        width: 100%;
        height: 100%;    
        position: relative;
        padding: 0;

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
      }
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
    color: rgba(#base-color, 0.95);
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
    //это вынести в миксин текста для кнопок
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
  }

  &__controls {
    padding: 0 20px 30px; 
    margin-top: auto;
    display: flex;
    justify-content: space-between;
  }
}

.edit-review {

  background-color: $white-color;
  box-shadow: 4px 3px 20px 0px rgba(0, 0, 0, 0.07);

  &__title {
    margin: 11px;
    padding: 31px 11px 10px;
    color: $base-color;
    font-size: 18px;
    line-height: 34px;
    font-weight: 700;
    border-bottom: 1px solid rgba(#1f232d, 0.5);
  }

  &__content {
    padding: 30px;
    padding-top: 48px;
    display: flex;
  }

  &__image {
    width: 200px;
    margin-right: 30px;
  }

  &__image-place {
    width: 200px;
    height: 200px;
    background-color: #dee4ed;
    border-radius: 50%;
    margin-bottom: 28px;
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
  }

  &__info {
    width: calc(100% - 200px - 30px);
  }

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 610px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 40px;

    &_buttons {
      justify-content: flex-end;
      text-align: right;
      margin-top: 40px;
      margin-bottom: 0;
    }
  }
  
  &__cancel {
    color: $admin-base-color;
    font-size: 16px;
    line-height: 34px;
    font-weight: 700;
    background-color: transparent;
    margin-right: 60px;
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
  }


  &__group {
    display: flex;
    flex-direction: column;
    width: calc( (100% - 30px) / 2);

    &_review {
      width: 100%;
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
    @include admin-input;

    &[type='textarea'] {
      padding: 20px;
      resize: none;
      border: 1px solid $color-light;
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
  }

  &__text {
      font-size: 16px;
      line-height: 30px;
      font-weight: 600;
      margin-bottom: 15px;
  }

  &__controls {
    padding: 0 20px 30px;
    margin-top: auto;
    display: flex;
    justify-content: space-between;    
  }
}

</style>