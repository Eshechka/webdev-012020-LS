import Vue from 'vue';

new Vue ({
    el: '#popup-menu',
    data: {
      stylesPopup: {
        display: 'none',
      },
    },
    methods : {
      closePopup() {
        this.stylesPopup.display = 'none'
      },
      openPopup() {
        this.stylesPopup.display = 'block'
      },
    }
  })