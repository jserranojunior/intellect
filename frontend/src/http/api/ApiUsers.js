import axios from "axios";

export default class ApiUsers {
  store(data) {
    return new Promise(async (resolve, reject) => {
      const options = {
        baseURL: "http://backintellect.localhost",
        timeout: 1000,
      };
      const link = `/users`;
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
}
