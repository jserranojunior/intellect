
import ClassUseApiConnect from "../../../helpers/http/useApiConnect"
const  ApiConnect = new ClassUseApiConnect()

 export function useHttpAuth() {
 async function login(data: Record<string, unknown>){
    const urlApi = "/login";
     return await ApiConnect.postWithoutToken(urlApi, data)
      .then((res:any) => {        
          return res;        
      })
      .catch((res:any) => {          
        return res
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