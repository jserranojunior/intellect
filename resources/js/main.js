require('./bootstrap');

import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './vuex/store'
import VueRouter from 'vue-router'
import routes from './routes'
  
import users from './components/users';
import navBarMenu from './components/nav-bar-menu';
import financialIndex from './components/financial/financial-index';
import formCreateBills from './components/financial/form-create-bills.vue';
import gitHub from './components/github/index'
import App from './components/App'

const router = new VueRouter({
    routes
})
  
Vue.use(VueRouter)
Vue.use(VueAxios, axios) 
 
new Vue({
    router,
    store,
    components:{
        App,
        gitHub,
        users,
        navBarMenu,
        formCreateBills,
        financialIndex,
    }
}).$mount('#appvue') 