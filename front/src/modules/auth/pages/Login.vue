<template>
  <div class="px-auto my-auto">
    <div class="flex items-center justify-center my-4">
      <div class="p-6 max-w-sm w-full bg-gray-800 shadow rounded-md">
        <h3 class="text-white text-xl text-center">Login</h3>
        <span v-if="auth">
          <div
            v-if="auth.erro"
            class="my-1 block text-sm text-gray-300 text-center bg-yellow-800 border border-yellow-900 h-8 items-center p-2 rounded-lg"
            role="alert"
          >
            {{ auth.erro }}
          </div>
          <div
            v-if="auth.token"
            class="my-1 block text-sm text-gray-300 text-center bg-green-800 border border-green-900 h-8 items-center p-2 rounded-sm"
            role="alert"
          >
            Logado com sucesso!
          </div>
        </span>
        <div class="mt-2">
          <form>
            <label class="block">
              <!-- <span class="text-white text-sm">E-Mail Address</span> -->
              <!-- MUDAR PARA EMAIL  -->

              <SInputE v-model="fields.email" name="email" placeholder="Email" />
              <!-- <input
                id="email"
                v-model="fields.email"
                type="email"
                class="form-tail"
                placeholder="Email"
              /> -->
            </label>
            <label class="block mt-2">
              <!-- <span class="text-white text-sm">Password</span> -->
              <!-- MUDAR PARA PASS  -->
              <SInputP v-model="fields.password" name="password" placeholder="Senha" />
              <!-- <input
                id="password"
                v-model="fields.password"
                type="password"
                class="form-tail"
                placeholder="Senha"
                autocomplete="on"
              /> -->
            </label>
          </form>

          <div class="flex justify-between items-center mt-4">
            <div class="w-1/2">
              <label class="">
                <span class="text-gray-200 text-sm">Esqueci a senha</span>
              </label>
            </div>
            <div class="w-1/2">
              <button
                class="w-full py-2 px-4 text-center bg-blue-800 rounded-md text-white text-sm hover:bg-blue-800 focus:outline-none"
                @click="Login()"
              >
                LOGAR
              </button>
            </div>
          </div>

          <div class="mt-2 border-t">
            <div class="social-auth-links text-center my-3">
              <!-- <p class="mb-2 text-white">Social</p> -->
              <div class="flex justify-between">
                <div class="w-1/2 text-left">
                  <a
                    href="#"
                    class="w-full bg-blue-800 hover:bg-blue-700 text-white font-bold py-1 px-2 m-1 rounded"
                  >
                    <i class="fab fa-facebook"></i>Facebook
                  </a>
                </div>
                <div class="w-1/2 text-right">
                  <a
                    href="#"
                    class="w-full bg-orange-800 hover:bg-orange-700 text-white font-bold py-1 px-2 m-1 rounded"
                  >
                    <i class="fab fa-google-plus"></i>Google+
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const useAuth = inject("auth");
    const { fields, auth, Login } = useAuth;
    return { fields, auth, Login };
  },
};
</script>
