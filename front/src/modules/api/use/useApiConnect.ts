const token = localStorage.getItem("token");
import axios, {AxiosResponse} from "axios";
// ,{ AxiosResponse }
interface ClassUseApiConnect{
  get: (endpoint: string) => Promise<void | AxiosResponse>;
  post: (endpoint: string, body:Record<string, unknown>) => Promise<void | AxiosResponse> ;
   put: (endpoint: string, body:Record<string, unknown>) => Promise<void | AxiosResponse> ;
    patch: (endpoint: string, body:Record<string, unknown>) => Promise<void | AxiosResponse> ;
    delet: (endpoint: string) => Promise<void | AxiosResponse> ;
     postimage: (endpoint: string, body:Record<string, unknown>) => Promise<void | AxiosResponse> ;
      getWithoutToken: (endpoint: string, body:Record<string, unknown>) => string ;
            postWithoutToken: (endpoint: string, body:Record<string, unknown>) => Promise<void | AxiosResponse>;
      putWithoutToken: (endpoint: string, body:Record<string, unknown>) => Promise<void | AxiosResponse> ;

}

  const axiosImage = axios.create({
    baseURL: `http://${import.meta.env.VITE_APP_BACK_API_URL}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
  const axiosWithoutToken = axios.create({
    baseURL: `http://${import.meta.env.VITE_APP_BACK_API_URL}`,
  });
  const axiosInstance = axios.create({
    baseURL: `http://${import.meta.env.VITE_APP_BACK_API_URL}`,
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
  });

    

class useApiConnect implements ClassUseApiConnect{
    async get(endpoint:string):Promise<void | AxiosResponse> {
    return axiosInstance.get(endpoint);
  }

  async post(endpoint:string, body:Record<string, unknown>):Promise<void | AxiosResponse> {
    return axiosInstance.post(endpoint, body);
  }

  async put(endpoint:string, body:Record<string, unknown>):Promise<void | AxiosResponse> {
    return axiosInstance.put(endpoint, body);
  }
  async patch(endpoint:string, body:Record<string, unknown>):Promise<void | AxiosResponse> {
    return axiosInstance.patch(endpoint, body);
  }

  async delet(endpoint:string):Promise<void | AxiosResponse> {
    return axiosInstance.delete(endpoint);
  }

  async postimage(endpoint:string, body:Record<string, unknown>):Promise<void | AxiosResponse> {
    return axiosImage.post(endpoint, body);
  }

  getWithoutToken(endpoint:string):string {
    return endpoint;
    // return axiosWithoutToken.get(endpoint);
  }

  async postWithoutToken(endpoint: string, body: Record<string, unknown>): Promise<void | AxiosResponse>{
    return axiosWithoutToken.post(endpoint, body);
  }

  async putWithoutToken(endpoint:string, body:Record<string, unknown>):Promise<void | AxiosResponse> {
    return axiosWithoutToken.put(endpoint, body);
  }
}
export default useApiConnect

// export const useApiConnect = ()=> {
//   const axiosImage = axios.create({
//     baseURL: `http://${import.meta.env.VITE_APP_BACK_API_URL}`,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   const axiosWithoutToken = axios.create({
//     baseURL: `http://${import.meta.env.VITE_APP_BACK_API_URL}`,
//   });
//   const axiosInstance = axios.create({
//     baseURL: `http://${import.meta.env.VITE_APP_BACK_API_URL}`,
//     headers: {
//       Authorization: "Bearer " + token,
//       "Content-Type": "application/json",
//     },
//   });
//   async function get(endpoint:string):Promise<void | AxiosResponse> {
//     return axiosInstance.get(endpoint);
//   }

//   async function post(endpoint:string, body:Record<string, unknown>) {
//     return axiosInstance.post(endpoint, body);
//   }

//   async function put(endpoint:string, body:Record<string, unknown>) {
//     return axiosInstance.put(endpoint, body);
//   }
//   async function patch(endpoint:string, body:Record<string, unknown>) {
//     return axiosInstance.patch(endpoint, body);
//   }

//   async function delet(endpoint:string) {
//     return axiosInstance.delete(endpoint);
//   }

//   async function postimage(endpoint:string, body:Record<string, unknown>) {
//     return axiosImage.post(endpoint, body);
//   }

//   async function getWithoutToken(endpoint:string) {
//     console.log(endpoint);
//     return endpoint;
//     // return axiosWithoutToken.get(endpoint);
//   }

//   async function postWithoutToken(endpoint:string, body:Record<string, unknown>) {
//     return axiosWithoutToken.post(endpoint, body);
//   }

//   async function putWithoutToken(endpoint:string, body:Record<string, unknown>) {
//     return axiosWithoutToken.put(endpoint, body);
//   }

//   return {
//     get,
//     post,
//     put,
//     patch,
//     delet,
//     getWithoutToken,
//     postWithoutToken,
//     putWithoutToken,
//     postimage,
//   };
// };
