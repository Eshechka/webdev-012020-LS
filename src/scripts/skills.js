import Vue from "vue";
import skillsData from "../data/skills.json";

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  components: {
    skillsRow: {
      template: "#skills-row",
      props: ["item"],

      components: {
        skill: {
          template: "#skill",
          props: ["skill"],

          methods: {
            colorCircle() {
              const circle = this.$refs["circle"];
              const percent = (408 * this.skill.percent) / 100;
              circle.style.strokeDasharray = percent + " 408";
            },
          },

          mounted() {
            this.colorCircle();
          },
        },
      },
    },
  },

  data() {
    return {
      dataSkills: [],
    };
  },
  created() {
    const data = skillsData;
    this.dataSkills = data;
  },
});
