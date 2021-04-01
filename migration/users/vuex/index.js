/* eslint-disable */
import state from "./UsersState";
import mutations from "./UsersMutations";
import * as actions from "./UsersActions";
import * as getters from "./UsersGetters";

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
