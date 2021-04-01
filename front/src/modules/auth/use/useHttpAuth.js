import { useApiConnect } from "@/modules/api/use/useApiConnect.js";

export const useHttpAuth = () => {
  async function login(data) {
    let urlApi = "/login";
    return useApiConnect()
      .postWithoutToken(urlApi, data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err.response);
      });
  }
  return { login };
};
