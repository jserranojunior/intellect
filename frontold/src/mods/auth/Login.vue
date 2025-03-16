<template>
  <div>
    {{Auth.store.auth}} <br> aqui {{ StoreAuth.store.auth }}
    <div class="context">
      <div class="flex items-center justify-center my-4">
        <div class="px-auto my-auto ">
          <div class="card w-96 shadow-xl mt-12 ">
            <div class="card-body bg-base-300">
              <h2 class="card-title">Login</h2>
              <span v-if="Auth.store.auth">
                <div v-if="Auth.store.auth.erro"
                  class="my-1 block text-sm text-gray-300 text-center bg-yellow-800 border border-yellow-900 h-8 items-center p-2 rounded-lg"
                  role="alert">{{ Auth.store.auth.erro }}</div>
                <div v-if="Auth.store.auth.token"
                  class="my-1 block text-sm text-gray-300 text-center bg-green-800 border border-green-900 h-8 items-center p-2 rounded-sm"
                  role="alert">Logado com sucesso!</div>
              </span>

              <form class="form-control">
                <label class="block">
                  <input id="email" v-model="Auth.store.fields.email" type="email"
                    class="input input-sm w-full max-w-xs input-bordered" placeholder="Email" />
                </label>
                <label class="block mt-2">
                  <input id="password" v-model="Auth.store.fields.password" type="password"
                    class="input input-sm w-full max-w-xs input-bordered" placeholder="Senha" autocomplete="on" />
                </label>
              </form>
              <div class="mt-2 border-t"></div>
              <div class="flex justify-between items-center mt-4">
                <div class="w-1/2">
                  <label class>

                    <Icon icon="fluent:password-16-filled" />

                    <span class="text-gray-200 text-sm">Esqueci a senha</span>
                  </label>
                </div>
                <div class="w-1/2">
                  <button class="w-full py-2 px-4  rounded-md btn btn-sm" @click="logar()">
                    <span class="px-2">LOGAR</span>
                    <Icon icon="ri:login-circle-line" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Auth from "./composables/Auth"
import StoreAuth from "./composables/StoreAuth";
import { onMounted, watch } from "vue";
import router from "../rotas/index";

function logar() {
  Auth.Logar().then(res =>{

  }).catch((err)=>{
    console.error(err)

  })
  /* .then(() => {
    router.push("/");
  }) */
}
onMounted(() => {
  Auth.LogginWithEnterButton();
});


</script>