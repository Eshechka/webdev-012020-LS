export default {
    namespaced: true,
    state: {
      categories: [],
    },

    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
            console.log('привет из коммита категорий');
        },
    },

    actions: {

        async addCategory(store, title) {
            try {
                const response = await this.$axios.post('/categories', {title});
            }
            catch(error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                    );
            }
        },
        async refreshAllCategories(store) {
            try {
                const { data } = await this.$axios.get('/categories/329');
                console.log('сработал рефреш категорий!!!!!!!!');
                // console.log(data);
                store.commit('SET_CATEGORIES', data);
            }
            catch(error) {
                throw new Error(
                    error.response.data.error || error.response.data.message
                    );
            }
        },
    }
};