import { createRouter, createWebHistory } from 'vue-router'

// Page view files (add about here or other page views)
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
  ]
})

export default router
