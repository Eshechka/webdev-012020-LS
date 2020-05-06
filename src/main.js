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

// const sections = document.querySelectorAll('.parallax');
// sections.forEach( section => { new Parallax(section) });