import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import Layout from '@/views/Layout/index.vue'
import Category from '@/views/Category/category.vue'
import Login from '@/views/Login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [

        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          name: 'category',
          component: Category,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }

  ]
})

export default router
