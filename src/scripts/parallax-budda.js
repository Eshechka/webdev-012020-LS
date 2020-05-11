import Parallax from './parallax.js';

const section = document.querySelector('.parallax_budda');

function offset(section) {
    let rect = section.getBoundingClientRect();
    return { top: rect.top, bottom: rect.bottom }
}

let parallax = new Parallax(section);

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;

    let toTop = offset(section).top;

    if (toTop < 0)
        parallax.init(- toTop); 

});


const sectionGroup = document.querySelector('.wrapper-sections_group3');
sectionGroup.addEventListener('mousemove', e => {

    const x = e.clientX / document.documentElement.clientWidth;
    const y = e.clientY / offset(section).bottom;

    console.log(x,y);

})