import ClassUseApiConnect from "../../../helpers/http/useApiConnect";
const ApiConnect = new ClassUseApiConnect();

export const httpAcl = () => {
  async function getUserAcl(id: any) {
    const urlApi = `/admin/useracl/${id}`;
    return await ApiConnect.getWithoutToken(urlApi)
      .then((res: any) => {
        return res.data;
      })
      .catch((res: any) => {
        return res;
      });
  }
  return { getUserAcl };
};
