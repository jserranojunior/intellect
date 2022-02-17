const ApiConnect = new useApiConnect();

class httpFinancial {
    async  get(dataSelecionada: string){
    const urlApi = `/financial/viewcategories/${dataSelecionada}`;
      return await ApiConnect.get(urlApi).then((response) => {
      return response;
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
  }
    async  edit(id: number, dataSelecionada: string){
    const urlApi = `/financial/editbills/${id}/${dataSelecionada}`;
          return await ApiConnect.get(urlApi).then((response) => {
      return response;
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
  }

  async store(data:Record<string, unknown>){
    const urlApi = `/financial/billstopay`;
        return await ApiConnect.post(urlApi, data).then((response) => {
      return response;
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async update(data:Record<string, any>){
    const urlApi = `/financial/billstopay/${data.ID}/${data.ValoresContasAPagar.data_pagamento}`;
          return await ApiConnect.put(urlApi, data).then((response) => {
      return response;
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
  }

  async storePaidAccount(data:Record<string, unknown>){
    const urlApi = `/financial/paidbills`;
       return await ApiConnect.post(urlApi, data).then((response) => {
      return response;
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
  }

  async deletePaidAccount(data:number){
    const urlApi = `/financial/paidbills/${data}`;
       return await ApiConnect.delet(urlApi).then((response) => {
      return response;
    }).catch((err) => {
      // eslint-disable-next-line
      console.log(err);
    });
  }
}

export default httpFinancial
