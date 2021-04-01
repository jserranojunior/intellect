import useApiConnect  from "@/modules/api/use/useApiConnect";
import {AxiosResponse} from "axios";
const ApiConnect = new useApiConnect()
class useHttpAuth {
  async login(data:Record<string, unknown>):Promise<void | AxiosResponse> {
    const urlApi = "/login";
    const connect = ApiConnect.postWithoutToken(urlApi, data)
    connect.then((response) => {
        return response;
      })
      connect.catch((err) => {
        // eslint-disable-next-line
        console.log(err.response);
      });  
      return connect
  }
}

export default useHttpAuth

// export const useHttpAuth = () => {

//   return { login };
// };
