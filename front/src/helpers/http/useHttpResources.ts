import ClassUseApiConnect from "./useApiConnect";
const ApiConnect = new ClassUseApiConnect();

export const useHttpResources = () => {
  async function get(url: string) {
    return await ApiConnect.get(url)
      .then((response) => {
        if (response && response.data && response.data.data) {
          return response.data.data;
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  }

  async function edit(url: string, id: number) {
    const urlApi = `${url}${id}`;
    return await ApiConnect.get(urlApi)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  }
  async function store(url: string, data: any) {
    return await ApiConnect.post(url, data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  }
  async function update(url: string, data: any) {
    const urlApi = `${url}${data.ID}`;
    return await ApiConnect.put(urlApi, data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  }
  async function delet(url: string, data: number) {
    const urlApi = `${url}${data}`;
    return await ApiConnect.delet(urlApi)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  }
  return {
    store,
    update,
    delet,
    edit,
    get,
  };
};
