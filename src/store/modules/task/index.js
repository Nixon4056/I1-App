export default {
  namespaced: true,
  state() {
    return {
      tasks: [
        {
          id: 112,
          company: 'JKMed',
          description: 'Sprawdzenie danych',
          employee: {
            id: 3423,
            name: 'Mariusz Moszczyński',
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
          description: 'Problem z WiFi',
          employee: {
            id: 3422,
            name: 'Nikodem Wicon',
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
          description: 'Problem z WiFi',
          employee: {
            id: 3424,
            name: 'Łukasz Grabowski',
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
          description: 'Problem z WiFi',
          employee: {
            id: 3425,
            name: 'Mateusz Koszałka',
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
    tasksId(state){
      const tasks = state.tasks
      return tasks[tasks.length-1].id
    }
  },
  mutations: {
    addTask(state, payload){
      state.tasks.push(payload);
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
        description: payload.description,
        employee: payload.employee,
        date: '21 Gru',
        status: payload.status
      })
    }
  },
  modules: {
  }
}