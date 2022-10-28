import { createStore } from 'vuex'
import taskModule from './modules/task/index.js'
import modalModule from './modules/modal/index.js'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tasks: taskModule,
    modal: modalModule
  }
})
