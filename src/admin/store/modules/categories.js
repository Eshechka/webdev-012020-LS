export default {
    namespaced: true,
    state: {
      categories: [],
    },

    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories;
        },
        ADD_CATEGORY(state, newCategory) {
            state.categories.push(newCategory);
        },
        DELETE_CATEGORY(state, deleteCategoryId) {
            state.categories = state.categories.filter(category => category.id !== deleteCategoryId);
        },
        RENAME_CATEGORY(state, changedCategory) {
            state.categories = state.categories.filter(category => category.id !== changedCategory.id);
            state.categories.push(changedCategory);
        },
    },

    actions: {

        async addCategory(store, title) {
            try {
                const { data } = await this.$axios.post('/categories', { title });
                store.commit('ADD_CATEGORY', data);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },

        async deleteCategory(store, categoryId) {
            try {
                const { data } = await this.$axios.delete(`/categories/${categoryId}`);
                store.commit('DELETE_CATEGORY', categoryId);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },

        async renameCategory(store, changedCategory) {
            try {
                const { data } = await this.$axios.post(`/categories/${changedCategory.id}`, {title: changedCategory.newtitle});
                store.commit('RENAME_CATEGORY', data.category);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },
        

        async refreshAllCategories(store) {
            try {
                const { data } = await this.$axios.get('/categories/329');
                store.commit('SET_CATEGORIES', data);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },
    }
};