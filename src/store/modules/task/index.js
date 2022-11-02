export default {
  namespaced: true,
  state() {
    return {
      tasks: [
        {
          id: 112,
          company: 'JKMed',
          title: 'Sprawdzenie danych',
          description: 'Dodaj opis...',
          employee: {
            id: 3423,
            name: 'Mariusz Moszczyński',
            initials: 'MM',
            email: 'mariusz@informatyk1.pl',
            color: '#3866DC',
            admin: false,
            kanbans: ['it', 'serwis', 'printers'],
          },
          date: '23 Paź',
          status: 1,
        },
        {
          id: 113,
          company: 'Kornix Wejherowo',
          title: 'Problem z Drukarką',
          description: 'Dodaj opis...',
          employee: {
            id: 3422,
            name: 'Nikodem Wicon',
            initials: 'NW',
            email: 'nikodem@informatyk1.pl',
            color: '#000000',
            admin: true,
            kanbans: ['it', 'serwis', 'printers'],
          },
          date: '24 Paź',
          status: 1,
        },
        {
          id: 114,
          company: 'Cristap',
          title: 'Problem z WiFi',
          description: 'Dodaj opis...',
          employee: {
            id: 3424,
            name: 'Łukasz Grabowski',
            initials: 'ŁG',
            email: 'nikodem@informatyk1.pl',
            color: '#38DCD2',
            admin: false,
            kanbans: ['it', 'serwis', 'printers'],
          },
          date: '24 Paź',
          status: 2,
        },
        {
          id: 115,
          company: 'PIW',
          title: 'Problem z WiFi',
          description: 'Dodaj opis...',
          employee: {
            id: 3425,
            name: 'Mateusz Koszałka',
            initials: 'MK',
            email: 'nikodem@informatyk1.pl',
            color: '#DC38D5',
            admin: false,
            kanbans: ['it', 'serwis', 'printers'],
          },
          date: '24 Paź',
          status: 4,
        },
      ],
    };
  },
  getters: {
    tasks(state){
      return state.tasks;
    },
  },
  mutations: {
    addTask(state, payload){
      state.tasks.push(payload);
    },
    changeDescription(state, payload){
      state.tasks.find((task) => task.id === payload.id).description = payload.newDescription
    }
  },
  actions: {
    addTask(context, payload){
      const tasks = context.getters.tasks
      const id = tasks[tasks.length - 1].id + 1
      console.log(id)
      context.commit('addTask', {
        id: id,
        company: payload.company,
        title: payload.title,
        employee: payload.employee,
        date: '21 Gru',
        status: payload.status
      })
    }
  },
  modules: {
  }
}