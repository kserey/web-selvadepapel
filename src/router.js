import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import TiendaView from './views/TiendaView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/tienda', name: 'Tienda', component: TiendaView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', 
        top: 80 
      }
    }
    return { top: 0 } 
  }
})

export default router
