class Parallax {

    constructor (element, areaForMouseMove) {
        this.section = element;        

        const layers = this.section.querySelectorAll('.parallax__layer');
        
        this.move = function (block, windowScroll, speedScroll, speedOffsetX, speedOffsetY, mouseMoveX, mouseMoveY) {

            let strafeYScroll = 0;
            if (speedScroll) 
                strafeYScroll = windowScroll / speedScroll;

            
            let strafeXMouseMove = 0;//или тут получать 0, и оставлять его прежним что значит, что изменения положения не было 
            if (speedOffsetX && areaForMouseMove) {
                strafeXMouseMove = mouseMoveX / speedOffsetX;
                strafeYScroll += mouseMoveY;
            }
            if (speedOffsetY && areaForMouseMove) {
                strafeYScroll += mouseMoveY / speedOffsetY;
            }
                // console.log(`YScroll ${strafeYScroll}  XMouseMove ${strafeXMouseMove}`);
                

            let transformString = 'translate3d(-'+ strafeXMouseMove +'%, -'+ strafeYScroll +'%, 0)';
            let style = block.style;
            
            style.transform = transformString;
        }

        this.init = function (options) {
            
            for (let layer of layers) {
                let speedScroll = parseInt(layer.dataset.speedscroll);
                let speedOffsetX = parseInt(layer.dataset.offsetx);
                let speedOffsetY = parseInt(layer.dataset.offsety);

                let mouseMoveX = options.mouseMoveX || 0;//вот тут надо их не обнулять, а оставлять такими же, какими они были. 
                let mouseMoveY = options.mouseMoveY || 0;

                this.move(layer, options.wScroll, speedScroll, speedOffsetX, speedOffsetY, mouseMoveX, mouseMoveY);

            }
        }

    }
}


export default Parallax;