class Parallax {

    constructor (element) {
        this.section = element;

        this.sky = this.section.querySelector('.parallax-mountain__sky');
        this.mountain = this.section.querySelector('.parallax-mountain__mountain');
        this.baloon = this.section.querySelector('.parallax-mountain__baloon');

        this.move = function (block, windowScroll, strafeAmount) {
            let strafe = windowScroll / -strafeAmount + '%';
            let transformString = 'translate3d(0, '+ strafe +', 0)';

            let style = block.style;   
            
            style.transform = transformString;
        }

        this.init = function (wScroll) {
            this.move(this.sky, wScroll, 45);
        }
    }
    
}


export default Parallax;