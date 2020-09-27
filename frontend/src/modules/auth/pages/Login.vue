<template>
  <div>
    <div class="flex justify-center">
      <div class="w-4/12">
        <div class="mt-2 p-2 shadow-lg border-t">
          <div class="card-body login-card-body">
            <div class="mb-1 w-full text-right">
              <a href="#" class="text-right">CADASTRAR</a>
            </div>
            <div class="input-group mb-3">
              <input
                type="email"
                id="email"
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                placeholder="Email"
                v-model="fields.email"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                id="password"
                placeholder="Senha"
                v-model="fields.password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap justify-between">
              <div class="w-2/3">
                <div class="icheck-primary">Esqueci a senha</div>
              </div>
              <!-- /.col -->
              <div class="w-1/3">
                <button
                  id="login"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                  @click="logar()"
                >
                  LOGAR
                </button>
              </div>
              <!-- /.col -->
            </div>

            <div class="social-auth-links text-center mb-3">
              <p class="mb-2">Login Social</p>
              <a
                href="#"
                class="w-full bg-blue-400 hover:bg-blue-300 text-white font-bold py-1 px-2 m-1 rounded"
              >
                <i class="fab fa-facebook mr-2"></i>Facebook
              </a>
              <a
                href="#"
                class="w-full bg-orange-400 hover:bg-orange-300 text-white font-bold py-1 px-2 m-1 rounded"
              >
                <i class="fab fa-google-plus mr-2"></i>Google+
              </a>
            </div>
            <!-- /.social-auth-links -->
          </div>
          <!-- /.login-card-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import VerifyBirthdays from "birthdays";
import { mapActions, mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      fields: {},
    };
  },
  beforeMount() {
    console.log(VerifyBirthdays.month("2020-09-15"));
    //  this.fields.email = "jorgeserranojunior@gmail.com"
    //  this.fields.password = "carro"
    if (this.Auth.token > "") {
      this.$router.go("financeiro");
    }
  },

  computed: {
    ...mapState("Auth", {
      Auth: (state) => state,
    }),
  },
  methods: {
    ...mapActions("Auth", ["authenticate"]),
    logar() {
      this.authenticate(this.fields).then((response) => {
        console.log("response");
        if (response) {
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
    Auth: {
      handler: function () {
        if (this.Auth.token > "") {
          this.$router.push({ name: "financeiro" });
        }
      },
      deep: true,
    },
  },
};
</script>

