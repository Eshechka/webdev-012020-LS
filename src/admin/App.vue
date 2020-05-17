<template lang="pug">
.maincontent
  .maincontent__header
    header.header      
      .container
        .header__container.header__container_admin
          .header__logo
            .logotype
              .logotype__image
                img.logotype__picture(src='../images/content/user.jpg')
              .logotype__name Владимир Астаханов

          .header__desc Панель администрирования

          .header__authorization
            .authorization
              a.authorization__link Выйти

  .maincontent__menu
    .container
      .menu__container
        .menu.menu_admin_theme
          ul.menu__list
            li.menu__item
              a.menu__link.menu__link_active(href='./change-me' data-title='Обо мне') Обо мне
            li.menu__item
              a.menu__link.menu__link(href='./change-me' data-title='Работы') Работы
            li.menu__item
              a.menu__link.menu__link(href='./change-me' data-title='Отзывы') Отзывы

  section.maincontent__section.maincontent__section_about
    .container
      .maincontent__topgroup
        h3.maincontent__title Блок "Обо мне"       
        .add          
          span.add__text Добавить группу
          button.add__plus

      .skills-groups
          ul.skills-groups__list
            li.skills-groups__item
              form.skills-groups__form(action='change-me' method='get')
                .skills-groups__add-item-title 
                  input.skills-groups__input-title(placeholder='Название новой группы')
                  .skills-groups__title.skills-groups__title_hidden Somename
                  .skills-groups__controls
                    .controls                                   
                      button.controls__btn.controls__btn_edit.controls__btn_none
                      button.controls__btn.controls__btn_tick
                      button.controls__btn.controls__btn_red_remove

                .skills-groups__added-items
                  ul.added-items
                    
                .skills-groups__add-new-item
                  input.skills-groups__input-new-item-name(placeholder='Новый навык')
                  input.skills-groups__input-new-item-percent(placeholder='100')
                  label.skills-groups__label-new-item-percent
                  .skills-groups__add-button
                    .add
                      button.add__plus



            li.skills-groups__item
              form.skills-groups__form(action='change-me' method='get')
                .skills-groups__add-item-title 
                  input.skills-groups__input-title(placeholder='Название новой группы')
                  .skills-groups__title.skills-groups__title_hidden Frontend
                  .skills-groups__controls
                    .controls                                   
                      button.controls__btn.controls__btn_edit.controls__btn_none
                      button.controls__btn.controls__btn_tick
                      button.controls__btn.controls__btn_red_remove

                .skills-groups__added-items
                  ul.added-items
                    li.added-items__row
                      input.added-items__name(placeholder='Git' disabled)
                      .added-items__percent
                        input.added-items__input-percent(placeholder='100' disabled)
                      .added-items__controls
                        .controls
                          button.controls__btn.controls__btn_edit
                          button.controls__btn.controls__btn_trash

                    li.added-items__row
                      input.added-items__name(placeholder='Terminal' disabled)
                      .added-items__percent
                        input.added-items__input-percent(placeholder='90' disabled)
                      .added-items__controls
                        .controls
                          button.controls__btn.controls__btn_edit
                          button.controls__btn.controls__btn_trash

                    li.added-items__row
                      input.added-items__name(placeholder='Gulp' disabled)
                      .added-items__percent
                        input.added-items__input-percent(placeholder='80' disabled)
                      .added-items__controls
                        .controls
                          button.controls__btn.controls__btn_edit
                          button.controls__btn.controls__btn_trash

                    li.added-items__row
                      input.added-items__name(placeholder='Webpack' disabled)
                      .added-items__percent
                        input.added-items__input-percent(placeholder='70' disabled)
                      .added-items__controls
                        .controls
                          button.controls__btn.controls__btn_edit
                          button.controls__btn.controls__btn_trash

                .skills-groups__add-new-item
                  input.skills-groups__input-new-item-name(placeholder='Новый навык')
                  input.skills-groups__input-new-item-percent(placeholder='100')
                  label.skills-groups__label-new-item-percent
                  .skills-groups__add-button
                    .add
                      button.add__plus


            li.skills-groups__item
              form.skills-groups__form(action='change-me' method='get')
                .skills-groups__add-item-title 
                  input.skills-groups__input-title.skills-groups__input-title_hidden(placeholder='Название новой группы')
                  .skills-groups__title Workflow
                  .skills-groups__controls
                    .controls                                   
                      button.controls__btn.controls__btn_edit
                      button.controls__btn.controls__btn_tick.controls__btn_none
                      button.controls__btn.controls__btn_red_remove.controls__btn_none              

                .skills-groups__added-items
                  ul.added-items
                    li.added-items__row
                      input.added-items__name(placeholder='HTML5' disabled)
                      .added-items__percent
                        input.added-items__input-percent(placeholder='100' disabled)
                      .added-items__controls
                        .controls
                          button.controls__btn.controls__btn_edit
                          button.controls__btn.controls__btn_trash

                    li.added-items__row
                      input.added-items__name(placeholder='CSS3')
                      .added-items__percent
                        input.added-items__input-percent(placeholder='90')
                      .added-items__controls
                        .controls
                          button.controls__btn.controls__btn_edit
                          button.controls__btn.controls__btn_trash

                    li.added-items__row
                      input.added-items__name(placeholder='Javascript' disabled)
                      .added-items__percent
                        input.added-items__input-percent(placeholder='70' disabled)
                      .added-items__controls
                        .controls
                          button.controls__btn.controls__btn_edit
                          button.controls__btn.controls__btn_trash

                .skills-groups__add-new-item
                  input.skills-groups__input-new-item-name(placeholder='Новый навык')
                  input.skills-groups__input-new-item-percent(placeholder='100')
                  label.skills-groups__label-new-item-percent
                  .skills-groups__add-button
                    .add
                      button.add__plus
              

  section.maincontent__section.maincontent__section_works
    .container
      .maincontent__topgroup
        h3.maincontent__title Блок "Работы"      

      .edit-work
        .edit-work__title Редактирование работы
        .edit-work__content
          form.edit-work__form(action='change-me' method='get')
            .edit-work__image
              .edit-work__image-text Перетащите или загрузите для загрузки изображения
              button.edit-work__image-load Загрузить
            .edit-work__info
              .edit-work__row.edit-work__row_name 
                label.edit-work__label Название
                input.edit-work__input(placeholder='Дизайн сайта для авто салона Porsche')
              .edit-work__row.edit-work__row_link 
                label.edit-work__label Ссылка
                input.edit-work__input(type='url' placeholder='https://www.porsche-pulkovo.ru')
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



</template>


<style lang="postcss">

   @import "normalize.css";
   @import "../styles/mixins.pcss";
   @import "../styles/layout/base.pcss";
   @import "../styles/blocks/menu.pcss";
   @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

  section {
    background-color: #f7f9fe;
    background-image: url('../images/content/Mountain_Baloon_admin.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 30px 0;
  }

  .maincontent {

    &__header {
      background: $admin-header-gradient;
    }
    &__menu {
      background-color: #ffffff;
      padding-top: 23px;
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
      padding: 10px 0;
      margin-bottom: 40px;
    }  
    &__title {
      margin-right: 30px;
      font-weight: bold;
    }

  }

  .header {    

    &__container {     

          &_admin {
            display: flex;
            justify-content: space-between;
            align-items: center;      
            color: $white-color;
            min-height: 80px;
            align-items: center;
          }
      }

    &__desc {
      margin-left: 20px;
      font-size: 14px;
      color: rgba($white-color, 0.5);
    }   

    &__authorization {
      margin-left: auto;
    }

  }
  

  .logotype {
    display: flex;
    align-items: center;

    &__image {
      height: 45px;
      width: 45px;
      border-radius: 50%;
    }

    &__picture {      
      @include img-object-fit;
    }

    &__name {
      color: $white-color;
      margin-left: 20px;
      font-size: 18px;
    }
  }

  .authorization {

    &__link {
      text-decoration: underline;
      color: rgba($white-color, 0.5);
    }

  }


.block-about {
  
  &__topgroup {
    display: flex;
    align-items: center;
    padding: 10px 0;
    margin-bottom: 40px;
  }  
  &__title {
    margin-right: 30px;
  }

}


  .skills-groups {
    width: 100%;

    &__list {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-left: -30px;
    }
    &__item {      
      width: calc( 50% - 30px);
      min-height: 387px;
      background-color: $white-color;
      box-shadow: 4px 2px 20px 0px rgba(0, 0, 0, 0.07);
      padding: 20px;
      margin-left: 30px;
      margin-bottom: 30px;
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
      width: 52%;
      margin-left: 9px;

      &_hidden {
        visibility: hidden;
      }
     }

    &__controls {
      width: 80px;
      padding-bottom: 5px;
    }

    &__added-items {
      flex-grow: 1;
    }


    &__add-new-item {
      height: 80px;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }

    &__input-new-item-name {

      @include admin-input();
      width: 40%;
      margin-left: 9px;

    }

    &__input-new-item-percent {
      
      @include admin-input();
      width: 15%;
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
          height: 32px;

          &::after {
            content: '%';
            position: absolute;
            top: 0;
            right: 20px;//должен совпадать с правым маржином input
            color: $color-middle;
            height: 20px;
            width: 20px;
          }
      }
    }
    
  }   
  
  .added-items {
    padding: 30px 0 30px 9px;

    &__row {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }

    &__name {

      @include admin-input(16px, $color-light);
      font-weight: 600;
      padding: 0;
      flex-grow: 1;
    }
    &__percent {
      width: 60px;
      margin-left: 20px;
      margin-right: 50px;
      position: relative;
      
      &:after {
        content: '%';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        color: $color-middle;
        height: 22px;
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
    }

    &__controls {
      width: 80px;
    }
  }


  .controls {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      &__btn {
        height: 15px;
        width: 15px;
        padding: 0;
        background-color: transparent;
        background-repeat: no-repeat;
        background-size: 15px 15px;
        background-position: center;
        margin-right: 10px;

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
      
        width: unset;
        display: flex;
        justify-content: initial;
        align-items: center;

        & .controls__text {
          margin-right: 11px;
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
    }

    &__text {
      color: $admin-base-color;
      font-weight: 700;
      font-size: 16px;
      margin-left: 13px;
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
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        color: $white-color;
        font-size: 18px;
        line-height: 30px;
        font-weight: bold;
        margin-left: 0;
      }

      & .add__plus {
        width: 100%;
        height: 100%;    
        position: relative;

        &::after {
          content: '+';
          font-size: 100px;
          line-height: 150px;
          color: $white-color;
          text-align: center;
          position: absolute;
          width: 150px;
          height: 150px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid $white-color;
        }
      }
    }
  }



.edit-work {

  background-color: $white-color;
  box-shadow: 4px 3px 20px 0px rgba(0, 0, 0, 0.07);
  margin-bottom: 30px;

  &__title {
    margin: 11px;
    padding: 31px 11px 10px;
    color: #base-color;
    font-size: 18px;
    line-height: 34px;
    font-weight: 700;
    border-bottom: 1px solid rgba(#1f232d, 0.5);
  }

  &__content {
    padding: 30px;
    padding-top: 48px;
  }

  &__form {
    display: flex;
  }

  &__image {
    width: calc(50% - 30px);
    height: 276px;
    margin-right: 30px;
    background-color: rgba(#dee4ed, 0.5);
    border: 1px dashed #d5d7da;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__image-text {
    color: rgba(#base-color, 0.95);
    font-size: 16px;
    line-height: 34px;
    font-weight: 600;
    width: 45%;
    text-align: center;
    margin-bottom: 10px;
  }

  &__image-load {
    //это вынести в миксин
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


  &__info {
    width: 50%;
  }

  &__row {
    margin-bottom: 30px;

    &_buttons {
      text-align: right;
      margin-top: 40px;
      margin-bottom: 0;
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
    }
  }

  
  &__added-tags {
    display: flex;
    margin-top: 20px;
  }  
  &__added-tag {
    margin-right: 10px;
    padding: 11px 40px 11px 19px;
    position: relative;
    background-color: #dee4ed;
    border-radius: 30px;

    &:after {
      content: '';
      cursor: pointer;
      position: absolute;
      right: 14px;
      top: 50%;      
      transform: translateY(-50%);
      height: 15px;
      width: 15px;
      padding: 0;
      background-image: svg-load('remove.svg', width=100%, height=100%, fill=#{$color-middle});
      background-repeat: no-repeat;
      background-size: 15px 15px;
      background-position: center;
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
  }

  &__picture {
    @include img-object-fit;
  }

  &__info {
      padding: 20px;
      padding-top: 40px;
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
    height: 80px;    
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

  }
}

</style>