class Parallax {

    constructor (element) {
        this.section = element;
        

        const layers = this.section.querySelectorAll('.parallax__layer');

        this.move = function (block, windowScroll, strafeAmount) {
            let strafe = -(windowScroll / strafeAmount) + '%';
            let transformString = 'translate3d(0, '+ strafe +', 0)';
            let style = block.style;
            
            style.transform = transformString;
        }

        this.init = function (wScroll) {
            for (let layer of layers) {
                let speed = parseInt(layer.dataset.speed);

                if (speed) {
                    this.move(layer, wScroll, speed);
                }
            }
        }
    }
}


export default Parallax;