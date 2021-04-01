import useApiConnect from "@/modules/api/use/useApiConnect";
import {AxiosResponse} from "axios";
const ApiConnect = new useApiConnect();

class useHttpFinancial {
    async  get(dataSelecionada: string) :Promise<void | AxiosResponse>{
    const urlApi = `/financial/viewcategories/${dataSelecionada}`;
    const Connect = ApiConnect.get(urlApi)
    Connect.then((response) => {
        return response
     })
      Connect.catch((err) => {
        // eslint-disable-next-line
        console.log(err.response);
      });
     return Connect
  }
    async  edit(id: number, dataSelecionada: string) :Promise<void | AxiosResponse> {
    const urlApi = `/financial/editbills/${id}/${dataSelecionada}`;
    const Connect = ApiConnect.get(urlApi);
    Connect.then((response) => {
        return response
     })
      Connect.catch((err) => {
        // eslint-disable-next-line
        console.log(err.response);
      });
     return Connect
  }

  async store(data:Record<string, unknown>) :Promise<void | AxiosResponse> {
    const urlApi = `/financial/billstopay`;
        const Connect = ApiConnect.post(urlApi, data)
    Connect.then((response) => {
        return response
     })
      Connect.catch((err) => {
        // eslint-disable-next-line
        console.log(err.response);
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async update(data:Record<string, any>):Promise<void | AxiosResponse>  {
    const urlApi = `/financial/billstopay/${data.ID}/${data.ValoresContasAPagar.data_pagamento}`;
         const Connect = ApiConnect.put(urlApi, data)
    Connect.then((response) => {
        return response
     })
      Connect.catch((err) => {
        // eslint-disable-next-line
        console.log(err.response);
      });
  }

  async storePaidAccount(data:Record<string, unknown>):Promise<void | AxiosResponse> {
    const urlApi = `/financial/paidbills`;
         const Connect = ApiConnect.post(urlApi, data)
    Connect.then((response) => {
        return response
     })
      Connect.catch((err) => {
        // eslint-disable-next-line
        console.log(err.response);
      });
  }

  async deletePaidAccount(data:number):Promise<void | AxiosResponse>{
    const urlApi = `/financial/paidbills/${data}`;
         const Connect = ApiConnect.delet(urlApi)
    Connect.then((response) => {
        return response
     })
      Connect.catch((err) => {
        // eslint-disable-next-line
        console.log(err.response);
      });
  }
}

export default useHttpFinancial

//   return { get, edit, store, update, storePaidAccount, deletePaidAccount };
// };
