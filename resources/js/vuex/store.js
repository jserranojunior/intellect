import Vue from 'vue'
import Vuex from 'vuex'

import financeiro from './modules/financeiro'
import github from './modules/github'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        github,
        financeiro
    }
})