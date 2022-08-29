import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GerenciarItem from "@/views/GerenciarItem"
import VisualizarItem from "@/views/VisualizarItem"
import EditarItem from "@/views/EditarItem"
import AddItem from "@/views/AddItem"
import PageNotFound from "@/views/PageNotFound"

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/itens",
    component: HomeView
  },
  {
    path: '/itens',
    name: 'Itens',
    component: GerenciarItem
  },
  {
    path: '/itens/add',
    name: 'AddItens',
    component: AddItem
  },
  {
    path: '/itens/edit/:itemId',
    name: 'EditarItem',
    component: EditarItem
  },
  {
    path: '/itens/view/:itemId',
    name: 'VisualizarItem',
    component: VisualizarItem
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
