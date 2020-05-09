import Vue from 'vue';

const arrows = {
  template: '#arrows',
};
const tagslist = {
  template: '#slider-tags',
};
const miniatures = {
  template: '#slider-miniatures',
  props: ['dataSlider'],
};
const preview = {
  template: '#slider-preview',
  components: { miniatures, arrows },
  props: ['currentSlide','dataSlider'],
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
        currentSlide: {}
      }
    },

    methods: {
      makeArrRequiredImages(array) {
        return array.map(item => {
          const requiredImg = require(`../images/content/${item.photo}`)
          item.photo = requiredImg;

          return item;
        })
      }
    },

    created () {
        const data = require('../data/slider.json');
        this.dataSlider = this.makeArrRequiredImages(data);
        this.currentSlide = this.dataSlider[0];
      }

    });