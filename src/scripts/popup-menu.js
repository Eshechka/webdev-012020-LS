import Vue from 'vue';


  const vueModel = new Vue ({ 
    data: {
        styles: {
          display: 'npne',
        },
    },
  })

  vueModel.$mount('#popup-container');

new Vue ({
  el: '#popup-opener',

  methods: {
    openPopup() {
      console.log('open');
      vueModel.$data.styles.display = 'block'
    },
  }
})


new Vue ({
    el: '#popup',
    template: '#popup-menu',

    data () {
      return {
        dataMenu: [],
      }
    },

    methods: {
      closePopup() {
        vueModel.$data.styles.display = 'none'
      },

    },

    created () {
        const data = require('../data/menu.json');
        this.dataMenu = data;
      }
  })
  // @click.prevent="scrollToSection(item.href)"

