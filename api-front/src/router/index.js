import Vue from 'vue'
import VueRouter from 'vue-router'
import list from './views/list'

Vue.use(VueRouter)

const routes = [
  {
    path: '/lista',
    name: 'lista',
    component: list
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router 