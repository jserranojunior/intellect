import { store } from "./storeRoutes";
import { createRouter, createWebHistory } from "vue-router";
import { useAcl } from "../acl/useAcl";

let { checkIfExisteRoutes, getUserAcl, generateRoutesEnableWithUserAcls } =
  useAcl();
const router = createRouter({
  history: createWebHistory(),
  routes: store.routes,
});

await getUserAcl().then(() => {
  generateRoutesEnableWithUserAcls();
});

router.beforeEach((to, from) => {
  if (typeof to.meta.id == "number") {
    if (checkIfExisteRoutes(to.meta.id)) {
      return true;
    } else {
      return { path: "/" };
    }
  }
});

export default router;
