import { createStore } from 'vuex'
import taskModule from './modules/task/index.js'
import columnModule from './modules/column/index.js'
import usersModule from './modules/users/index.js'
import companiesModule from './modules/companies/index.js'

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
    columns: columnModule,
    users: usersModule,
    companies: companiesModule,
  }
})
