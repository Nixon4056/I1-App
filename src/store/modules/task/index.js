export default {
  namespaced: true,
  state() {
    return {
      tasks: [
        {
          id: 1,
          company: 'JKMed',
          title: 'Sprawdzenie danych',
          description: 'Dodaj opis...',
          comments: [
            {
              employee: 3422,
              text: 'Testowy Komentarz',
              date: '21 Paź'
            },
            {
              employee: 3424,
              text: 'Testowy Komentarz2',
              date: '21 Paź'
            },
            {
              employee: 3424,
              text: 'Testowy Komentarz3',
              date: '21 Paź'
            },
            {
              employee: 3425,
              text: 'Testowy Komentarz4',
              date: '21 Paź'
            },
          ],
          logs: [
            {
              employee: 3424,
              text: 'utworzył(a) zlecenie',
              date: '21 Paź',
              before: 'Brak',
              after: 'Nowe zlecenie'
            },
          ],
          employee: 3423,
          date: '23 Paź',
          status: 1,
        },
        {
          id: 2,
          company: 'Kornix Wejherowo',
          title: 'Problem z Drukarką',
          description: 'Dodaj opis...',
          comments: [
            {
              employee: 3422,
              text: 'Testowy Komentarz',
              date: '21 Paź'
            },
            {
              employee: 3424,
              text: 'Testowy Komentarz2',
              date: '21 Paź'
            },
            {
              employee: 3424,
              text: 'Testowy Komentarz3',
              date: '21 Paź'
            },
            {
              employee: 3425,
              text: 'Testowy Komentarz4',
              date: '21 Paź'
            },
          ],
          logs: [
            {
              employee: 3424,
              text: 'utworzył(a) zlecenie',
              date: '21 Paź',
              before: 'Brak',
              after: 'Nowe zlecenie'
            },
          ],
          employee: 3422,
          date: '24 Paź',
          status: 1,
        },
        {
          id: 3,
          company: 'Cristap',
          title: 'Problem z WiFi',
          description: 'Dodaj opis...',
          comments: [
            {
              employee: 3422,
              text: 'Testowy Komentarz',
              date: '21 Paź'
            },
            {
              employee: 3424,
              text: 'Testowy Komentarz2',
              date: '21 Paź'
            },
            {
              employee: 3424,
              text: 'Testowy Komentarz3',
              date: '21 Paź'
            },
            {
              employee: 3425,
              text: 'Testowy Komentarz4',
              date: '21 Paź'
            },
          ],
          logs: [
            {
              employee: 3424,
              text: 'utworzył(a) zlecenie',
              date: '21 Paź',
              before: 'Brak',
              after: 'Nowe zlecenie'
            },
          ],
          employee: 3424,
          date: '24 Paź',
          status: 2,
        },
        {
          id: 4,
          company: 'PIW',
          title: 'Problem z WiFi',
          description: 'Dodaj opis...',
          comments: [
            {
              employee: 3422,
              text: 'Testowy Komentarz',
              date: '21 Paź'
            },
            {
              employee: 3424,
              text: 'Testowy Komentarz2',
              date: '21 Paź'
            },
            {
              employee: 3424,
              text: 'Testowy Komentarz3',
              date: '21 Paź'
            },
            {
              employee: 3425,
              text: 'Testowy Komentarz4',
              date: '21 Paź'
            },
          ],
          logs: [
            {
              employee: 3424,
              text: 'utworzył(a) zlecenie',
              date: '21 Paź',
              before: 'Brak',
              after: 'Nowe zlecenie'
            },
          ],
          employee: 3425,
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
    },
    addComment(state, payload){
      state.tasks.find((task) => task.id === payload.id).comments.push(payload.content);
    },
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
        description: 'Dodaj opis...',
        employee: payload.employee,
        date: '21 Gru',
        status: payload.status
      })
    }
  },
  modules: {
  }
}