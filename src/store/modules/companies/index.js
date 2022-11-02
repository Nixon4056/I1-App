export default {
  namespaced: true,
  state() {
    return {
      choice: {
        id: 1,
        name: 'Wybierz',
      },
      companies: [
        {
          id: 3422,
          name: 'Kornix Wejherowo',
        },
        {
          id: 3423,
          name: 'Kornix Skarszewy',
        },
        {
          id: 3424,
          name: 'JKMed',
        },
        {
          id: 3425,
          name: 'Cristap',
        },
      ],
    };
  },
  getters: {
    getCompanies(state) {
      return state.companies;
    },
    getChoice(state) {
      return state.choice;
    },
  },
  mutations: {
    setChoice(state, payload) {
      state.choice = payload;
    },
  },
  actions: {},
  modules: {},
};
