import { reactive, toRefs } from "vue";
import {useHttpAuth} from "./useHttpAuth"
const {login, register} = useHttpAuth()

 export function useAuth() {
  const state = reactive({
    ola:  'Ola de dentro do useAuth com composition sem store',
    fields: {email: "", password: ""},
    auth: {erro: "",  token:""}
  })

  function getOla(){
    return state.ola
  }
  function setStateToken(token:string){
    state.auth.token = token;  
  }
   function setStateAuthError(erro:string){
    state.auth.erro = erro;
  }
  function setLocalStorageToken(token:string){
    if(checkOnBrowser()){
      localStorage.setItem("token", token);
    }    
  }
  function checkTokenIsEmpty(token:string){
    if (token !== "") {
      setStateAuthError("");    
    } else {
      setStateAuthError("Erro ao fazer login");
    }
  }
  function checkLocalstorageToken(){
    if(checkOnBrowser()){
      if(localStorage.getItem("token") != "null" ||
     localStorage.getItem("token") != "undefined" ||
     localStorage.getItem("token") != null ||
      localStorage.getItem("token") != undefined){
      return true
     }else{
       return false
    }
    }else{
     return false
   }
    
  }
  function checkOnBrowser(){
    if (typeof window !== 'undefined') {  
       return true
      } else {  
        return false
      }
  }
  function setToken(token: string) {
    setStateAuthError("")
    setLocalStorageToken(token)
    setStateToken(token)
  }
    function Logout() {
    setStateAuthError("")
    setToken("")
            /* redirectPageTo("financeiro") */

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
    if (checkOnBrowser() && checkLocalstorageToken() && localStorage.getItem("token") !== state.auth.token) {       
        setToken(String(localStorage.getItem("token")));      
    }
  }
  function isLogged() {
   setTokenEqualStorageState()
   console.log(state.auth.token, "ha")
  const checked = checkStateToken()
  return checked
 
   
  }
  function checkFieldsIsValid(){
    if(state.fields && state.fields.email && state.fields.password){
      return true
    }else{
      setStateAuthError("Campos Vazios");
      setToken("");
      return false
    }
  }
  function setStateFields(fields: { email: string; password: string; }){
    state.fields = fields
  }

    async function Login() {
     if (checkFieldsIsValid()) {
    return  await login(state.fields).then((res)=>{
       if(res && res.data && res.data.token) {
          setToken(res.data.token)
          return true
        }else{
          setStateAuthError("Login invalido");
          console.log(state.fields)
          console.log("Adicionar o erro de acosto com o res")
          console.log(res)
             console.log(res.response.data);
      console.log(res.response.status);
      console.log(res.response.headers);
          return false
        }                  
          /* redirectPageTo("financeiro") */
      }).catch((res)=>{          
          state.auth.erro = res.response.message;
          return false
        })
    } else{
      setStateAuthError("Campos Vazios");
      return false      
    }
  }
//not validate
  


 
  return { ...toRefs(state),checkOnBrowser,setToken,checkStateToken,checkFieldsIsValid,setStateFields, setLocalStorageToken,setStateToken, getOla,checkLocalstorageToken, setStateAuthError, checkTokenIsEmpty,  Logout, Login, isLogged };
};
