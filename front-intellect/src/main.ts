import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import routes from "./router/index"
createApp(App).use(routes).mount('#app')
