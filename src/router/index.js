import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoryView from '@/views/StoreView.vue'
import ProductView from '@/views/ProductView.vue'
import FormProdView from '@/views/FormProdView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/store/:category?/:id?',
    name: 'store',
    component: StoryView,
  },
  {
    path: '/product/:category',
    name: 'product',
    component: ProductView,
  },
  {
    path: '/edit-add/:id?',
    name: 'edit-add',
    component: FormProdView,
  },
  {
    path: '/contacts',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ContactView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
})
export default router
