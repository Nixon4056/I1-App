export default {
  namespaced: true,
  state() {
    return {
      columns: [
        {
          name: 'PRZYJĘTO',
        },
        {
          name: 'W REALIZACJI',
        },
        {
          name: 'ZREALIZOWANO',
        },
        {
          name: 'ODŁOŻONO',
        },
      ],
    };
  },
  getters: {
    columns(state){
      return state.columns;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}