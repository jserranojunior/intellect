import { store } from "./storeRoutes";
import { createRouter, createWebHistory } from "vue-router";
import { useAcl } from "../acl/composables/useAcl";

let { checkIfExisteRoutes, getUserAcl, generateRoutesEnableWithUserAcls } =
  useAcl();
const router = createRouter({
  history: createWebHistory(),
  routes: store.routes,
});

await getUserAcl(1).then(() => {
  generateRoutesEnableWithUserAcls();
});

router.beforeEach((to, from) => {
  if (typeof to.meta.id == "number") {
    if (checkIfExisteRoutes(to.meta.id)) {
      return true;
    } else {
      return false;
      /* { path: "/" }; */
    }
  }
});

export default router;
