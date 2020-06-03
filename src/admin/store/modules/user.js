export default {
    namespaced: true,
    state: {
      user: {},
    },
    getters: {
        userIsLogged: state => {            
            const userObj = state.user;
            const userObjIsEmpty = Object.keys(userObj).length === 0 && userObj.constructor === Object;

            return userObjIsEmpty === false;
        },
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        CLEAR_USER(state) {
            state.user = {};
        },
       
    },
    actions: {
        logout({commit}) {
            localStorage.clear();
            commit('CLEAR_USER');
        }
    },
};