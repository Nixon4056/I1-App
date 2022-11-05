export default {
  namespaced: true,
  state() {
    return {
      choice: {
        id: 1,
        name: 'Wybierz',
        initials: 'NN',
        email: 'nothing@nothing.pl',
        color: '#000000',
        admin: false,
        kanbans: ['it', 'serwis', 'printers'],
      },
      users: [
        {
          id: 3422,
          name: 'Nikodem Wicon',
          initials: 'NW',
          email: 'nikodem@informatyk1.pl',
          color: '#000000',
          admin: true,
          kanbans: ['it', 'serwis', 'printers'],
        },
        {
          id: 3423,
          name: 'Mariusz Moszczyński',
          initials: 'MM',
          email: 'mariusz@informatyk1.pl',
          color: '#3866DC',
          admin: false,
          kanbans: ['it', 'serwis', 'printers'],
        },
        {
          id: 3424,
          name: 'Łukasz Grabowski',
          initials: 'ŁG',
          email: 'nikodem@informatyk1.pl',
          color: '#38DCD2',
          admin: false,
          kanbans: ['it', 'serwis', 'printers'],
        },
        {
          id: 3425,
          name: 'Mateusz Koszałka',
          initials: 'MK',
          email: 'nikodem@informatyk1.pl',
          color: '#DC38D5',
          admin: false,
          kanbans: ['it', 'serwis', 'printers'],
        },
      ],
    };
  },
  getters: {
    getUsers(state) {
      return state.users;
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
