import axios from "axios";

const url = "http://backintellect." + process.env.DOMAIN;
console.log(url);
const token = localStorage.getItem("token");

const options = {
  baseURL: url,
  timeout: 1000,
  headers: { Authorization: `Bearer ${token}` },
};

class ApiConnect {
  async get(link) {
    console.log(url + link);
    return axios
      .get(link, options)
      .then((response) => response)
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        return error;
      });
  }
}

export default ApiConnect;
