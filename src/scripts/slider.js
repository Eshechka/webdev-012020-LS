import Vue from "vue";
import sliderData from "../data/slider.json";

const arrows = {
  template: "#arrows",
  props: ["maxSlides", "currentIndex"],
};

const tagslist = {
  template: "#slider-tags",
  props: ["tags"],
};

const miniatures = {
  template: "#slider-miniatures",
  props: ["currentIndex", "dataSlider"],

  data() {
    return {
      containerHeight: 0,
      itemHeight: 0,
      dataWorks: [],
      amountButtonsForOffset: 0,
    };
  },

  computed: {
    miniList() {
      return this.$refs["mini-list"];
    },
    miniContainer() {
      return this.$refs["mini-container"];
    },
    miniItem() {
      return this.$refs["mini-item"][0];
    },
  },

  methods: {
    needOffsetMiniatures() {
      let containerStyles = getComputedStyle(this.miniContainer);
      this.containerHeight =
        parseFloat(containerStyles.height) -
        parseFloat(containerStyles.paddingTop) -
        parseFloat(containerStyles.paddingBottom);
      this.itemHeight = parseFloat(getComputedStyle(this.miniItem).height);
      this.amountButtonsForOffset =
        this.currentIndex + 1 - this.containerHeight / this.itemHeight;
      this.amountButtonsForOffset < 0
        ? (this.amountButtonsForOffset = 0)
        : this.amountButtonsForOffset;
    },

    offsetMiniList(amountOffset) {
      this.miniList.style.transform = `translateY(${amountOffset}px)`;
    },
  },

  watch: {
    amountButtonsForOffset(value) {
      let amountOffset = -(value * this.itemHeight);
      this.offsetMiniList(amountOffset);
    },
    currentIndex(value) {
      this.needOffsetMiniatures();
    },
  },

  created() {
    window.addEventListener("resize", this.needOffsetMiniatures);
  },

  mounted() {
    this.needOffsetMiniatures();
  },
};

const preview = {
  template: "#slider-preview",
  components: { miniatures, arrows },
  props: ["currentSlide", "dataSlider", "currentIndex", "maxSlides"],

  methods: {
    clickMiniHandle(e) {
      this.$emit("clickMini", e.target.dataset.slidenum - 1);
    },
  },
};

const info = {
  template: "#slider-decs",
  components: { tagslist },
  props: ["currentSlide"],
};

new Vue({
  el: "#slider-component",
  template: "#slider",

  components: { preview, info },

  data() {
    return {
      dataSlider: [],
      currentIndex: 0,
      loading: true,
    };
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
    },
  },

  methods: {
    handleSlide(direction) {
      switch (direction) {
        case "prev":
          this.currentIndex--;

          break;
        case "next":
          this.currentIndex++;
          break;
      }
    },

    clickMiniHandle(slidenum) {
      this.currentIndex = slidenum;
    },

    makeArrRequiredImages(array) {
      return array.map((item) => {
        const requiredImg = require(`../images/content/${item.photo}`);
        item.photo = requiredImg;

        return item;
      });
    },
  },

  created() {
    const data = sliderData;
    this.dataSlider = this.makeArrRequiredImages(data);
    this.loading = false;
  },
});
