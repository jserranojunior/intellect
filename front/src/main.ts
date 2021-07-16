import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/tail.css";
import slifer from "slifer";

import router from "./router/index";
console.log(slifer);

const app = createApp(App).use(router).use(slifer);
app.mount("#app");
