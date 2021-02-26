import ApiAuth from "../../../http/api/ApiAuth.js";
const Auth = new ApiAuth();

export const ActionLogin = ({ commit }, data) => {
  return Auth.login(data)
    .then((res) => {
      commit("SET_ERRO", "");
      commit("SET_TOKEN", res.data.token);
      return res;
    })
    .catch((erro) => {
      commit("SET_ERRO", erro.data.erro);
      commit("SET_TOKEN", "");
    });
};

export const ActionLogout = ({ commit }, data) => {
  localStorage.setItem("token", "");
  commit("SET_ERRO", "");
  commit("SET_TOKEN", "");
};

export const ActionAuthenticated = ({ commit }) => {
  const token = localStorage.getItem("token");

  if (
    !token ||
    token == "" ||
    token == undefined ||
    token == "undefined" ||
    token == false
  ) {
    commit("SET_ERRO", "");
    commit("SET_TOKEN", "");
  } else {
    commit("SET_ERRO", "");
    commit("SET_TOKEN", token);
  }
};
