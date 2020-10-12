<template>
  <div class="">
    <div class="h-screen bg-gray-900">
      <div class="px-auto px-6 py-4">
        <div class="flex items-center justify-center mt-16">
          <div class="p-6 max-w-sm w-full bg-gray-800 shadow rounded-md">
            <h3 class="text-white text-xl text-center">Login</h3>
            <span v-if="auth">
              <div
                v-if="auth.erro"
                class="my-1 block text-sm text-left text-gray-300 text-center bg-yellow-800 border border-yellow-900 h-8 flex items-center p-2 rounded-sm"
                role="alert"
              >
                {{ auth.erro }}
              </div>
              <div
                v-if="auth.token"
                class="my-1 block text-sm text-left text-gray-300 text-center bg-green-800 border border-green-900 h-8 flex items-center p-2 rounded-sm"
                role="alert"
              >
                Logado com sucesso!
              </div>
            </span>
            <div class="mt-2">
              <label class="block">
                <!-- <span class="text-white text-sm">E-Mail Address</span> -->
                <input
                  type="email"
                  id="email"
                  class="focus:outline-none focus:shadow-outline border border-gray-800 rounded-lg py-2 px-4 block w-full appearance-none leading-normal text-gray-200 focus:bg-gray-800 bg-gray-900"
                  placeholder="Email"
                  v-model="fields.email"
                />
              </label>
              <label class="block mt-2">
                <!-- <span class="text-white text-sm">Password</span> -->
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
                  <label class="">
                    <span class="text-gray-200 text-sm">Esqueci a senha</span>
                  </label>
                </div>
                <div class="w-1/2">
                  <button
                    id="login"
                    class="w-full py-2 px-4 text-center bg-blue-800 rounded-md text-white text-sm hover:bg-blue-800 focus:outline-none"
                    @click="login()"
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
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  // import VerifyBirthdays from "birthdays";
  import { mapActions, mapState } from "vuex";
  export default {
    name: "Login",
    data() {
      return {
        fields: {},
      };
    },
    beforeMount() {
      // console.log(VerifyBirthdays.month("2020-09-15"));
      //  this.fields.email = "jorgeserranojunior@gmail.com"
      //  this.fields.password = "carro"
      // if (this.Auth.token > "") {
      //   this.$router.go("financeiro");
      // }
    },

    computed: {
      ...mapState({
        auth: (state) => state.Auth,
      }),
    },
    methods: {
      ...mapActions(Auth, ["ActionLogin"]),
      login() {
        this.ActionLogin(this.fields).then((res) => {
          if (res.data.auth) {
            this.$router.push("financeiro");
          }
        });
      },
      validation() {
        if (this.fields.email && this.fields.password) {
          return true;
        } else {
          return false;
        }
      },
    },
    watch: {
      // Auth: {
      //   handler: function () {
      //     if (this.Auth.token > "") {
      //       this.$router.push({ name: "financeiro" });
      //     }
      //   },
      //   deep: true,
      // },
    },
  };
</script>
<style>
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #1a202c inset;
    -webkit-text-fill-color: white !important;
  }

  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 30px #1a202c inset;
    -webkit-text-fill-color: white !important;
  }
</style>
