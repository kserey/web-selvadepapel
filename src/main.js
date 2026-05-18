import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importamos la configuración de rutas
import './style.css'

const app = createApp(App)
app.use(router) // Le decimos a Vue que use el Router
app.mount('#app')