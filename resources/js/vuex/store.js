import Vue from 'vue'
import Vuex from 'vuex'

import financeiro from './modules/financeiro'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        financeiro
    }
})