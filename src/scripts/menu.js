const sectionsNamesForScroll = ['greeting','about-me', 'whatican', 'myworks', 'reviews', 'contacts',];


const menuParent = [];
menuParent.push(document.querySelector('.header__menu'));
menuParent.push(document.querySelector('.footer__menu'));

menuParent.forEach(function(menu) {
  
  let links = menu.querySelectorAll('.menu__link');

  links.forEach((link, ndx) => {

    links[ndx].addEventListener('click', e => {
      e.preventDefault();
      let sectionName = document.querySelector(`.${sectionsNamesForScroll[ndx]}`) || document.querySelector(`.${sectionsNamesForScroll[0]}`)
      sectionName.scrollIntoView({
        behavior: 'smooth',
      });
    });
  });

});
