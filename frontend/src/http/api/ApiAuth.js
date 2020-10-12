import axios from "axios";

export default class ApiAuth {
  login(data) {
    return new Promise(async (resolve, reject) => {
      const options = {
        baseURL: "http://backintellect.localhost",
        timeout: 1000,
      };
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
      const options = {
        baseURL: "http://backintellect.localhost",
        timeout: 1000,
      };
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
