import ApiFinancial from "../../../http/api/ApiFinancial.js";
const Financial = new ApiFinancial();

export const ActionGetFinancial = ({ commit }, dataSelecionada) => {
  Financial.get(dataSelecionada).then((res) => {
    commit("SET_CATEGORIA_CONTAS", res.data);
  });
};

export const ActionStoreFinancial = ({ commit }, data) => {
  Financial.store(data).then((res) => {
    return res;
  });
};

export const ActionUpdateFinancial = ({ commit }, data) => {
  console.log("vuex " + data.id);
  return Financial.update(data);
};

export const ActionEditFinancial = ({ commit }, data) => {
  Financial.edit(data).then((res) => {
    commit("SET_EDITAR_CONTA_A_PAGAR", res.data);
  });
};

export const ActionSetDataSelecionada = ({ commit }, data) => {
  return new Promise(async (resolve) => {
    commit("SET_DATA_SELECIONADA", data);
    resolve(true);
  });
};
