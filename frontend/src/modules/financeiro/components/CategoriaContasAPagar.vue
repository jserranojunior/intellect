<template>
  <div>
    <div class="columns mt-2">
      <div
        v-for="categoria in categoriaContas"
        class="mt-2 w-full"
        style="width: 100%"
      >
        <div class="painel w-full">
          <div
            class="painel-header categoria-header text-center p-1 rounded-lg w-full"
            :style="{ backgroundColor: categoria.cor }"
          >
            <p class="painel-title">{{ categoria.nome }}</p>
          </div>
          <div class="painel-body w-full p-1">
            <div
              class="text-center cursor-pointer hover:bg-gray-700 text-gray-100 w-full"
              v-for="contas in categoria.contas_a_pagars"
              :key="contas.id"
            >
              <div class="w-1/4 text-left">
                <div
                  class="relative"
                  v-if="contas.contas_pagas && contas.contas_pagas.id"
                >
                  <label
                    for="checked"
                    class="cursor-pointer"
                    @click="
                      deleteBillPayment({
                        contas_a_pagar_id: contas.id,
                        data_pagamento: contas.contas_pagas.data_pagamento,
                      })
                    "
                  >
                    <span>
                      <span
                        class="block w-8 h-5 bg-blue-800 rounded-full shadow-inner"
                      ></span>
                      <span
                        class="absolute block w-3 h-3 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-blue-300 transform translate-x-full"
                      >
                      </span>
                    </span>
                  </label>
                </div>
                <div class="relative" v-else>
                  <label
                    for="unchecked"
                    class="cursor-pointer"
                    @click="
                      makeBillPayment({
                        contas_a_pagar_id: contas.id,
                        data_pagamento: dataSelecionada,
                      })
                    "
                  >
                    <span>
                      <span
                        class="block w-8 h-5 bg-red-800 rounded-full shadow-inner"
                      ></span>
                      <span
                        class="absolute block w-3 h-3 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-red-300"
                      >
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              <div
                class="w-2/4 pointer"
                @click="editarContaAPagar(contas.id)"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                {{ contas.favorecido }}
              </div>
              <div
                class="w-1/4 text-right"
                v-if="contas.valores_contas_a_pagars"
                @click="editarContaAPagar(contas.id)"
              >
                {{ contas.valores_contas_a_pagars.valor | money }}
              </div>
              <div v-else class="w-1/4">0</div>
            </div>
          </div>

          <div
            class="painel-footer flex text-center justify-between p-1 text-gray-300 w-full"
          >
            <div class="border-t w-full h-1">
              <div class="w-1/2 text-left">Total</div>
              <div class="w-1/2 text-right">
                {{ categoria.totalCategoria | money }}
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
  import { mapActions, mapState } from "vuex";
  export default {
    name: "CategoriaContasAPagar",
    data() {
      return {
        editandoContaAPagar: {},
        categoriaContas: {},
      };
    },
    computed: {
      ...mapState({
        categoriaContasVuex: (state) =>
          state.Financeiro.categoriaContas.categorias,
        totalCategoriaContasVuex: (state) =>
          state.Financeiro.categoriaContas.totalCategorias,
        dataSelecionada: (state) => state.Calendario.dataSelecionada,
        token: (state) => state.Auth.token,
      }),
    },
    methods: {
      makeBillPayment(data) {
        this.ActionStoreFinancialBillPayment(data).then(
          this.getCategoriaContasVuex()
        );
      },
      deleteBillPayment(data) {
        this.ActionDeleteFinancialBillPayment(data).then(
          this.getCategoriaContasVuex()
        );
      },
      editarContaAPagar(id) {
        const dataEdit = {
          id: id,
          dataselecionada: this.dataSelecionada,
        };
        this.ActionEditFinancial(dataEdit).then((result) => {
          // this.$router.push({ name: "financeiroeditarconta" });

          this.$router.push("/financeiro/editarconta").catch((err) => {});
        });
      },
      ...mapActions([
        "ActionGetFinancial",
        "ActionEditFinancial",
        "ActionStoreFinancialBillPayment",
        "ActionDeleteFinancialBillPayment",
      ]),
      getCategoriaContasVuex() {
        if (this.dataSelecionada) {
          this.ActionGetFinancial(this.dataSelecionada);
        }
      },
    },
    props: {
      msg: String,
    },
    beforeMount() {
      if (!this.token || this.token == "") {
        this.$router.push("/").catch((err) => {});
      }
      this.getCategoriaContasVuex();
    },
    watch: {
      $route(to, from) {
        if (!this.token || this.token == "") {
          this.$router.push("/").catch((err) => {});
        }
        this.getCategoriaContasVuex();
      },

      dataSelecionada() {
        this.getCategoriaContasVuex();
      },
      categoriaContasVuex: {
        handler() {
          if (this.categoriaContasVuex) {
            this.categoriaContas = this.categoriaContasVuex;
          }
        },
        deep: true,
      },
    },

    filters: {
      money: function (value) {
        if (!value) {
          return "0,00";
        } else {
          let val = (value / 1).toFixed(2).replace(".", ",");
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
      },
    },
  };
</script>

<style>
  .categoria-header {
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  .columns {
    column-width: 200px;
    column-gap: 10px;
  }

  div.columns div {
    display: inline-block;
  }
</style>
