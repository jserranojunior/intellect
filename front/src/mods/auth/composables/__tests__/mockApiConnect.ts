import StoreAuth from "../StoreAuth";

class apiConnect {
  async postWithoutToken(urlApi:string, dataPassada:any) {
    const valorTrue = { 
      email: "jorgeserranojunior@gmail.com", password: "123"
    }

    if(StoreAuth.getFields() === valorTrue) {
      return true
    }else{
      return false
    }
  }
}
export default apiConnect;
