import Vue from 'vue';

console.log('start');

// const arrows = {
//   template: '#arrows',
// };

// const tagslist = {
//   template: '#slider-tags',
// };

// const miniatures = {
//   template: '#slider-miniatures',
//   props: ['dataSlider'],
// };

// const preview = {
//   template: '#slider-preview',
//   components: { miniatures, arrows },
//   props: ['currentSlide','dataSlider'],
//   methods: {
//     handleSlide(direction) {
//       console.log('arrow click in preview');
//     },
//   },
// };
// const info = {
//   template: '#slider-decs',
//   components: { tagslist },
//   props: ['currentSlide'],
// };


new Vue ({
    el: '#slider-component',
    template: '#slider',

    // components: { preview, info }, 
    
    data () {
      return {
        dataSlider: [], 
        currentIndex: 1,
      }
    },

    computed: {
      currentSlide() {
        return this.dataSlider[this.currentIndex];
      }
      
    },

    methods: {
      somemethod() {
        console.log('KUKU');
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
      console.log('created');
    },
    mounted () {
        console.log('mounted');
      }

    });