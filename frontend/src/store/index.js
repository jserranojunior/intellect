/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

import Auth from "../modules/auth/vuex";
import Financeiro from "../modules/financeiro/vuex";
import Calendario from "../modules/financeiro/components/calendario/vuex";

Vue.use(Vuex);
export default function() {
  const Store = new Vuex.Store({
    modules: {
      Auth,
      Financeiro,
      Calendario
    },
    strict: process.env.DEV
  });
  return Store;
}
