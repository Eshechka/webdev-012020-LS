import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/parallax-mountain";
import "./scripts/parallax-budda";

import "./scripts/popup-menu";

import "./scripts/reviews";
import "./scripts/skills";
import "./scripts/slider";

const el = document.getElementById('about-me');
el.scrollIntoView();

const elem = document.querySelector('.main-title');
elem.scrollIntoView();
