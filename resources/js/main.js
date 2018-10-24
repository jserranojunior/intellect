import Vue from 'vue';
import users from './components/users';
import navBarMenu from './components/nav-bar-menu';
// import axios from 'axios';

// Vue.use(axios)
 
new Vue({
    el:'#appvue',
    components:{
        users,
        navBarMenu,
    }
})