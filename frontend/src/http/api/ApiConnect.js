import axios from "axios";

const url = `${process.env.API_URL}`;

const token = localStorage.getItem("token");

const options = {
  baseURL: url,
  timeout: 1000,
  headers: { Authorization: `Bearer ${token}` },
};

class ApiConnect {
  async get(link) {
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
