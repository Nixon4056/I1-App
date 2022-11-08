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
/*         {
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
        }, */
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
    register(state, payload) {
      state.users.push(payload);
    },
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    async register(context, data) {
      const userData = {
        id: data.id,
        name: data.name,
        initials: data.initials,
        email: data.email,
        standing: data.standing,
        color: data.color,
        admin: data.admin,
        kanbans: data.kanbans,
      };
      const response = await fetch(
        `https://i1-app-default-rtdb.europe-west1.firebasedatabase.app/users/${userData.id}.json`,
        {
          method: 'PUT',
          body: JSON.stringify(userData),
        }
      );

      /* const responseData = await response.json(); */

      if (!response.ok) {
        console.log('error to add user');
      }

      context.commit('register', {
        ...userData,
      });
    },
    async loadUsers(context) {
      const response = await fetch(
        `https://i1-app-default-rtdb.europe-west1.firebasedatabase.app/users.json`
      );
      const responseData = await response.json();

      if (!response.ok) {
        console.log('error fetching users');
      }

      const users = [];
      for (const key in responseData) {
        const user = {
          id: parseInt(key),
          name: responseData[key].name,
          initials: responseData[key].initials,
          email: responseData[key].email,
          standing: responseData[key].standing,
          color: responseData[key].color,
          admin: responseData[key].admin,
          kanbans: responseData[key].kanbans,
        };
        users.push(user);
      }
      context.commit('setUsers', users);
    },
  },
  modules: {},
};
