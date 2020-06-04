import Vue from 'vue';
import $axios from '../admin/requests';
const userId = 329;

const arrows = {
  template: '#arrows',
  props: ['maxSlides', 'currentIndex'],
};

const tagslist = {
  template: '#slider-tags',
  props: ['tags'],
};

const miniatures = {
  template: '#slider-miniatures',
  props: ['currentIndex','dataSlider'],

  data () {
    return {
      containerHeight: 0,
      // miniListHeight: 0,
      itemHeight: 0,
      dataWorks: [],
    }
  },

  computed: {
    // miniList() {
    //   return this.$refs['mini-list'];
    // },
    miniContainer() {
      return this.$refs['mini-container'];
    },
    miniItem() {
      return this.$refs['mini-item'][0];
    },
  },

  methods: {
      offsetMiniatures() {
        // this.miniListHeight = getComputedStyle(this.miniList).height;
        let containerStyles = getComputedStyle(this.miniContainer);
        this.containerHeight = parseFloat(containerStyles.height) - parseFloat(containerStyles.paddingTop) - parseFloat(containerStyles.paddingBottom);

        this.itemHeight = parseFloat(getComputedStyle(this.miniItem).height);
      }
  },

  watch: {
    containerHeight(value) {
      console.log('изменилось ', value);
      console.log('высота кнопки',  this.itemHeight);
      console.log('максимально влезет кнопок ',  value/this.itemHeight);
    }
  },
   
  created() {
    window.addEventListener('resize', this.offsetMiniatures);    
  },

  mounted() {
    this.offsetMiniatures();
  },

};

const preview = {
  template: '#slider-preview',
  components: { miniatures, arrows },
  props: ['currentSlide', 'dataSlider', 'currentIndex','maxSlides'],

  methods: {
    clickMiniHandle(e) {
      this.$emit("clickMini", e.target.dataset.slidenum-1);
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
      
      clickMiniHandle(slidenum) {
        this.currentIndex = slidenum;
      },

      // makeArrRequiredImages(array) {
      //   return array.map(item => {
      //     const requiredImg = require(`../images/content/${item.photo}`)
      //     item.photo = requiredImg;

      //     return item;
      //   })
      // },
    },

    async created() {

      // const data = require('../data/slider.json');
      // this.dataSlider = this.makeArrRequiredImages(data);
  
      try {
        const { data } = await $axios.get(`/works/${userId}`);
        this.dataSlider = data;            
      }
      catch (error) {
        console.log('Ошибка из created works');      
      }
    },


    });