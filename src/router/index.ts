import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NavBarVue from '../components/NavBar.vue'
import AuthViewVue from '../views/AuthView.vue'
import Changebar from '../components/changebar.vue'
import ProjectsViewVue from '../views/ProjectsView.vue'
import InitProjectViewVue from '../views/InitProjectView.vue'
import SettingsViewVue from '../views/SettingsView.vue'
import ProjectRepoViewVue from '../views/ProjectRepoView.vue'
import ProjectDocViewVue from '../views/ProjectDocView.vue'
import kanbanVue from '../views/kanban.vue'
import ProjectSettingViewVue from '../views/ProjectSettingView.vue'
import QAbar from '../components/QAbar.vue'
import QATestingViewVue from '../views/QATestingView.vue'
import QADeploymentViewVue from '../views/QADeploymentView.vue'
import InformVue from '../views/inform.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      component:  ProjectsViewVue,
    },
    {
      path: '/init-project',
      name: 'init-project',
      component:  InitProjectViewVue,
    },
    {
      path: '/inform',
      name: 'inform',
      component:  InformVue,
    },
    {
      path: '/settings',
      name: 'settings',
      component:  SettingsViewVue,
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
