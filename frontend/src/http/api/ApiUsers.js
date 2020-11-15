import axios from "axios";
const url = "http://backintellect." + window.location.host;
export default class ApiUsers {
  store(data) {
    return new Promise(async (resolve, reject) => {
      const options = {
        baseURL: url,
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
