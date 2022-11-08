import { createRouter, createWebHistory } from 'vue-router'
import TheDashboard from '../views/TheDashboard.vue'
import NotFound from '../views/NotFound.vue'
import TheAuth from '../views/TheAuth.vue'
import ThePrinters from '../views/ThePrinters.vue'
import TheSerwice from '../views/TheSerwice.vue'
import TheIt from '../views/TheIt.vue'
import TheDocs from '../views/TheDocs.vue'

import TaskModal from '../components/tasks/TaskModal.vue';
import LoginModal from '../components/layout/modals/LoginModal.vue';
import RegisterModal from '../components/layout/modals/registerModal.vue'

const routes = [
  { path: '/', redirect: '/dashboard'},
  { 
    path: '/:notFound(.*)', 
    name: 'notFound',
    component: NotFound,
  },
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
          { path: 'task/:id', name: 'taskModal', component: TaskModal, props: true, }
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
    redirect: '/auth/login',
    props: true,
    component: TheAuth,
    children: [
      { path: 'login', name: 'login', component: LoginModal,},
      { path: 'register', name: 'register', component: RegisterModal,},
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
