import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

// import "./scripts/skills";
import Parallax from './scripts/parallax.js';

const section = document.querySelector('.parallax-mountain');
let mountainParallax = new Parallax(section);

window.onscroll = function () {
  let wScroll = window.pageYOffset;
  mountainParallax.init(wScroll);
}

// const sections = document.querySelectorAll('.parallax');
// sections.forEach( section => { new Parallax(section) });