import ClassUseApiConnect from "../../../helpers/http/useApiConnect";
const ApiConnect = new ClassUseApiConnect();
import StoreAuth from "./StoreAuth";
import UseAcl from "../../acl/composables/UseAcl";
import { reactive } from "vue";
import Token from "./token/Token";

class Auth {
  public store;

  constructor() {
    this.store = reactive(StoreAuth.store);
  }

  LogginWithEnterButton() {
    document.addEventListener("keyup", (event) => {
      if (event.key == "Enter") {
        this.Logar();
      }
    });
  }

  setStateAuthError(erro: string) {
    StoreAuth.setAuthErro(erro);
  }

  async Logout() {
    Token.setToken("")
    this.setStateAuthError("");
    UseAcl.clearRoutesEnableWithUserAcls();
  }

  /*   async isLoggedWithToken() {
    this.setTokenEqualStorageState();
    const checked = this.checkStateToken();
    return checked;
  }
   */
  checkFieldsIsValid() {
    if (
      StoreAuth.getFields() &&
      StoreAuth.getFieldsEmail() > "" &&
      StoreAuth.getFieldsPassword() > ""
    ) {
      return true;
    } else {
      this.setStateAuthError("Campos Vazios");
      console.error("Campos Vazios")
      return false;
    }
  }

  setStateFields(dataFields: { email: string; password: string }) {
    this.store.fields.email = dataFields.email;
    this.store.fields.password = dataFields.password;
  }

  async apiLoginGetToken(apiConnect: any = ApiConnect) {
    
   try{
    return await apiConnect
    .postWithoutToken("/login", StoreAuth.store.fields)
    .then((res: any) => {
      
      if (res?.data?.token) {
        return res;
      } else if (res?.response?.data?.message) {
        this.setStateAuthError(res.response.data.message);
        return false;
      } else {
        this.setStateAuthError(
          "Erro ao fazer login, contate o administrador do sistema"
        );
        console.error("Servidor pode estar offline");
        return false;
      }
    })
    .catch((error: any) => {
      this.setStateAuthError("Erro, contate o administrador do sistema");
      console.error(error);
      return false;
    });
   }catch{
    return false
   }
  }

  async Login(apiConnect: any = ApiConnect) {
    return new Promise((resolve, reject) => {
      if (this.checkFieldsIsValid()) {
        this.apiLoginGetToken(apiConnect)
          .then(res => {
            if (res && res.data.token) {
              Token.setToken(res.data.token);
              
              return UseAcl.fetchUserAclFromApi();
            } else {
              resolve(false);
            }
          })
          .then(() => {
            UseAcl.generateRoutesEnableWithUserAcls();
            resolve(true);
          })
          .catch(error => {
            this.setStateAuthError("Erro ao fazer login:");
            console.error('Erro ao fazer login:', error);
            resolve(false);
          });
      } else {
        resolve(false);
      }
    });
  }

  async Logar(apiConnect: any = ApiConnect) {
    this.setStateAuthError("");
    return this.Login(apiConnect);
  }
}
export default new Auth();
