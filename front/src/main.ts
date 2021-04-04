import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/tail.css";
// eslint-disable-next-line @typescript-eslint/no-var-requires

const oi = "ola";
console.log(oi);

import router from "./router/index";

createApp(App).use(router).mount("#app");
