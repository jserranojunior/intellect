import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'


import users from './components/users';
import navBarMenu from './components/nav-bar-menu';
import financialIndex from './components/financial/financial-index';
import formCreateBills from './components/financial/form-create-bills.vue';

 
Vue.use(VueAxios, axios)
 
new Vue({
    el:'#appvue',
    components:{
        users,
        navBarMenu,
        formCreateBills,
        financialIndex,
    }
}) 