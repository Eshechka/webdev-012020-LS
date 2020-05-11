import Parallax from './parallax.js';

const section = document.querySelector('.parallax_mountain');
let parallax = new Parallax(section);

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;

    let toBottom = section.getBoundingClientRect().bottom;//как это станет 0, прекрацать параллакс гор

    if (toBottom > 0) 
        parallax.init(wScroll);

});