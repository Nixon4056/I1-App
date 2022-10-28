export default {
  namespaced: true,
  state() {
    return {
      tasks: [
        {
          id: '3213132',
          company: 'JKMed',
          title: 'Server DELL',
          description: 'Sprawdzenie danych',
          employee: 'Mariusz Moszczyński',
          date: '23 Paź',
          status: 1,
        },
        {
          id: '34563456',
          company: 'Kornix Wejherowo',
          title: 'Sieć',
          description: 'Problem z WiFi',
          employee: 'Nikodem Wicon',
          date: '24 Paź',
          status: 3,
        },
        {
          id: '34566',
          company: 'Cristap',
          title: 'Sieć',
          description: 'Problem z WiFi',
          employee: 'Nikodem Wicon',
          date: '24 Paź',
          status: 2,
        },
        {
          id: '765567',
          company: 'PIW',
          title: 'Sieć',
          description: 'Problem z WiFi',
          employee: 'Nikodem Wicon',
          date: '24 Paź',
          status: 2,
        },
      ],
    };
  },
  getters: {
    tasks(state){
      return state.tasks;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}