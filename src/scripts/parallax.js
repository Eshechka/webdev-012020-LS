class Parallax {

    constructor (element, areaForMouseMove) {
        this.section = element;        

        const layers = this.section.querySelectorAll('.parallax__layer');

        this.unset = function (section) {
            for (let layer of layers) {
                layer.style.transform = 'none';
            }
        }

        this.move = function (layer, totalStrafeX, totalStrafeY) {
              
            let transformString = 'translate3d('+ totalStrafeX +'%, '+ totalStrafeY +'%, 0)';

            // console.log(transformString);
            layer.style.transform = transformString;
        }

        this.init = function (options) {
            
            for (let layer of layers) {
                
                const speedScroll = parseInt(layer.dataset.speedscroll);
                const speedOffsetX = parseInt(layer.dataset.offsetx);
                const speedOffsetY = parseInt(layer.dataset.offsety);

                let layerTransformArr = [];
                if (layer.style.transform && layer.style.transform.length) 
                    layerTransformArr = layer.style.transform.slice(12, -1).split(','); // /\,\s|\)/
                else {
                    layerTransformArr = ["0%", " 0%", " 0px"];
                }
                // console.log(layerTransformArr);

                let layerTransformX = +(''+layerTransformArr[0]).slice(0, -1);
                // let layerTransformY = +(''+layerTransformArr[1]).slice(0, -1);  
                
                let totalStrafeX = 0,  totalStrafeY = 0;

                if (speedScroll && options.wScroll) {
                    totalStrafeX = layerTransformX; 
                    totalStrafeY = -(options.wScroll / speedScroll); 
                }
                
                if (areaForMouseMove) {
                    if (options.mouseMoveX && speedOffsetX) {
                        totalStrafeX =  -(options.mouseMoveX / speedOffsetX);

                        // if ( Math.abs(totalStrafeX-layerTransformX) > 5) {
                        //     console.log('Большой СДВИГ');
                        // }

                        // totalStrafeY = layerTransformY;
                    }
                    if (options.mouseMoveY && speedOffsetY) {
                    //     totalStrafeY = -(options.mouseMoveY / speedOffsetY);
                    }
                }
                    // console.log(layerTransformY, totalStrafeY);
                this.move(layer, totalStrafeX, totalStrafeY);

            }
        }

    }
}


export default Parallax;