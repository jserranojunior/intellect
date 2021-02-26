/* eslint-disable */
export default {
  SET_ERRO(state, data) {
    state.erro = data;
  },
  SET_TOKEN(state, data) {
    localStorage.setItem("token", data);
    state.token = data;
  },
};
