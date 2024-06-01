import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import Layout from '@/views/Layout/index.vue'
import Category from '@/views/Category/category.vue'
import Login from '@/views/Login/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '../views/Detail/index.vue'
import CartList from '../views/cartList/index.vue'
import CheckOut from '../views/checkout/index.vue'
import Pay from '@/views/pay/index.vue'
import PayBack from '@/views/pay/payback.vue'
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
        },
        {
          path: 'category/sub/:id',
          name: 'subcategory',
          component: SubCategory,
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: Detail,
        },
        {
          path: '/cartList',
          name: 'cart',
          component: CartList,
        },
        {
          path: '/checkout',
          name: 'checkout',
          component: CheckOut,
        },
        {
          path: '/pay',
          name: 'pay',
          component: Pay,

        },
        {
          path: '/paycallback',
          component: PayBack,
        }

      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }

  ],
  //路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
