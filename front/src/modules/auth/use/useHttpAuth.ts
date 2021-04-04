import useApiConnect from "../../api/use/useApiConnect";
import { AxiosResponse } from "axios";
const ApiConnect = new useApiConnect();
class useHttpAuth {
  async login(data: Record<string, unknown>): Promise<void | AxiosResponse> {
    const urlApi = "/login";
    return await ApiConnect.postWithoutToken(urlApi, data).then((response) => {
      return response;
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
  }
}

export default useHttpAuth;

// export const useHttpAuth = () => {

//   return { login };
// };
