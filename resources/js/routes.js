

import Home from './components/financial/financial-index'
import addBillsToPay from './views/addBillsToPay'

const routes = [
    {path:'/', name:'financeiro', component: Home},
    {path:'/pagar', name:'financeiropagar', component: addBillsToPay}
] 

export default routes