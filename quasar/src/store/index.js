import Vue from 'vue'
import Vuex from 'vuex'
/* eslint-disable */
import Auth from "../modules/auth/vuex";
import Financeiro from "../modules/financeiro/vuex";

Vue.use(Vuex);
export default function() {
  const Store = new Vuex.Store({
    modules: {
      Auth,
      Financeiro
    },
    strict: process.env.DEV
  });
  return Store;
}
