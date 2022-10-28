export default {
  namespaced: true,
  state() {
    return {
      isVisible: true,
    };
  },
  getters: {
    isVisible(state){
      return state.isVisible;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}