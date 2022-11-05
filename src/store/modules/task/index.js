export default {
  namespaced: true,
  state() {
    return {
      tasks: [
        {
          id: 0,
          company: 'temp',
          title: '',
          description: 'Dodaj opis...',
          comments: [
          ],
          logs: [

          ],
          employee: {
            id: 3423,
            name: 'Mariusz Moszczyński',
            initials: 'MM',
            email: 'mariusz@informatyk1.pl',
            standing: 'IT Specialist',
            color: '#3866DC',
            admin: false,
            kanbans: ['it', 'serwis', 'printers'],
          },
          date: '0 Paź',
          status: 1,
        },
        {
          id: 112,
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
          employee: {
            id: 3423,
            name: 'Mariusz Moszczyński',
            initials: 'MM',
            email: 'mariusz@informatyk1.pl',
            standing: 'IT Specialist',
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
          employee: {
            id: 3422,
            name: 'Nikodem Wicon',
            initials: 'NW',
            email: 'nikodem@informatyk1.pl',
            standing: 'IT Manager',
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
          employee: {
            id: 3424,
            name: 'Łukasz Grabowski',
            initials: 'ŁG',
            email: 'lukasz@informatyk1.pl',
            standing: 'IT Specialist',
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
          employee: {
            id: 3425,
            name: 'Mateusz Koszałka',
            initials: 'MK',
            email: 'mateusz.koszalka@informatyk1.pl',
            standing: 'IT Specialist',
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