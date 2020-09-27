<template>
  <div class="flex flex-wrap">
    <!-- w-full sm:w-full md:w-2/4 lg:w-2/4 xl:w-1/4 -->
    <div
      class="w-full sm:w-full md:w-2/4 lg:w-2/4 xl:w-1/4 p-1"
      v-for="categoria in categoriaContas"
      :key="categoria.id"
    >
      <div class="painel mt-1 shadow-md">
        <div :class="categoria.cor + ' painel-header text-center p-1 rounded-lg'">
          <p class="painel-title">{{categoria.nome}}</p>
          <!-- <button type="button" class="togle" data-card-widget="collapse">
            <i class="fas fa-minus"></i>
          </button>-->
        </div>
        <div class="painel-body p-1">
          <div
            class="flex flex-wrap text-center mt-1 cursor-pointer"
            v-for="contas in categoria.contas_a_pagars"
            :key="contas.id"
            @click="editarContaAPagar(contas.id)"
          >
            <div class="w-1/4">
              <input class="mr-2 leading-tight" type="checkbox" :id="contas.id" />
            </div>
            <div
              class="w-2/4 pointer"
              @click="editarContaAPagar(contas.id)"
              data-toggle="modal"
              data-target="#exampleModal"
            >{{contas.favorecido}}</div>
            <div
              class="w-1/4"
              v-if="contas.valores_contas_a_pagars"
            >{{contas.valores_contas_a_pagars.valor | money}}</div>
            <div v-else class="w-1/4">0</div>
          </div>
        </div>
        <div class="painel-footer flex text-center justify-between border-t mt-1 p-2">
          <div class="w-1/3">Total</div>
          <div class="w-1/3">{{categoria.totalCategoria | money}}</div>
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
    }),
  },
  methods: {
    editarContaAPagar(id) {
      const dataEdit = {
        id: id,
        dataselecionada: this.dataSelecionada,
      };
      this.ActionGetContasAPagarId(dataEdit).then((result) => {
        // this.$router.push({ name: "financeiroeditarconta" });

        this.$router.push("/financeiro/editarconta").catch((err) => {});
      });
    },
    ...mapActions([
      "ActionGetCategoriasContasAPagar",
      "ActionGetContasAPagarId",
    ]),
    getCategoriaContasVuex() {
      if (this.dataSelecionada) {
        this.ActionGetCategoriasContasAPagar(this.dataSelecionada);
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
/* .custom-switch {
  padding-left: 0px;
}
.custom-control-label {
  float: right;
  margin-right: -22px;
}
.custom-control-input {
  position: fixed;
  z-index: 0;
  opacity: 0;
  display: none;
}

.pointer {
  cursor: pointer;
} */
/* .card-body {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding: 0.25rem;
}

.card {
  margin-top: 15px;
}

.card-header {
  padding: 0.25rem 1.25rem;
} */

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

/* .table {
  margin-bottom: 0rem;
}

body {
  font-size: 0.7rem;
}
.table td,
.table th {
  padding: 0.2rem;
} */
</style>
