class Parallax {

    constructor (element) {
        this.section = element;

        this.mountain = this.section.querySelector('.parallax__layer_mountain');
        this.baloon = this.section.querySelector('.parallax__layer_baloon');
        this.cloud = this.section.querySelector('.parallax__layer_cloud');
        this.man = this.section.querySelector('.parallax__layer_man');
        this.mountain1 = this.section.querySelector('.parallax__layer_mountain1');
        this.white = this.section.querySelector('.parallax__layer_white');


        this.move = function (block, windowScroll, strafeAmount) {
            let strafe = windowScroll / -strafeAmount + '%';
            let transformString = 'translate3d(0, '+ strafe +', 0)';
            let style = block.style;   
            
            style.transform = transformString;
        }

        this.init = function (wScroll) {
            this.move(this.mountain, wScroll, 55);
            this.move(this.baloon, wScroll, 8);
            this.move(this.cloud, wScroll, 10);
            this.move(this.man, wScroll, 40);
            this.move(this.mountain1, wScroll, 40);
            this.move(this.white, wScroll, 100);
        }
    }
    
}


export default Parallax;