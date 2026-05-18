import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import TiendaView from './views/TiendaView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/tienda', name: 'Tienda', component: TiendaView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router