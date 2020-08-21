/* eslint-disable */
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'financeiro', component: () => import('../modules/financeiro/pages/FinanceiroIndex.vue') },
      { path: 'login', component: () => import('../modules/auth/pages/Login.vue') },

    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]
export default routes
