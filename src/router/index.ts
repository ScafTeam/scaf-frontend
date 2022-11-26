import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NavBarVue from '../components/NavBar.vue'
import AuthViewVue from '../views/AuthView.vue'
import Changebar from '../components/changebar.vue'
import ProjectRepoViewVue from '../views/ProjectRepoView.vue'
import ProjectDocViewVue from '../views/ProjectDocView.vue'
import kanbanVue from '../views/kanban.vue'
import ProjectSettingViewVue from '../views/ProjectSettingView.vue'
import QAbar from '../components/QAbar.vue'
import QATestingViewVue from '../views/QATestingView.vue'
import QADeploymentViewVue from '../views/QADeploymentView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  HomeView,
    },
    {
      path: '/sign-:mode(in|up|forgot)',
      name: 'auth',
      component: AuthViewVue
    },
    {
      path: '/project',
      name: 'project',
      component: Changebar ,
      children: [
        {
          path: 'repositories',
          name: 'repositories',
          component: ProjectRepoViewVue
        },
        {
          path: 'documents',
          name: 'documents',
          component: ProjectDocViewVue
        },
        {
          path: 'kanban',
          name: 'kanban',
          component: kanbanVue
        },
        {
          path: 'setting',
          name: 'setting',
          component: ProjectSettingViewVue
        },
      ]
    },
    {
      path: '/QA',
      name: 'QA',
      component: QAbar ,
      children: [
        {
          path: 'testing',
          name: 'testing',
          component: QATestingViewVue
        },
        {
          path: 'deployment',
          name: 'deployment',
          component: QADeploymentViewVue
        },
      ]
    },
  ]
})

export default router
