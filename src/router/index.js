import { createRouter, createWebHistory } from 'vue-router'
import TheDashboard from '../views/TheDashboard.vue'
import TheAuth from '../views/TheAuth.vue'
import ThePrinters from '../views/ThePrinters.vue'
import TheSerwice from '../views/TheSerwice.vue'
import TheIt from '../views/TheIt.vue'
import TheDocs from '../views/TheDocs.vue'

//import TaskItem from '../components/tasks/TaskItem.vue'
import TaskDetails from '../components/tasks/TaskDetails.vue'

const routes = [
  { path: '/', redirect: '/dashboard'},
  { path: '/:notFound(.*)', redirect: '/dashboard' },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: TheDashboard,
    children: [
      {
        path: 'printers',
        name: 'printers',
        component: ThePrinters,
        props: true,
        children: [
          { path: 'task/:id', name: 'task', component: TaskDetails }
        ]
      },
      {
        path: 'serwis',
        name: 'serwis',
        component: TheSerwice,
      },
      {
        path: 'it',
        name: 'it',
        component: TheIt
      },
      {
        path: 'docs',
        name: 'docs',
        component: TheDocs
      },
    ]
  },
  /* {
    path: '/dashboard/:kanban/task',
    name: 'taskDetails',
    component: TaskDetails
  }, */
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
