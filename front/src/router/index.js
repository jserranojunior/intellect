import Vue from 'vue'
import VueRouter from 'vue-router'
import beforeEach from './beforeEach'
import Home from '../views/Home.vue'
import Login from '../modules/auth/pages/Login.vue'
import AdicionarConta from '@/modules/financeiro/pages/AdicionarConta'
import FinanceiroIndex from '@/modules/financeiro/pages/FinanceiroIndex'
import Editor from '@/modules/editor/pages/Editor'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
 
  {
    path: '/financeiro/adicionarcontaapagar',
    name: 'adicionarcontaapagar',
    component: AdicionarConta
  },
  {
    path: '/editor',
    name: 'editor',
    component: Editor
  },
  {
    path: '/financeiro/editarcontaapagar',
    name: 'editarcontaapagar',
    component: AdicionarConta
  },
  {
    path: '/financeiro',
    name: 'financeiro',
    component: FinanceiroIndex
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach(beforeEach)

export default router
