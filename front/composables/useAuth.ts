import { reactive, toRefs } from "vue";
// import { useRouter } from 'vue-router'
// import  router from "@/router/index";
// import { useRoute } from '#imports'
//  const router = useRoute()
import { useRouter } from '#imports'
const httpAuth = new useHttpAuth();


const router = useRouter

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAuth = () => {

  const state  = reactive({
    ola: "Ola",
    fields: {email: "", password: ""},
    auth: {erro: "",  token: "" },
  });

  async function Login() {
    if (state.fields && state.fields.email && state.fields.password) {
      const Auth = httpAuth.login(state.fields)
        Auth.then((res) => {
      
          if (res && res.data) {
            setToken(res.data.token).then((response) => {
              if (response) {
                router().push("financeiro")
              }
            });
          } else {    
            state.auth.erro = "Erro ao fazer o login";
          }
        });
        Auth.catch(()=>{
          state.auth.erro = "Erro ao fazer o login";
        })
    } else {
      state.auth.erro = "Campos Vazios";
      setToken("");
    }
  }

  async function isLogged() {
    if (localStorage.getItem("token") !== state.auth.token) {
      let token: string;
      if (
        localStorage.getItem("token") != "null" ||
        localStorage.getItem("token") != "undefined" ||
        localStorage.getItem("token") != null ||
        localStorage.getItem("token") != undefined
      ) {
        token = String(localStorage.getItem("token"));
      }else{
        token = ""
      }

      await setToken(token).then(() => {
        if (state.auth.token == "") {
          state.auth.erro = "Erro ao fazer login";
          return false;
        } else {
          return true;
        }
      });
    }
    if (
      !state.auth ||
      !state.auth.token ||
      state.auth.token == "" ||
      state.auth.token == undefined ||
      state.auth.token == "undefined" ||
      state.auth.token == "null" ||
      state.auth.token == null ||
      state.auth.token.length == 0
    ) {
      return false;
    } else if (state.auth && state.auth.token !== "") {
      return true;
    }
  }

  async function setToken(value: string) {
    localStorage.setItem("token", value);    
    state.auth.token = value;
    if (value) {
      state.auth.erro = "";
      return true;
    } else {
      return false;
    }
  }
  function Logout() {
    setToken("");
    const token = useCookie('token')
    token.value = ""
    router().push("login");
  }
  return { ...toRefs(state), Logout, Login, isLogged };
};