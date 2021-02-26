/* eslint-disable */
import state from "./AuthState";
import mutations from "./AuthMutations";
import * as actions from "./AuthActions";
import * as getters from "./AuthGetters";

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
