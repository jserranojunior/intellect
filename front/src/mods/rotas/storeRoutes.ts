import { reactive } from "vue";

export const store = reactive({
  routes: [
    {
      name: "notfound",
      path: "/:catchAll(.*)*",
      meta: {
        id: 0,
      },
      component: () => import("../../pages/ErrorNotFound.vue"),
    },
    {
      name: "/",
      path: "/",
      meta: {
        id: 1,
      },
      component: () => import("../../pages/IndexPage.vue"),
    },
    {
      name: "login",
      path: "/login",
      meta: {
        id: 2,
      },
/*       component: () => import("../../pages/LoginPage.vue"),
 */    
component: () => import("../auth/Login.vue"),

},
    {
      name: "cadastro",
      path: "/cadastro",
      meta: {
        id: 3,
      },
      component: () => import("../../pages/RegisterPage.vue"),
    },
    {
      name: "financeiro",
      path: "/financeiro",
      meta: {
        id: 4,
      },
      component: () => import("../financeiro/pages/Financeiro.vue"),
    },
    {
      name: "financeiroaddconta",
      path: "/financeiroaddconta",
      meta: {
        id: 4,
      },
      component: () => import("../../pages/AdicionarConta.vue"),
    },
    {
      name: "usuarios",
      path: "/usuarios",
      meta: {
        id: 5,
      },
      component: () => import("../../pages/UsersPage.vue"),
    },
    {
      name: "contasapagar",
      path: "/contasapagar",
      meta: {
        id: 6,
      },
      component: () => import("../financeiro/pages/ContasAPagar.vue"),
    },
  ],
});
