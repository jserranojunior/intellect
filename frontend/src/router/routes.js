import VueRouterMultiguard from "vue-router-multiguard";
import middlewares from "./middlewares/middlewares";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // { path: '', component: () => import('pages/Index.vue') },
      {
        path: "financeiro",
        name: "financeiro",
        component: () =>
          import("../modules/financeiro/pages/FinanceiroIndex.vue"),
        beforeEnter: VueRouterMultiguard([middlewares.auth]),
      },
      {
        path: "financeiro/adicionarconta",
        component: () =>
          import("../modules/financeiro/pages/AdicionarConta.vue"),
        name: "financeiroadicionarconta",
      },
      {
        path: "financeiro/editarconta",
        component: () => import("../modules/financeiro/pages/EditarConta.vue"),
        name: "financeiroeditarconta",
      },
      {
        path: "/",
        component: () => import("../modules/auth/pages/Login.vue"),
        beforeEnter: VueRouterMultiguard([middlewares.auth]),
        name: "login",
      },
      {
        path: "/cadastro",
        component: () => import("../modules/users/pages/register/Register.vue"),
        name: "cadastro",
      },
      // {
      //   path: "",
      //   component: () => import("../modules/auth/pages/Login.vue")
      // },
      {
        path: "/aniversariosmensais",
        component: () =>
          import("../modules/aniversarios/pages/AniversariosMensais"),
      },
    ],
  },
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];
export default routes;
