class Parallax {

    constructor (element) {
        this.section = element;

        // this.sky = this.section.querySelector('.parallax-mountain__sky');
        this.mountain = this.section.querySelector('.parallax-mountain__mountain');
        this.baloon = this.section.querySelector('.parallax-mountain__baloon');
        this.cloud = this.section.querySelector('.parallax-mountain__cloud');
        this.man = this.section.querySelector('.parallax-mountain__man');
        this.mountain1 = this.section.querySelector('.parallax-mountain__mountain1');
        this.white = this.section.querySelector('.parallax-mountain__white');


        this.move = function (block, windowScroll, strafeAmount) {
            let strafe = windowScroll / -strafeAmount + '%';
            let transformString = 'translate3d(0, '+ strafe +', 0)';
            let style = block.style;   
            
            style.transform = transformString;
        }

        this.init = function (wScroll) {
            // this.move(this.sky, wScroll, 60);
            this.move(this.mountain, wScroll, 45);
            this.move(this.cloud, wScroll, 45);
            this.move(this.white, wScroll, 60);
            this.move(this.mountain1, wScroll, 45);
            this.move(this.baloon, wScroll, 10);
            this.move(this.man, wScroll, 40);
        }
    }
    
}


export default Parallax;