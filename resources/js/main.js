import Vue from 'vue';
import users from './components/users';
import navBarMenu from './components/nav-bar-menu';
import formCreateBills from './components/financial/form-create-bills.vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
 
new Vue({
    el:'#appvue',
    components:{
        users,
        navBarMenu,
        formCreateBills,
    }
}) 