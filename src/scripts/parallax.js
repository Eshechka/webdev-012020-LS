class Parallax {
  constructor(element, areaForMouseMove) {
    this.section = element;

    const layers = this.section.querySelectorAll(".parallax__layer");

    this.unset = function(section) {
      for (let layer of layers) {
        layer.style.transform = "none";
      }
    };

    this.move = function(layer, totalStrafeX, totalStrafeY) {
      let transformString =
        "translate3d(" + totalStrafeX + "%, " + totalStrafeY + "%, 0)";

      layer.style.transform = transformString;
    };

    this.init = function(options) {
      for (let layer of layers) {
        const speedScroll = parseInt(layer.dataset.speedscroll);
        const speedOffsetX = parseInt(layer.dataset.offsetx);
        const speedOffsetY = parseInt(layer.dataset.offsety);

        let layerTransformArr = [];
        if (layer.style.transform && layer.style.transform.length)
          layerTransformArr = layer.style.transform.slice(12, -1).split(",");
        else {
          layerTransformArr = ["0%", " 0%", " 0px"];
        }

        let layerTransformX = +("" + layerTransformArr[0]).slice(0, -1);

        let totalStrafeX = 0,
          totalStrafeY = 0;

        if (speedScroll && options.wScroll) {
          totalStrafeX = layerTransformX;
          totalStrafeY = -(options.wScroll / speedScroll);
        }

        if (areaForMouseMove) {
          if (options.mouseMoveX && speedOffsetX) {
            totalStrafeX = -(options.mouseMoveX / speedOffsetX);
          }
        }

        this.move(layer, totalStrafeX, totalStrafeY);
      }
    };
  }
}

export default Parallax;
