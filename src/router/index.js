import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import HomeView from '../views/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
