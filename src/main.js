import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './routes'

createApp(App).use(router).mount('#app')
