
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router'

import { AuthMiddleware } from "./middlewares/AuthMiddleware";
const { auth } = AuthMiddleware();

import Home from "../modules/institucional/home.vue";
import FinanceiroIndex from "../modules/financeiro/pages/FinanceiroIndex.vue";
import AdicionarConta from "../modules/financeiro/pages/AdicionarConta.vue";
import EditarConta from "../modules/financeiro/pages/EditarConta.vue";
import NotFound from "../views/layouts/NotFound.vue"
import Login from "../modules/auth/pages/Login.vue";

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: [auth],
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: Home,
  },
  {
    path: "/financeiro",
    name: "Financeiro",
    component: FinanceiroIndex,
    beforeEnter: [auth],
  },
  {
    path: "/financeiro/adicionarconta",
    name: "FinanceiroAdd",
    component: AdicionarConta,
    beforeEnter: [auth],
  },
  {
    path: "/financeiro/editarconta",
    name: "FinanceiroEdit",
    component: EditarConta,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
