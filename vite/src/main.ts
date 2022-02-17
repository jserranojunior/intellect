import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/tail.css";


import router from "./router/index";


const app = createApp(App).use(router);
app.mount("#app");
