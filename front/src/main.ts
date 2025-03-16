import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import routes from "./mods/rotas/index";
/* import Maska from "maska";
 */import { Icon } from "@iconify/vue";


createApp(App).use(routes).component("Icon", Icon).mount("#app");
