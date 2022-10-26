import { store } from "./storeRoutes";
import { createRouter, createWebHistory } from "vue-router";
import { useAcl } from "../acl/composables/useAcl";

let { checkIfExisteRoutes } = useAcl();
const router = createRouter({
  history: createWebHistory(),
  routes: store.routes,
});
router.beforeResolve((to, from) => {
  if (typeof to.meta.id == "number") {
    if (checkIfExisteRoutes(to.meta.id)) {
      return true;
    } else {
      router.push("login");

      return false;
    }
  }
});

export default router;
