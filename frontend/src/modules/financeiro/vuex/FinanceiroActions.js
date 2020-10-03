/* eslint-disable */
import axios from "axios";
import store from "../../../store";
const token = localStorage.getItem("token");

export const ActionAddContasAPagar = ({ commit }, data) => {
  return new Promise(async (resolve, reject) => {
    const options = {
      baseURL: "http://backend.localhost",
      // timeout: 1000
    };

    const link = "/financial/contasapagar";
    // console.log(data);
    axios
      .post(link, data, options)
      .then((result) => {
        console.log(result);
        resolve();
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};

export const ActionAtualizarContasAPagar = ({ commit }, data) => {
  return new Promise(async (resolve, reject) => {
    const options = {
      baseURL: "http://backend.localhost",
      // timeout: 1000
    };

    const link = `/financial/billstopay/${data.id}/${data.data_pagamento}`;
    console.log(data);
    axios
      .put(link, data, options)
      .then((result) => {
        console.log(result);
        resolve();
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};

export const ActionGetCategoriasContasAPagar = (
  { commit, state },
  dataSelecionada
) => {
  return new Promise(async (resolve, reject) => {
    const options = {
      baseURL: "http://backend.localhost",
      timeout: 1000,
    };

    const link = `/financial/${dataSelecionada}`;

    axios
      .get(link, options)
      .then(function (response) {
        commit("SET_CATEGORIA_CONTAS", response.data);
        resolve();
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response);
        reject(error);
      });
  });
};

export const ActionSetDataSelecionada = ({ commit }, data) => {
  return new Promise(async (resolve) => {
    commit("SET_DATA_SELECIONADA", data);
    resolve();
  });
};

export const ActionGetContasAPagarId = ({ commit }, data) => {
  return new Promise(async (resolve, reject) => {
    const options = {
      baseURL: "http://backend.localhost",
      // timeout: 1000
    };
    const link = `/financial/billstopay/${data.id}/${data.dataselecionada}`;
    axios
      .get(link, options)
      .then((result) => {
        commit("SET_EDITAR_CONTA_A_PAGAR", result.data);
        resolve(result.data);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
};
