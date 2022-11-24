import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthViewVue from '@/views/AuthView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sign-:mode(in|up|forgot)',
      name: 'auth',
      component: AuthViewVue
    }
  ]
})

export default router
