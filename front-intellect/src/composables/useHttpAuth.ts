
const ApiConnect = new useApiConnect();
class httpAuth { 
  async login(data: Record<string, unknown>){
    const urlApi = "/login";
    return await ApiConnect.postWithoutToken(urlApi, data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  }

  async register(data: Record<string, unknown>) {
    const urlApi = "/user";
    return await ApiConnect.postWithoutToken(urlApi, data)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
  }
}

export default httpAuth;
