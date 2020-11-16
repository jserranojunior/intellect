import axios from "axios";
const url = "http://backintellect." + process.env.DOMAIN;

const options = {
  baseURL: url,
  timeout: 1000,
};

export default class ApiAuth {
  login(data) {
    return new Promise(async (resolve, reject) => {
      const link = `/login`;
      return axios
        .post(link, data, options)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }
  logout() {
    return new Promise(async (resolve, reject) => {
      const link = `/logout`;
      return axios
        .get(link, options)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }
}
