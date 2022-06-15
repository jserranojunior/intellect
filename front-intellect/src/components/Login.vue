<template>
  <div>
    <div class="context">
 <div class="flex items-center justify-center my-4">
  <div class="px-auto my-auto ">
    <div class="card w-96 shadow-xl mt-12 ">
  <div class="card-body bg-base-300">
    <h2 class="card-title">Login</h2>
            <span v-if="auth">
          <div
            v-if="auth.erro"
            class="my-1 block text-sm text-gray-300 text-center bg-yellow-800 border border-yellow-900 h-8 items-center p-2 rounded-lg"
            role="alert"
          >{{ auth.erro }}</div>
          <div
            v-if="auth.token"
            class="my-1 block text-sm text-gray-300 text-center bg-green-800 border border-green-900 h-8 items-center p-2 rounded-sm"
            role="alert"
          >Logado com sucesso!</div>
        </span>

         <form class="form-control">
            <label class="block">
              <input
                id="email"
                v-model="fields.email"
                type="email"
                class="input input-sm w-full max-w-xs input-bordered"
                placeholder="Email"
              />
            </label>
            <label class="block mt-2">
              <input
                id="password"
                v-model="fields.password"
                type="password"
                class="input input-sm w-full max-w-xs input-bordered"
                placeholder="Senha"
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
              <button
                class="w-full py-2 px-4  rounded-md btn btn-sm"
                @click="Login()"
              >LOGAR</button>
            </div>
          </div>

          <div class="mt-2 border-t">
            <div class="social-auth-links text-center my-3">

              <!-- <div class="flex justify-between">
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
              </div> -->
            </div>
          </div>

  </div>
</div>
</div>
</div>
</div>
<efectCircles></efectCircles>
  </div>
</template>

<script setup lang="ts">
import efectCircles from "../components/efectCircles.vue"
import { useAuth, } from "../composables/useAuth";

const { auth, fields, returnTrue } = useAuth();

</script>