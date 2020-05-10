import Vue from 'vue';


const arrows = {
  template: '#arrows',
  props: ['maxSlides', 'currentIndex'],
};

const tagslist = {
  template: '#slider-tags',
};

const miniatures = {
  template: '#slider-miniatures',
  props: ['currentIndex','dataSlider'],
};

const preview = {
  template: '#slider-preview',
  components: { miniatures, arrows },
  props: ['currentSlide', 'dataSlider', 'currentIndex','maxSlides'],
};

const info = {
  template: '#slider-decs',
  components: { tagslist },
  props: ['currentSlide'],
};


new Vue ({
    el: '#slider-component',
    template: '#slider',

    components: { preview, info }, 
    
    data () {
      return {
        dataSlider: [], 
        currentIndex: 0,
      }
    },

    computed: {
      currentSlide() {
        return this.dataSlider[this.currentIndex];
      },
      maxSlides() {
        return this.dataSlider.length - 1;
      },
    },

    watch: {
      currentIndex(value) {
        switch (true) {
          case value > this.maxSlides: 
            this.currentIndex = this.maxSlides;
            break;
          case value < 0: 
            this.currentIndex = 0;
            break;
        }
      }
    },

    methods: {
      handleSlide(direction) {
        console.log('arrow click: ', direction);
        switch (direction) {
          case 'prev':
            this.currentIndex--;
            break;
          case 'next':
            this.currentIndex++;
            break;
        }
      },
      makeArrRequiredImages(array) {
        return array.map(item => {
          const requiredImg = require(`../images/content/${item.photo}`)
          item.photo = requiredImg;

          return item;
        })
      },
    },

    created () {
        const data = require('../data/slider.json');
        this.dataSlider = this.makeArrRequiredImages(data);
      }

    });