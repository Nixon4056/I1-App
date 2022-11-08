export default {
  namespaced: true,
  state() {
    return {
      choice: {
        id: 1,
        name: 'Wybierz',
        initials: 'NN',
        email: 'nothing@nothing.pl',
        standing: 'IT Manager',
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
          standing: 'IT Manager',
          color: '#000000',
          admin: true,
          kanbans: ['it', 'serwis', 'printers'],
        },
        {
          id: 3423,
          name: 'Mariusz Moszczyński',
          initials: 'MM',
          email: 'mariusz@informatyk1.pl',
          standing: 'IT Specialist',
          color: '#3866DC',
          admin: false,
          kanbans: ['it', 'serwis', 'printers'],
        },
        {
          id: 3424,
          name: 'Łukasz Grabowski',
          initials: 'ŁG',
          email: 'lukasz@informatyk1.pl',
          standing: 'IT Specialist',
          color: '#38DCD2',
          admin: false,
          kanbans: ['it', 'serwis', 'printers'],
        },
        {
          id: 3425,
          name: 'Mateusz Koszałka',
          initials: 'MK',
          email: 'mateusz.koszalka@informatyk1.pl',
          standing: 'IT Specialist',
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
    register(state, payload){
      state.users.push(payload);
    }
  },
  actions: {
    register(context, data){
      const userData = {
        id: data.id,
        name: data.name,
        initials: data.initials,
        email: data.email,
        standing: data.standing,
        color: data.color,
        admin: data.admin,
        kanbans: data.kanbans,
      }
      context.commit('register', userData)
    }
  },
  modules: {},
};
