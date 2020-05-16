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

  section.block-about
    .container
      .block-about__topgroup
        h3.block-about__title Блок "Обо мне"
        .block-about__addgroup                   
          .add          
            button.add__plus
            .add__text Добавить группу

      .block-about__container
        .skills-groups
          ul.skills-groups__list
            li.skills-groups__item

              .skills-groups__add-item-title 
                input.skills-groups__input-title(placeholder='Название новой группы')
                .skills-groups__title.skills-groups__title_hidden Somename
                .skills-groups__switchers
                  .switchers                                   
                    button.switchers__btn.switchers__btn_edit.switchers__btn_none
                    button.switchers__btn.switchers__btn_tick
                    button.switchers__btn.switchers__btn_remove

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

              .skills-groups__add-item-title 
                input.skills-groups__input-title(placeholder='Название новой группы')
                .skills-groups__title.skills-groups__title_hidden Frontend
                .skills-groups__switchers
                  .switchers                                   
                    button.switchers__btn.switchers__btn_edit
                    button.switchers__btn.switchers__btn_tick
                    button.switchers__btn.switchers__btn_remove

              .skills-groups__added-items
                ul.added-items
                  li.added-items__row
                    input.added-items__name(placeholder='Git' disabled)
                    .added-items__percent
                      input.added-items__input-percent(placeholder='100' disabled)
                    .added-items__controls
                      .switchers
                        button.switchers__btn.switchers__btn_edit
                        button.switchers__btn.switchers__btn_trash

                  li.added-items__row
                    input.added-items__name(placeholder='Terminal' disabled)
                    .added-items__percent
                      input.added-items__input-percent(placeholder='90' disabled)
                    .added-items__controls
                      .switchers
                        button.switchers__btn.switchers__btn_edit
                        button.switchers__btn.switchers__btn_trash

              .skills-groups__add-new-item
                input.skills-groups__input-new-item-name(placeholder='Новый навык')
                input.skills-groups__input-new-item-percent(placeholder='100')
                label.skills-groups__label-new-item-percent
                .skills-groups__add-button
                  .add
                    button.add__plus


            li.skills-groups__item
              .skills-groups__add-item-title 
                input.skills-groups__input-title.skills-groups__input-title_hidden(placeholder='Название новой группы')
                .skills-groups__title Workflow
                .skills-groups__switchers
                  .switchers                                   
                    button.switchers__btn.switchers__btn_edit
                    button.switchers__btn.switchers__btn_tick.switchers__btn_none
                    button.switchers__btn.switchers__btn_remove.switchers__btn_none              

              .skills-groups__added-items
                ul.added-items
                  li.added-items__row
                    input.added-items__name(placeholder='Git' disabled)
                    .added-items__percent
                      input.added-items__input-percent(placeholder='100' disabled)
                    .added-items__controls
                      .switchers
                        button.switchers__btn.switchers__btn_edit
                        button.switchers__btn.switchers__btn_trash

                  li.added-items__row
                    input.added-items__name(placeholder='Terminal' disabled)
                    .added-items__percent
                      input.added-items__input-percent(placeholder='90' disabled)
                    .added-items__controls
                      .switchers
                        button.switchers__btn.switchers__btn_edit
                        button.switchers__btn.switchers__btn_trash

              .skills-groups__add-new-item
                input.skills-groups__input-new-item-name(placeholder='Новый навык')
                input.skills-groups__input-new-item-percent(placeholder='100')
                label.skills-groups__label-new-item-percent
                .skills-groups__add-button
                  .add
                    button.add__plus
              




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
      background: $admin-base-gradient;
    }
    &__menu {
      background-color: #ffffff;
    }
  }

  .header {    

    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      min-height: 80px;
      color: $white-color;

          &_admin {
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

    &__name {
      color: $white-color;
      margin-left: 20px;
      font-size: 18px;
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: calc( 50% - 30px);
      min-height: 387px;
      background-color: $white-color;
      box-shadow: 4px 2px 20px 0px rgba(0, 0, 0, 0.07);
      padding: 20px;
      margin-left: 30px;
      margin-bottom: 30px;
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

    &__switchers {
      width: 80px;
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

    &__input-percent {
      @include admin-input(16px,);
      width: 100%;
      padding-right: 20px;
    }
    &__percent {
      width: 60px;
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

    &__controls {
      width: 80px;
    }
  }


  .switchers {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      &__btn {
        height: 15px;
        width: 35%;
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
          background-image: svg-load('remove.svg', width=100%, height=100%, fill=#{$color-red});
        }
        &_edit {
          background-image: svg-load('pencil.svg', width=100%, height=100%, fill=#{$color-middle});
        }
        &_trash {
          background-image: svg-load('trash.svg', width=100%, height=100%, fill=#{$color-middle});
        }
      }
    }
  


  .add {

    display: flex;
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
  }

</style>