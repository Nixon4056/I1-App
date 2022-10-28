import { createRouter, createWebHistory } from 'vue-router'
import TheDashboard from '../views/TheDashboard.vue'
import TheAuth from '../views/TheAuth.vue'
import ThePrinters from '../views/ThePrinters.vue'
import TheSerwice from '../views/TheSerwice.vue'
import TheIt from '../views/TheIt.vue'
import TheDocs from '../views/TheDocs.vue'

import TaskModal from '../components/tasks/TaskModal.vue';

const routes = [
  { path: '/', redirect: '/dashboard'},
  /* { path: '/:notFound(.*)', redirect: '/dashboard' }, */
  {
    path: '/dashboard',
    name: 'dashboard',
    component: TheDashboard,
    children: [
      {
        path: 'printers',
        name: 'printers',
        component: ThePrinters,
      },
      {
        path: 'serwis',
        name: 'serwis',
        component: TheSerwice,
      },
      {
        path: 'it',
        name: 'it',
        component: TheIt,
        props: true,
        children: [
          { path: ':id', name: 'taskModal', component: TaskModal }
        ]
      },
      {
        path: 'docs',
        name: 'docs',
        component: TheDocs
      },
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    component: TheAuth
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
