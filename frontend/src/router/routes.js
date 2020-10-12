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
        name: "login",
      },
      {
        path: "/cadastro",
        component: () => import("../modules/auth/pages/register/Register.vue"),
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

// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: Home,
//   },
//   {
//     path: "/editor",
//     name: "editor",
//     component: Editor,
//   },
//   {
//     path: "/financeiro/editarcontaapagar",
//     name: "editarcontaapagar",
//     component: AdicionarConta,
//   },
// ];
