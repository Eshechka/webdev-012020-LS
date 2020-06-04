import Vue from 'vue';
import $axios from '../admin/requests';
import Flickity from 'vue-flickity';

const userId = 329;

 
new Vue({

  el: '#reviews',
  components: {

    Flickity,

    review: {
        template: '#review', 

        props: ['review'],

        data () {
          return { 

          }
        },

    }, 
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
      },
      
      dataReviews: [],
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

  async created () {
    try {
      const { data } = await $axios.get(`/reviews/${userId}`);
      this.dataReviews = data;
      this.$nextTick(this.$refs.flickity.rerender);
    }
    catch (error) {
      console.log('Ошибка из created reviews');      
    }
  },

  mounted () {
    if (this.$refs.flickity.slides().length == 1) {
      this.btnNext.disabled = true;
    }    
  }
});