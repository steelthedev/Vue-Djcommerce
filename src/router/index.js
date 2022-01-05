import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Search from '../views/Search.vue'
import Cart from '../views/Cart.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/:slug',
    name:'product-details',
    component:Products
  },
  {
    path:'/search',
    name:'search',
    component:Search
  },

  {
    path:'/cart',
    name:'cart',
    component:Cart
  },

  {
    path:'/signup',
    name:'SignUp',
    component:SignUp
  },

  {
    path:'/log-in',
    name:'Login',
    component:LogIn
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
