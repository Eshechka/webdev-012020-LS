import requests from '../../requests';
const userId = requests.userId; 

export default {
    namespaced: true,
    state: {
      works: [],
      currentWork: {},
    },
    mutations: {
        SET_CURRENT_WORK(state, workId) {
            state.currentWork = state.works.filter(work => work.id === workId)[0] || {};
        },
        SET_WORKS(state, works) {
            state.works = works;
        },
        ADD_WORK(state, newWork) {
            state.works.unshift(newWork);
        },
        CHANGE_WORK(state, changedWork) {
            state.works = state.works.filter(work => work.id !== changedWork.id);
            state.works.unshift(changedWork);
        },
        DELETE_WORK(state, deleteWorkId) {
            state.works = state.works.filter(work => work.id !== deleteWorkId);
        },
    },
    actions: {
        setCurrentWork(store, workId) {
            store.commit('SET_CURRENT_WORK', workId);
        },
        async addWork(store, work) {
            try {
                const { data } = await this.$axios.post('/works', work);
                store.commit('ADD_WORK', data);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },
        async deleteWork(store, workId) {
            try {
                await this.$axios.delete(`/works/${workId}`);
                store.commit('DELETE_WORK', workId);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },
        async changeWork(store, {renewWorkData, changedWorkId}) {
            try {
                const { data } = await this.$axios.post(`/works/${changedWorkId}`, renewWorkData);
                store.commit('CHANGE_WORK', data.work);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },
        async refreshAllWorks(store) {
            try {
                const { data } = await this.$axios.get(`/works/${userId}`);                
                store.commit('SET_WORKS', data);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },
    }
};