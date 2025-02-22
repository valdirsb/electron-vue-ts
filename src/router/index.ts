import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/home.vue'
import ProductView from '../pages/products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView,
    },
  ],
})

export default router
