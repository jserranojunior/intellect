// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/tail.css";
import router from "./router/index.js";

createApp(App).use(router).mount("#app");
