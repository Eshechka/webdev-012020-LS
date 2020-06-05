const scroll = document.querySelector('.scroll__block');

scroll.addEventListener('click', e => {

  let sectionName = document.querySelector('.about-me');
  sectionName.scrollIntoView({
    behavior: 'smooth',
  });

});