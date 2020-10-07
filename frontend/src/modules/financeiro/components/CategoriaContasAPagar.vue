<template>
  <section class="grid grid-cols-3 grid-flow-row gap-1">
    <div class="painel w-full" v-for="categoria in categoriaContas" :key="categoria.id">
      <div :class="categoria.cor + ' painel-header text-center p-1 rounded-lg'">
        <p class="painel-title">{{ categoria.nome }}</p>
      </div>
      <div class="painel-body p-1 mb-auto">
        <div class="flex flex-wrap text-center mt-1 cursor-pointer hover:bg-gray-900 text-gray-100"
          v-for="contas in categoria.contas_a_pagars" :key="contas.id">
          <div class="w-1/4">
            <div class="relative" v-if="contas.contas_pagas && contas.contas_pagas.id">
              <label for="checked" class="cursor-pointer" @click="deleteBillPayment({
                    contas_a_pagar_id: contas.id, data_pagamento: dataSelecionada})">
                <span>
                  <span class="block w-10 h-6 bg-blue-800 rounded-full shadow-inner"></span>
                  <span
                    class="absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-blue-300 transform translate-x-full">
                  </span>
                </span>
              </label>
            </div>
            <div class="relative" v-else>
              <label for="unchecked" class="cursor-pointer" @click="makeBillPayment({
                    contas_a_pagar_id: contas.id, data_pagamento: dataSelecionada})">
                <span>
                  <span class="block w-10 h-6 bg-red-800 rounded-full shadow-inner"></span>
                  <span
                    class="absolute block w-4 h-4 mt-1 ml-1  rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out  bg-red-300">
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div class="w-2/4 pointer" @click="editarContaAPagar(contas.id)" data-toggle="modal"
            data-target="#exampleModal">
            {{ contas.favorecido }}
          </div>
          <div class="w-1/4" v-if="contas.valores_contas_a_pagars" @click="editarContaAPagar(contas.id)">
            {{ contas.valores_contas_a_pagars.valor | money }}
          </div>
          <div v-else class="w-1/4">0</div>
        </div>
      </div>
      <div class="painel-footer flex text-center justify-between border-t mt-1 p-2 text-gray-300 pt-auto">
        <div class="w-1/3">Total</div>
        <div class="w-1/3">{{ categoria.totalCategoria | money }}</div>
      </div>
    </div>
  </section>
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

          this.$router.push("/financeiro/editarconta").catch((err) => { });
        });
      },
      ...mapActions([
        "ActionGetFinancial",
        "ActionEditFinancial",
        "ActionStoreFinancialBillPayment",
        "ActionDeleteFinancialBillPayment"
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
      this.getCategoriaContasVuex();
    },
    watch: {
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
  .categoria-essenciais {
    background-color: #0971b2;
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  .categoria-compras {
    background-color: #4c12b2;
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  .categoria-urgencia {
    background-color: #b21212;
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  .categoria-essenciais {
    background-color: #0971b2;
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  .categoria-estudos {
    background-color: #ff8507;
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  .categoria-lazer {
    background-color: rgb(178, 18, 111);
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  .categoria-poupanca {
    background-color: rgb(37, 210, 216);
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  .categoria-transporte {
    background-color: rgb(80, 77, 74);
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  .categoria-alimentacao {
    background-color: rgb(44, 116, 29);
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  .categoria-avulsos {
    background-color: rgb(29, 116, 104);
    color: white;
    font-weight: bold;
    font-size: 14px;
  }
</style>