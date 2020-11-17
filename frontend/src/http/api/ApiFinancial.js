import axios from "axios";
import ApiConnect from "./ApiConnect";
const apiConnect = new ApiConnect();

const url = `${process.env.DOMAIN_SECURE}://${process.env.API_URL}`;
export default class ApiFinancial {
  async get(dataSelecionada) {
    const link = `/financial/${dataSelecionada}`;
    return await apiConnect.get(link);
  }

  store(data) {
    const token = localStorage.getItem("token");
    return new Promise(async (resolve, reject) => {
      const options = {
        baseURL: url,
        timeout: 1000,
        headers: { Authorization: `Bearer ${token}` },
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
    const token = localStorage.getItem("token");
    return new Promise(async (resolve, reject) => {
      const options = {
        baseURL: url,
        headers: { Authorization: `Bearer ${token}` },
      };
      const link = `/financial/billstopay/${data.id}/${data.data_pagamento}`;
      return axios
        .put(link, data, options)
        .then((result) => {
          if (result.data) {
            console.log(result);
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
        baseURL: url,
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

  storeContaPaga(data) {
    return new Promise(async (resolve, reject) => {
      const options = {
        baseURL: url,
        timeout: 1000,
      };
      const link = "/financial/contapaga";
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

  deleteContaPaga(data) {
    console.log(data);
    return new Promise(async (resolve, reject) => {
      const link = `${url}/financial/contapaga/${data.contas_a_pagar_id}/${data.data_pagamento}`;
      return axios
        .delete(link)
        .then((result) => {
          resolve(result.data);
        })
        .catch(function (error) {
          console.log(error);
          reject(false);
        });
    });
  }
}
