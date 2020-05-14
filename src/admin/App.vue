<template lang="pug">
.maincontent
  .maincontent__header
    header.header
      .header__info
        .container
          .header__container
            .header__logo
              .logotype
                .logotype__image
                  img.logotype__picture(src='../images/content/user.jpg')
                .logotype__name Владимир Астаханов

            .header__desc Панель администрирования

            .header__authorization
              .authorization
                a.authorization__link Выйти

      .header__menu
        .container
          .header__container
            .menu.menu_admin
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
            .add__plus
            .add_text Добавить группу

      .block-about__container
        .skills-groups
          ul.skills-groups__list
            li.skills-groups__item

              .skills-groups__add-item-title 
                input.skills-groups__input-title(placeholder='Название новой группы')
                .skills-groups__title Frontend
                .skills-groups__swithers

              .skills-groups__added-items
                ul.added-items
                  li.added-items__row
                    .added-items__name Git
                    .added-items__percent 100
                    .added-items__controls

                  li.added-items__row
                    .added-items__name Terminal
                    .added-items__percent 90
                    .added-items__controls

              .skills-groups__add-new-item
                input.skills-groups__new-item-name(placeholder='Новый навык')
                input.skills-groups__new-item-percent(placeholder='100')
                .skills-groups__add-button
                  .add
                    .add__plus
              .skills-groups__add-item-title 
                input.skills-groups__input-title(placeholder='Название новой группы')
                .skills-groups__title Workflow
                .skills-groups__swithers

              .skills-groups__added-items
                ul.added-items
                  li.added-items__row
                    .added-items__name Git
                    .added-items__percent 100
                    .added-items__controls

                  li.added-items__row
                    .added-items__name Terminal
                    .added-items__percent 90
                    .added-items__controls

              .skills-groups__add-new-item
                input.skills-groups__new-item-name(placeholder='Новый навык')
                input.skills-groups__new-item-percent(placeholder='100')
                .skills-groups__add-button
                  .add
                    .add__plus
              




</template>


<style lang="postcss">

   @import "../styles/mixins.pcss";
   @import "../styles/layout/base.pcss";
   @import "../styles/blocks/menu.pcss";
   @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

   .header {

      &__info {
        background-color: #424267;
        }
      &__menu {
        background-color: #ffffff;
        }
      &__container {
        display: flex;
        }
     
   }

</style>