<template lang="pug">

  nav.menu.menu_admin_theme
    .container.container_admin
      .menu__container
        ul.menu__list
          li.menu__item
            router-link.menu__link(data-title='Обо мне'
                to='/about'
                @click.prevent       
            ) Обо мне
          li.menu__item
            router-link.menu__link.menu__link(data-title='Работы'
                to='/works'
                @click.prevent            
            ) Работы
          li.menu__item
            router-link.menu__link.menu__link(data-title='Отзывы'
                to='/reviews'
                @click.prevent              
            ) Отзывы

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

.menu__link.router-link-active {

  border-color: $admin-base-color;
  color: transparent;	

  &::before {
    color: $admin-base-color;
  }
  
  &:hover {
    border-color: $admin-base-color;
  }	

			
}

</style>