import Vue from 'vue';

import Flickity from 'vue-flickity';
 
new Vue({

  el: '#reviews',
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        freeScroll: false,
        groupCells: true,
        contain: true
        
        // any options from Flickity can be used
      }
    }
  },
  computed: {
    btnPrev() {
      return this.$el.querySelector('.arrows__prev');
    },
    btnNext() {
      return this.$el.querySelector('.arrows__next');
    },
    selectedSlide() {
      return this.$refs.flickity.selectedIndex();
    },
    lengthSlides() {
      return this.$refs.flickity.slides().length - 1;
    },
  },

  methods: {
    next() {
      this.$refs.flickity.next();
      this.checkArrows();
    },
    
    previous() {
      this.$refs.flickity.previous();
      this.checkArrows();
    },

    checkArrows() {
      if (this.selectedSlide == 0) {
        this.btnPrev.disabled = true;
      } else if (this.selectedSlide == this.lengthSlides) {
        this.btnNext.disabled = true;
      } else {
        this.btnPrev.disabled = false;
        this.btnNext.disabled = false;
      }
    },
  }
});