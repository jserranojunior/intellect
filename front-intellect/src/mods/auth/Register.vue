<template>
  <div>
    <div class="context">
      <div class="flex items-center justify-center my-4">
        <div class="px-auto my-auto">
          <div class="card w-96 shadow-xl mt-12">
            <div class="card-body bg-base-300">
              <h2 class="card-title">Cadastro</h2>
              <span v-if="auth && auth.auth">
                <div
                  v-if="auth.auth.erro"
                  class="my-1 block text-sm text-gray-300 text-center bg-yellow-800 border border-yellow-900 h-8 items-center p-2 rounded-lg"
                  role="alert"
                >
                  {{ auth.auth.erro }}
                </div>
                <div
                  v-if="auth.auth.token"
                  class="my-1 block text-sm text-gray-300 text-center bg-green-800 border border-green-900 h-8 items-center p-2 rounded-sm"
                  role="alert"
                >
                  Logado com sucesso!
                </div>
              </span>

              <form class="form-control">
                <label class="block">
                  <input
                    id="email"
                    v-model="auth.fields.email"
                    type="email"
                    class="input input-sm w-full max-w-xs input-bordered"
                    placeholder="Email"
                  />
                </label>
                <label class="block mt-2">
                  <input
                    id="password"
                    v-model="auth.fields.password"
                    type="password"
                    class="input input-sm w-full max-w-xs input-bordered"
                    placeholder="Senha"
                    autocomplete="on"
                  />
                </label>
                <label class="block mt-2">
                  <input
                    id="confirmpassword"
                    v-model="auth.confirmPassword"
                    type="password"
                    class="input input-sm w-full max-w-xs input-bordered"
                    placeholder="Confirmar Senha"
                    autocomplete="on"
                  />
                </label>
              </form>
              <div class="flex justify-between items-center mt-4">
                <div class="w-1/2">
                  <label class>
                    <span class="text-gray-200 text-sm">Esqueci a senha</span>
                  </label>
                </div>
                <div class="w-1/2">
                  <button class="w-full py-2 px-4 rounded-md btn btn-sm" @click="logar()">
                    LOGAR
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
import useStore from "../../helpers/stores/store";
import { onMounted, inject, reactive } from "vue";

let { auth, router } = useStore();

function redirectPageTo(url: string) {
  router.push({ path: url });
}
function logar() {
  auth.Login().then((res: boolean) => {
    if (res) {
      redirectPageTo("/financeiro");
    }
  });
}
onMounted(() => {
  document.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      logar();
    }
  });
});
</script>
