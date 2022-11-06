import actions from './actions.js';
export default {
  namespaced: true,
  state() {
    return {
      tasks: [],
    };
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks = payload;
    },
    addTask(state, payload) {
      state.tasks.push(payload);
    },
    changeStatus(state, payload){
      state.tasks.find((task) => task.id === payload.id).status = payload.status
    },
    changeDescription(state, payload) {
      state.tasks.find((task) => task.id === payload.id).description =
        payload.newDescription;
    },
    addComment(state, payload) {
      state.tasks
        .find((task) => task.id === payload.id)
        .comments.push(payload.content);
    },
  },
  actions: actions,
  modules: {},
};
