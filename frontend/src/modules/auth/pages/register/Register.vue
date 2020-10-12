<template>
  <div>
    <div class="h-screen bg-gray-900">
      <div class="px-auto px-6 py-4">
        <div class="flex items-center justify-center mt-16">
          <div class="p-6 max-w-sm w-full bg-gray-800 shadow rounded-md">
            <h3 class="text-white text-xl text-center">Cadastro</h3>
            <span>
              <!-- <div
                v-if="auth.erro"
                class="my-1 block text-sm text-left text-gray-300 text-center bg-yellow-800 border border-yellow-900 h-8 flex items-center p-2 rounded-sm"
                role="alert"
              >
                {{ auth.erro }}
              </div> -->
              <!-- <div
                v-if="auth.token"
                class="my-1 block text-sm text-left text-gray-300 text-center bg-green-800 border border-green-900 h-8 flex items-center p-2 rounded-sm"
                role="alert"
              >
                Logado com sucesso!
              </div> -->
            </span>
            <div class="mt-2">
              <label class="block">
                <input
                  type="email"
                  id="email"
                  class="focus:outline-none focus:shadow-outline border border-gray-800 rounded-lg py-2 px-4 block w-full appearance-none leading-normal text-gray-200 focus:bg-gray-800 bg-gray-900"
                  placeholder="Email"
                  v-model="fields.email"
                />
              </label>
              <label class="block mt-2">
                <input
                  type="password"
                  class="focus:outline-none focus:shadow-outline border border-gray-800 rounded-lg py-2 px-4 block w-full appearance-none leading-normal text-gray-200 focus:bg-gray-800 bg-gray-900"
                  id="password"
                  placeholder="Senha"
                  v-model="fields.password"
                />
              </label>
              <div class="flex justify-between items-center mt-4">
                <div class="w-1/2">
                  <button
                    id="login"
                    class="w-full py-2 px-4 text-center bg-blue-800 rounded-md text-white text-sm hover:bg-blue-800 focus:outline-none"
                  >
                    Cadastrar
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

<script>
  export default {
    name: "Register",
    data() {
      return {
        fields: {},
      };
    },
  };
</script>

<style></style>
