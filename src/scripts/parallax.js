class Parallax {

    constructor (element) {
        this.section = element;

        let layersParallax = new Array();

        const layers = this.section.querySelectorAll('.parallax__layer');
        for (let layer of layers) {          
            layersParallax.push(
                {
                    layer: layer, 
                    speed: parseInt(layer.dataset.speed) || 1000
                });
          }

        this.move = function (block, windowScroll, strafeAmount) {
            let strafe = -(windowScroll / strafeAmount) + '%';
            let transformString = 'translate3d(0, '+ strafe +', 0)';
            let style = block.style;   
            
            style.transform = transformString;
        }

        this.init = function (wScroll) {
            for (let layer of layersParallax) {
                this.move(layer.layer, wScroll, layer.speed);
              }
        }
    }
    
}


export default Parallax;