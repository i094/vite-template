import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/routes'
import Store from './store'
import './index.css'

createApp(App).use(Router).use(Store).mount('#app')
