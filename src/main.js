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
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)
library.add(faClock)
library.add(faIndustry)
library.add(faUser)
library.add(faBars)
library.add(faXmark)
library.add(faChevronDown)
library.add(faEnvelope)

//COMPONENTS
import BaseKanban from './components/UI/BaseKanban.vue';
import BaseColumn from './components/UI/BaseColumn.vue';
import BaseModal from './components/UI/BaseModal.vue';
import BaseLogContainer from './components/UI/BaseLogContainer.vue';
import TheTask from './components/tasks/TaskItem.vue';
import ThePreTask from './components/tasks/PreTask.vue';

//MODALS
import UserModal from './components/layout/modals/UserModal.vue'; 

//SIMPLE COMPONENTS
import LoginBtn from './components/layout/TheLoginBtn.vue';
import SaveButtons from './components/layout/Buttons/SaveButtons.vue';
import UserIcon from './components/svg/UserIcon.vue';
import navIcons from './components/svg/NavIcons.vue';
import TheLogo from './components/svg/TheLogo.vue';
import AddBtn from './components/layout/Buttons/AddBtn.vue';
import xBtn from './components/layout/Buttons/xBtn.vue';
import MenuBtn from './components/layout/Buttons/MenuBtn.vue';
import DropDownMenu from './components/layout/DropDownMenu.vue';
import TheCompany from './components/layout/TheCompany.vue';
import UserPlate from './components/layout/UserPlate.vue';
import Btn from './components/layout/Buttons/BasicBtn.vue';
import CommentsLogs from './components/layout/CommentsLogs.vue';  //Comments and Logs CONTAINER

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('base-kanban', BaseKanban);
app.component('base-column', BaseColumn);
app.component('base-modal', BaseModal);
app.component('base-log-container', BaseLogContainer);
app.component('the-task', TheTask); //TASKBOX
app.component('pre-task', ThePreTask); //TASKBOX
app.component('comments-logs', CommentsLogs); //TASKBOX
app.component('login-btn', LoginBtn);
app.component('save-buttons', SaveButtons);
app.component('user-icon', UserIcon);
app.component('nav-icons', navIcons);
app.component('the-logo', TheLogo);
app.component('btn-add', AddBtn);
app.component('x-btn', xBtn);
app.component('basic-btn', Btn);
app.component('menu-btn', MenuBtn);
app.component('dropdown-menu', DropDownMenu);
app.component('the-company', TheCompany);
app.component('user-plate', UserPlate);
app.component('user-modal', UserModal);
app.use(store);
app.use(router);
app.mount('#app');
