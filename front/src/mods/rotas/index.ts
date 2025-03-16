import { store } from "./storeRoutes";
import { createRouter, createWebHistory } from "vue-router";
import UseAcl from "../acl/composables/UseAcl";

const router = createRouter({
  history: createWebHistory(),
  routes: store.routes,
});
router.beforeResolve((to, from) => {

  if (typeof to.meta.id == "number") {

    if (UseAcl.checkIncludeRoute(to.meta.id)) {
      return true;
    } else {
/*       router.push("login");
 */      return false;
    }
  } 
});

export default router;
