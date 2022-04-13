
import { useRouter, toRefs } from '#imports'
import {  } from '#imports'
const httpAuth = new useHttpAuth();
const router = useRouter
import { defineStore } from 'pinia'

const storeAuth = defineStore('auth', {
state: () => ({
    ola:  'Ola de dentro do pinia com composition sem sotre',
    fields: {"email": "", "password": ""},
    auth: {erro: "",  token:""}
  })
})

 const useAuth = () => {

    const state  = storeAuth()

  function setLocalStorageToken(token:string){
    if(process.client){
      localStorage.setItem("token", token);
    }    
  }
  function setStateToken(token:string){
    state.auth.token = token;  
  }
  function setErrorToken(token:string){
  if (token !== "") {
    setStateAuthError("");    
  } else {
    setStateAuthError("Erro ao fazer login");
  }
  }
  function setStateAuthError(erro:string){
    state.auth.erro= erro;
  }
  function setToken(token: string) {
    setLocalStorageToken(token)
    setStateToken(token)
    setErrorToken(token)
  }
  function Logout() {
    setToken("");
    setTokenEqualStorageState()
        setErrorToken("")

    router().push("login");
  }
  function checkLocalstorageToken(){
    if(process.client){
      if(localStorage.getItem("token") != "null" ||
      localStorage.getItem("token") != "undefined" ||
      localStorage.getItem("token") != null ||
      localStorage.getItem("token") != undefined){
        return true
      }else{
        return false
    }
    }else{
      false
    }
    
  }
  function checkStateToken(){
    if(!state.auth ||
      !state.auth.token ||
      state.auth.token == "" ||
      state.auth.token == undefined ||
      state.auth.token == "undefined" ||
      state.auth.token == "null" ||
      state.auth.token == null ||
      state.auth.token.length == 0){
        return false
      }else{
        return true
      }
  }
  function setTokenEqualStorageState(){
    if (process.client && checkLocalstorageToken() && localStorage.getItem("token") !== state.auth.token) {       
        setToken(String(localStorage.getItem("token")));      
    }
  }
  async function isLogged() {
    setTokenEqualStorageState()
    return checkStateToken()

  }

  async function Login() {
    if (state.fields && state.fields.email && state.fields.email) {
      const Auth = httpAuth.login(state.fields)
        Auth.then((res) => {
      
          if (res && res.data) {
            setToken(res.data.token)
            if (res.data.token) {
                router().push("Financeiro")
              }
          } else {    
            setStateAuthError("Erro ao fazer o login");
          }
        });
        Auth.catch(()=>{
          state.auth.erro = "Erro ao fazer o login";
        })
    } else {
      setStateAuthError("Campos Vazios");
      setToken("");
    }
  }
 



  return { ...toRefs(state), Logout, Login, isLogged };
};

export default useAuth