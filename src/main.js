import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//COMPONENTS
import BaseKanban from './components/UI/BaseKanban.vue'

//SIMPLE COMPONENTS
import LoginBtn from './components/layout/TheLoginBtn.vue'
import UserIcon from './components/svg/UserIcon.vue'
import navIcons from './components/svg/NavIcons.vue'
import TheLogo from './components/svg/TheLogo.vue'

const app = createApp(App);
app.component('base-kanban', BaseKanban)
app.component('login-btn', LoginBtn)
app.component('user-icon', UserIcon)
app.component('nav-icons', navIcons)
app.component('the-logo', TheLogo)
app.use(store)
app.use(router)
app.mount('#app')
