export default {
    namespaced: true,
    state: {
      skills: [],
    },
    mutations: {
        SET_SKILLS(state, skills) {
            state.skills = skills;
        },
    },
    actions: {
        async addSkill(store, skill) {
            try {
                const response = await this.$axios.post('/skills', skill);
                // console.log(response);
            }
            catch(error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                    );
            }
        },
        async refreshAllSkills(store) {
            try {
                const { data } = await this.$axios.get('/skills/329');
                // console.log('сработал рефреш скиллов!!!!!!!!');
                // console.log(data);

                // store.commit('SET_SKILLS', data);
            }
            catch(error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                    );
            }
        },
    }
};