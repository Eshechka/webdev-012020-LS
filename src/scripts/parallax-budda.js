import Parallax from './parallax.js';

const sectionBudda = document.querySelector('.parallax_budda');
const areaForMouseMove = document.querySelector('.wrapper-sections_group3');

function offset(section) {
    let rect = section.getBoundingClientRect();
    return { top: rect.top, bottom: rect.bottom }
}

let parallax = new Parallax(sectionBudda, areaForMouseMove);
    
    window.addEventListener('scroll', e => {
        let toTop = offset(sectionBudda).top;
        if (toTop < 0)
            parallax.init({wScroll: - toTop}); 
        else 
            parallax.unset(sectionBudda);
    });


    areaForMouseMove.addEventListener('mousemove', e => {

        const accelerationSpeedOffsetX = 10;

        let heightArea = document.documentElement.clientHeight;
        // let heightArea = Math.min(document.documentElement.clientHeight, offset(sectionBudda).bottom);
        const x = (e.clientX / document.documentElement.clientWidth) * accelerationSpeedOffsetX;
        const y = (e.clientY / heightArea) * 10;

        let toTop = offset(sectionBudda).top;
         
        if (toTop < 0)
            parallax.init({wScroll: - toTop, mouseMoveX: x, mouseMoveY: y});
        else 
            parallax.unset(sectionBudda);

    });

