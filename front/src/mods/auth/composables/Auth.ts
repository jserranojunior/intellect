import ClassUseApiConnect from "../../../helpers/http/useApiConnect";
const ApiConnect = new ClassUseApiConnect();
import StoreAuth from "./StoreAuth";
import UseAcl from "../../acl/composables/UseAcl";
import { reactive } from "vue";

class Auth {
  public store;

  constructor() {
    this.store = reactive(StoreAuth.store);
  }

  LogginWithEnterButton() {
    document.addEventListener("keyup", (event) => {
      if (event.key == "Enter") {
        this.logar();
      }
    });
  }

  async logar() {
    this.Login().then(async (res: boolean) => {
      if (res) {
        return await UseAcl.fetchUserAclFromApi().then(() => {
          UseAcl.generateRoutesEnableWithUserAcls();
        });
      }
    });
  }
  getOla() {
    return this.store.ola;
  }
  setOla() {
    StoreAuth.setOla("ada");
  }
  setStateToken(token: string) {
    this.store.auth.token = token;
  }
  setStateAuthError(erro: string) {
    StoreAuth.setAuthErro(erro);
  }
  setLocalStorageToken(token: string) {
    if (this.checkOnBrowser()) {
      localStorage.setItem("token", token);
    }
  }
  checkTokenIsEmpty(token: string) {
    if (token !== "") {
      this.setStateAuthError("");
    } else {
      this.setStateAuthError("Erro ao fazer login");
    }
  }
  checkLocalstorageToken() {
    if (this.checkOnBrowser()) {
      if (
        localStorage.getItem("token") != "null" ||
        localStorage.getItem("token") != "undefined" ||
        localStorage.getItem("token") != null ||
        localStorage.getItem("token") != undefined
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  checkOnBrowser() {
    if (typeof window !== "undefined") {
      return true;
    } else {
      return false;
    }
  }
  setToken(token: string) {
    this.setLocalStorageToken(token);
    this.setStateToken(token);
  }
  async Logout() {
    this.setStateAuthError("");
    this.setToken("");
    UseAcl.clearRoutesEnableWithUserAcls();
  }
  checkStateToken() {
    if (
      !StoreAuth.getAuth() ||
      !StoreAuth.getAuthToken() ||
      StoreAuth.getAuthToken() == "" ||
      StoreAuth.getAuthToken() == undefined ||
      StoreAuth.getAuthToken() == "undefined" ||
      StoreAuth.getAuthToken() == "null" ||
      StoreAuth.getAuthToken() == null ||
      StoreAuth.getAuthToken().length == 0
    ) {
      return false;
    } else {
      return true;
    }
  }
  setTokenEqualStorageState() {
    if (
      this.checkOnBrowser() &&
      this.checkLocalstorageToken() &&
      localStorage.getItem("token") !== StoreAuth.getAuthToken()
    ) {
      this.setToken(String(localStorage.getItem("token")));
    } else {
      this.setToken("");
    }
  }
  async isLogged() {
    this.setTokenEqualStorageState();
    const checked = this.checkStateToken();
    return checked;
  }
  checkFieldsIsValid() {
    if (
      StoreAuth.getFields() &&
      StoreAuth.getFieldsEmail() > "" &&
      StoreAuth.getFieldsPassword() > ""
    ) {
      return true;
    } else {
      this.setStateAuthError("Campos Vazios");
      this.setToken("");
      return false;
    }
  }

  setStateFields(dataFields: { email: string; password: string }) {
    this.store.fields.email = dataFields.email;
    this.store.fields.password = dataFields.password;
  }

  async Login(apiConnect: any = ApiConnect) {
    this.setStateAuthError("");
    if (this.checkFieldsIsValid()) {
      return await apiConnect
        .postWithoutToken("/login", StoreAuth.store.fields)
        .then((res: any) => {
          if (res && res.data && res.data.token) {
            this.setToken(res.data.token);
            return true;
          } else {
            if (
              res &&
              res.response &&
              res.response.data &&
              res.response.data.message
            ) {
              this.setStateAuthError(res.response.data.message);
            } else if (res && res.response && res.response.data) {
              this.setStateAuthError(
                "Erro ao fazer login, contate o administrador do sistema"
              );
              console.error("Servidor offline");
            } else if (res && res.response) {
              this.setStateAuthError(
                "Erro, contate o administrador do sistema"
              );
            } else if (res) {
              console.error(res);
            }
            return false;
          }
        });
    } else {
      return false;
    }
  }
}

export default new Auth();
