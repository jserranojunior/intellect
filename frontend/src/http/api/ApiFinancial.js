import axios from "axios";

export default class ApiFinancial {
  get(dataSelecionada) {
    return new Promise(async (resolve, reject) => {
      const options = {
        baseURL: "http://backintellect.localhost",
        timeout: 1000,
      };
      const link = `/financial/${dataSelecionada}`;
      return axios
        .get(link, options)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          console.log(error);
          console.log(error.response);
          reject(error);
        });
    });
  }

  store(data) {
    return new Promise(async (resolve, reject) => {
      const options = {
        baseURL: "http://backintellect.localhost",
        timeout: 1000,
      };
      const link = "/financial/billstopay";
      return axios
        .post(link, data, options)
        .then((result) => {
          if (result) {
            resolve(result);
          } else {
            reject(result);
          }
        })
        .catch(function (error) {
          console.log(error);
          reject(false);
        });
    });
  }

  update(data) {
    return new Promise(async (resolve, reject) => {
      const options = {
        baseURL: "http://backintellect.localhost",
      };
      const link = `/financial/billstopay/${data.id}/${data.data_pagamento}`;
      return axios
        .put(link, data, options)
        .then((result) => {
          if (result) {
            resolve(result);
          } else {
            reject(result);
          }
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  edit(data) {
    return new Promise(async (resolve, reject) => {
      const options = {
        baseURL: "http://backintellect.localhost",
        // timeout: 1000
      };
      const link = `/financial/billstopay/${data.id}/${data.dataselecionada}`;
      return axios
        .get(link, options)
        .then((result) => {
          resolve(result);
        })
        .catch(function (error) {
          console.log(error);
          reject(error);
        });
    });
  }
}
