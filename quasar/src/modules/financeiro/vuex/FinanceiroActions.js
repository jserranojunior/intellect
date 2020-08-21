/* eslint-disable */
import axios from "axios";
import store from "../../../store";
const token = localStorage.getItem("token");
export const ActionAddContasAPagar = ({ dispatch }, dados) => {
  return new Promise(async (resolve, reject) => {
    const options = {
      baseURL: "http://localhost:3333",
      timeout: 1000,
      headers: {
        Authorization: "Bearer " + token
      }
    };

    const link = "/contasapagar";

    axios
      .post(link, dados, options)
      .then(function() {
        dispatch("ActionGetCategoriasContasAPagar");
        resolve();
      })
      .catch(function(error) {
        console.log(error);
        console.log(error.response);
        reject(error);
      });
  });
};

export const ActionGetCategoriasContasAPagar = ({ commit, state }) => {
  return new Promise(async (resolve, reject) => {
    const options = {
      baseURL: "http://localhost:3333",
      timeout: 1000,
      headers: {
        Authorization: "Bearer " + token
      }
    };

    let dataSelecionada;
    if (state.dataSelecionada === "") {
      var date = new Date();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var formatterMonth;
      if (month < 10) {
        formatterMonth = "0" + month;
      } else {
        formatterMonth = month;
      }
      dataSelecionada = year + "-" + formatterMonth;
    } else {
      dataSelecionada = state.dataSelecionada;
    }

    const link = "/financeiro/" + dataSelecionada;

    axios
      .get(link, options)
      .then(function(response) {
        commit("SET_CATEGORIA_CONTAS", response.data);
        resolve();
      })
      .catch(function(error) {
        console.log(error);
        console.log(error.response);
        reject(error);
      });
  });
};

export const ActionSetDataSelecionada = ({ commit }, data) => {
  return new Promise(async resolve => {
    commit("SET_DATA_SELECIONADA", data);
    resolve();
  });
};

export const ActionGetEditarContaAPagar = ({ commit, state }, id) => {
  return new Promise(async (resolve, reject) => {
    const options = {
      baseURL: "http://localhost:3333",
      timeout: 1000,
      headers: {
        Authorization: "Bearer " + token
      }
    };

    let dataSelecionada;
    if (state.dataSelecionada === "") {
      var date = new Date();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      var formatterMonth;
      if (month < 10) {
        formatterMonth = "0" + month;
      } else {
        formatterMonth = month;
      }
      dataSelecionada = year + "-" + formatterMonth;
    } else {
      dataSelecionada = state.dataSelecionada;
    }

    const link = "/contasapagar/" + id + "/" + dataSelecionada + "/edit";
    axios
      .get(link, options)
      .then(function(response) {
        commit("SET_EDITAR_CONTA_A_PAGAR", response.data[0]);
        resolve();
      })
      .catch(function(error) {
        console.log(error);
        console.log(error.response);
        reject(error);
      });
  });
};
