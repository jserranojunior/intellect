import ApiUsers from "../../../http/api/ApiUsers.js";
const Users = new ApiUsers();

export const ActionUsersStore = ({ commit }, data) => {
  return Users.store(data)
    .then((res) => {
      commit("Auth/SET_ERRO", "", { root: true });
      commit("Auth/SET_TOKEN", res.token, { root: true });
      return res;
    })
    .catch((erro) => {
      commit("Auth/SET_ERRO", erro.data.erro, { root: true });
      commit("Auth/SET_TOKEN", "", { root: true });
    });
};
