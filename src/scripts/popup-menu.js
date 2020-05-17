const popupContainer = document.querySelector('.maincontent__popup-menu');
const popup = popupContainer.querySelector('.popup-menu');
const popupClose = popup.querySelector('.popup-menu__close');
const hamburger = document.querySelector('.hamburger');

const popupLinks = popup.querySelectorAll('.menu__link');

const sectionsNamesForScroll = ['greeting','about-me', 'whatican', 'myworks', 'reviews', 'contacts',];


hamburger.addEventListener('click', e => {
  
  if (getComputedStyle(popupContainer).display === 'none')
    popupContainer.style.display = 'block';

});

popupClose.addEventListener('click', e => {
  
  popupContainer.style.display = '';

});

popupLinks.forEach((link, ndx) => {

  popupLinks[ndx].addEventListener('click', e => {

    e.preventDefault();
    let sectionName = document.querySelector(`.${sectionsNamesForScroll[ndx]}`) || document.querySelector(`.${sectionsNamesForScroll[0]}`)
    sectionName.scrollIntoView();
    popupContainer.style.display = 'none';
  });

});