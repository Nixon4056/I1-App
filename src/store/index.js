import { createStore } from 'vuex'
import taskModule from './modules/task/index.js'
import columnModule from './modules/column/index.js'

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
    columns: columnModule
  }
})
