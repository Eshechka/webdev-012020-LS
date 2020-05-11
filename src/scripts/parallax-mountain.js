import Parallax from './parallax.js';

const section = document.querySelector('.parallax_mountain');
let parallax = new Parallax(section, '');

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;

    let toBottom = section.getBoundingClientRect().bottom;

    if (toBottom > 0) 
        parallax.init({wScroll: wScroll,});

});