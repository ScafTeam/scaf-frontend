import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:mode(signin|signup|forgot)',
      name: 'Auth',
      component: () => import('@/views/AuthView.vue'),
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'projects',
          component: () => import('@/views/Project/ProjectsView.vue'),
        },
        {
          path: ':email/:pname',
          name: 'project',
          component: () => import('@/views/Project/ProjectView.vue'),
          children: [
            {
              path: '',
              name: 'project repo',
              component: () => import('@/views/Project/RepoView.vue'),
            },
            {
              path: 'docs',
              name: 'project docs',
              component: () => import('@/views/Project/DocsView.vue'),
            },
            {
              path: 'kanban',
              name: 'project kanban',
              component: () => import('@/views/Project/KanbanView.vue'),
            },
            {
              path: 'setting',
              name: 'project setting',
              component: () => import('@/views/Project/SettingView.vue'),
            }
          ]
        },
        {
          path: 'setting',
          name: 'setting',
          component: () => import('@/views/SettingView.vue'),
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path == '/null') {
    next('/')
  }
  else {
    next()
  }

})

export default router