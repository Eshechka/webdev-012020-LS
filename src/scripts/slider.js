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

  methods: {
    clickMiniHandle(e) {
      const pseudo = this.$refs['pseudo'];
      // console.log('pseudo: ', pseudo);
      // console.log('slidenum: ', e.target.dataset.slidenum-1);
      this.$emit("clickMini", e.target.dataset.slidenum-1, pseudo);
    },
  },

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
      pseudo() {
        return this.$refs['pseudo'];
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
        switch (direction) {
          case 'prev':
            this.currentIndex--;
            break;
          case 'next':
            this.currentIndex++;
            break;
        }
      },
      
      clickMiniHandle(slidenum, pseudo) {
        this.currentIndex = slidenum;
        pseudo.dataset.current = slidenum+1;
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