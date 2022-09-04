import { createRouter, createWebHistory } from 'vue-router'

// Page view files (add about here or other page views)
import HomeView from '../views/HomeView.vue'
import SellProduct from '../views/SellProduct.vue'
import UserProfile from '../views/UserProfile.vue'
import PageNotFound from '../views/PageNotFound.vue'
import ProductDetails from '../views/ProductDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/ProductDetails/630deef8526c94a572442cb0',
      name: 'ProductDetails',
      component: ProductDetails
    },
    {
      path: '/sell',
      name: 'SellProduct',
      component: SellProduct
    },
    {
      path: '/profile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: PageNotFound,
    },
  ]
})

export default router
