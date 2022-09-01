import { createRouter, createWebHistory } from 'vue-router'

// Page view files (add about here or other page views)
import HomeView from '../views/HomeView.vue'
import SellProduct from '../views/SellProduct.vue'
import UserView from '../views/UserView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/',
      name: 'Sell',
      component: SellProduct
    },
    {
      path: '/',
      name: 'Profile',
      component: UserView
    },
  ]
})

export default router
