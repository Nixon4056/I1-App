export default {
  namespaced: true,
  state() {
    return {
      columns: [
        {
          counter: 0,
          id: 1,
          status: 1,
          name: 'PRZYJĘTO',
        },
        {
          counter: 0,
          id: 2,
          status: 2,
          name: 'W REALIZACJI',
        },
        {
          counter: 0,
          id: 3,
          status: 3,
          name: 'ZREALIZOWANO',
        },
        {
          counter: 0,
          id: 4,
          status: 4,
          name: 'ODŁOŻONO',
        },
      ],
    };
  },
  getters: {
    columns(state){
      return state.columns;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}