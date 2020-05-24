<template lang="pug">

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

</template>

<script>
    export default {
        
    }
</script>

<style lang="postcss">

   @import "normalize.css";
   @import "../../styles/mixins.pcss";
   @import "../../styles/layout/base.pcss";
   @import "../../styles/blocks/menu.pcss";
   @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

</style>