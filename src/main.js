import Vue from 'vue';

import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

// import "./scripts/skills";
import Parallax from './scripts/parallax.js';

const section = document.querySelector('.parallax');
let parallax = new Parallax(section);

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    parallax.init(wScroll);
})

// new Vue ({
//   el: '#vuejs',
//   data: {
//     title: 'Hello',
//   }
// })

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


// const sections = document.querySelectorAll('.parallax');
// sections.forEach( section => { new Parallax(section) });