import axios from "axios";
import ApiConnect from "./ApiConnect";
const apiConnect = new ApiConnect();

const url = `${process.env.API_URL}`;
const token = localStorage.getItem("token");
export default class ApiFinancial {
  async get(dataSelecionada) {
    const link = `/financial/viewcategories/${dataSelecionada}`;
    return await apiConnect.get(link);
  }

  store(data) {
    return new Promise(async (resolve, reject) => {
      const options = {
        baseURL: url,
        timeout: 1000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
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
        .catch(function(error) {
          console.log(error);
          reject(error);
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
          console.log(data);
          console.log(result);
          if (result) {
            resolve(result);
          } else {
            reject(result);
          }
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }

  edit(data) {
    const token = localStorage.getItem("token");
    return new Promise(async (resolve, reject) => {
      const options = {
        baseURL: url,
        headers: { Authorization: `Bearer ${token}` },
      };
      const link = `/financial/editbills/${data.id}/${data.dataselecionada}`;
      return axios
        .get(link, options)
        .then((result) => {
          if (result.data.data[0]) {
            resolve(result.data.data[0]);
          } else {
            reject(result);
          }
        })
        .catch(function(error) {
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
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const link = "/financial/paidbills";
      return axios
        .post(link, data, options)
        .then((result) => {
          if (result) {
            console.log(result);
            resolve(result);
          } else {
            reject(result);
          }
        })
        .catch(function(error) {
          console.log(error);
          reject(false);
        });
    });
  }

  deleteContaPaga(data) {
    const options = {
      baseURL: url,
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    return new Promise(async (resolve, reject) => {
      const link = `${url}/financial/paidbills/${data}`;
      return axios
        .delete(link, options)
        .then((result) => {
          console.log(result);
          resolve(result);
        })
        .catch(function(error) {
          console.log(error);
          reject(false);
        });
    });
  }
}
