import ApiAuth from "../../../http/api/ApiAuth.js";
const Auth = new ApiAuth();

export const ActionLogin = ({ commit }, data) => {
  return Auth.login(data)
    .then((res) => {
      commit("SET_ERRO", "");
      commit("SET_TOKEN", res.data.auth);
      return res;
    })
    .catch((erro) => {
      console.log("contem erro " + erro.data.erro);
      commit("SET_ERRO", erro.data.erro);
      commit("SET_TOKEN", "");
    });
};

export const ActionLogout = ({ commit }, data) => {
  return Auth.logout().then(() => {
    commit("SET_ERRO", false);
    commit("SET_TOKEN", false);
  });
};
