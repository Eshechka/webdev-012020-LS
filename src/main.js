import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/parallax-mountain";
import "./scripts/parallax-budda";

import "./scripts/reviews";
import "./scripts/skills";
import "./scripts/slider";
import "./scripts/popup-menu";


