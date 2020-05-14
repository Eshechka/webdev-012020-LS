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
      const selectedSlide = this.$refs.flickity.selectedIndex();
      const lengthSlides = this.$refs.flickity.slides().length - 1;

      if (selectedSlide == 0) {
          this.btnPrev.disabled = true;
          
          if (lengthSlides == 0) {
            this.btnNext.disabled = true;
          } else {
            this.btnNext.disabled = false;
          }

        } else if (selectedSlide == lengthSlides) {
          this.btnNext.disabled = true;
          this.btnPrev.disabled = false;

          } else {
            this.btnPrev.disabled = false;
            this.btnNext.disabled = false;
          }
    },
  },
  mounted () {
    if (this.$refs.flickity.slides().length == 1) {
      this.btnNext.disabled = true;
    }
  }
});