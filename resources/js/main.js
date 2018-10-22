import Vue from 'vue';
import users from './components/users';
import axios from 'axios';

Vue.use(axios)
 
new Vue({
    el:'#app',
    components:{
        users,
    }
})