export default {
  namespaced: true,
  state() {
    return {
      tasks: [
        {
          id: 112,
          company: 'JKMed',
          description: 'Sprawdzenie danych',
          employee: 'Mariusz Moszczyński',
          date: '23 Paź',
          status: 1,
        },
        {
          id: 113,
          company: 'Kornix Wejherowo',
          description: 'Problem z WiFi',
          employee: 'Nikodem Wicon',
          date: '24 Paź',
          status: 1,
        },
        {
          id: 114,
          company: 'Cristap',
          description: 'Problem z WiFi',
          employee: 'Nikodem Wicon',
          date: '24 Paź',
          status: 2,
        },
        {
          id: 115,
          company: 'PIW',
          description: 'Problem z WiFi',
          employee: 'Nikodem Wicon',
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