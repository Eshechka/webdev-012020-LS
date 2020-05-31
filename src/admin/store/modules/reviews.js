export default {
    namespaced: true,
    state: {
      reviews: [],
      currentReview: {},
    },
    mutations: {
        SET_CURRENT_REVIEW(state, reviewId) {
            state.currentReview = state.reviews.filter(review => review.id === reviewId)[0] || {};
        },
        SET_REVIEWS(state, reviews) {
            state.reviews = reviews;
        },
        ADD_REVIEW(state, newReview) {
            state.reviews.unshift(newReview);
        },
        CHANGE_REVIEW(state, changedReview) {
            state.reviews = state.reviews.filter(review => review.id !== changedReview.id);
            state.reviews.unshift(changedReview);
        },
        DELETE_REVIEW(state, deleteReviewId) {
            state.reviews = state.reviews.filter(review => review.id !== deleteReviewId);
        },
    },
    actions: {
        setCurrentReview(store, reviewId) {
            store.commit('SET_CURRENT_REVIEW', reviewId);
        },
        async addReview(store, review) {
            try {
                const { data } = await this.$axios.post('/reviews', review);
                store.commit('ADD_REVIEW', data);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },
        async deleteReview(store, reviewId) {
            try {
                await this.$axios.delete(`/reviews/${reviewId}`);
                store.commit('DELETE_REVIEW', reviewId);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },
        async changeReview(store, {renewReviewData, changedReviewId}) {
            try {
                console.log('hello from changeReview');
                
                console.log(renewReviewData);
                console.log(changedReviewId);
                const { data } = await this.$axios.post(`/reviews/${changedReviewId}`, renewReviewData);
                console.log(data);
                
                store.commit('CHANGE_REVIEW', data.review);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },
        async refreshAllReviews(store) {
            try {
                const { data } = await this.$axios.get('/reviews/329');                
                store.commit('SET_REVIEWS', data);
            }
            catch(error) { throw new Error ( error.response.data.error || error.response.data.message ); }
        },
    }
};