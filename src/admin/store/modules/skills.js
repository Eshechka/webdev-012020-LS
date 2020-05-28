export default {
    namespaced: true,
    state: {
      skills: [],
    },
    mutations: {
        SET_SKILLS(state, skills) {
            state.skills = skills;
        },
        ADD_SKILL(state, newSkill) {
            state.skills.push(newSkill);
        },
        DELETE_SKILL(state, deleteSkillId) {
            state.skills = state.skills.filter(skill => skill.id !== deleteSkillId);
        },
    },
    actions: {
        async addSkill(store, skill) {
            try {
                const { data } = await this.$axios.post('/skills', skill);
                store.commit('ADD_SKILL', data);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },
        async deleteSkill(store, skillId) {
            try {
                await this.$axios.delete(`/skills/${skillId}`);
                store.commit('DELETE_SKILL', skillId);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },
        async changeSkill(store, skill) {
            try {
                const { data } = await this.$axios.post(`/skills/${skill.id}`, {skill});
                console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!');
                console.log(data);
                
                // store.commit('CHANGE_SKILL', skillId);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },
        async refreshAllSkills(store) {
            try {
                const { data } = await this.$axios.get('/skills/329');
                store.commit('SET_SKILLS', data);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },
    }
};