
import ClassUseApiConnect from "./useApiConnect"
const  ApiConnect = new ClassUseApiConnect()

 export function useHttpAuth() {
 async function login(data: Record<string, unknown>){
  console.log("LOGIN SENDO FEITO")
    const urlApi = "/login";
     return await ApiConnect.postWithoutToken(urlApi, data)
      .then((response:any) => {
        return response;
      })
      .catch((err:any) => {
        // eslint-disable-next-line
        console.log(err);
      }); 
  }

async  function register(data: Record<string, unknown>) {
   const urlApi = "/user";
    return await ApiConnect.postWithoutToken(urlApi, data)
      .then((response:any) => {
        return response;
      })
      .catch((err:any) => {
        // eslint-disable-next-line
        console.log(err);
      }); 
  }


return {login, register};
 }