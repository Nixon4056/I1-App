import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faIndustry } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)
library.add(faClock)
library.add(faIndustry)
library.add(faUser)
library.add(faBars)

//COMPONENTS
import BaseKanban from './components/UI/BaseKanban.vue';
import BaseColumn from './components/UI/BaseColumn.vue';
import TheTask from './components/tasks/TaskItem.vue';

//SIMPLE COMPONENTS
import LoginBtn from './components/layout/TheLoginBtn.vue';
import UserIcon from './components/svg/UserIcon.vue';
import navIcons from './components/svg/NavIcons.vue';
import TheLogo from './components/svg/TheLogo.vue';
import AddBtn from './components/layout/AddBtn.vue'

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('base-kanban', BaseKanban);
app.component('base-column', BaseColumn);
app.component('the-task', TheTask); //TASKBOX
app.component('login-btn', LoginBtn);
app.component('user-icon', UserIcon);
app.component('nav-icons', navIcons);
app.component('the-logo', TheLogo);
app.component('btn-add', AddBtn);
app.use(store);
app.use(router);
app.mount('#app');
