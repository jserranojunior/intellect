<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4 p-1">
        <div class="painel mt-1 shadow-md text-white">
          <div
            class="painel-header text-center p-1 rounded-lg text-white bg-red-500"
          >
            <p class="painel-title">TOTAIS</p>
          </div>
          <div class="painel-body p-1">
            <div class="flex flex-wrap justify-between text-center mt-1 p-1">
              <div>Contas a pagar</div>
              <div v-if="totalCategoriaContasVuex">
                {{ totalCategoriaContasVuex | money }}
              </div>
              <div v-else class="w-1/4">0</div>
            </div>
            <div class="flex flex-wrap justify-between text-center mt-1 p-1">
              <div>Santander</div>
              <div class="w-1/4">140,00</div>
            </div>
          </div>
          <div
            class="painel-footer flex text-center justify-between border-t mt-1 p-2"
          >
            <div class="w-1/3">Total</div>
            <div class="w-1/3">000</div>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4 p-1">
        <div class="painel mt-1 shadow-md text-white">
          <div
            class="painel-header text-center p-1 rounded-lg text-white bg-green-500"
          >
            <p class="painel-title">CAIXA / FREELAS</p>
          </div>
          <div class="painel-body p-1">
            <div class="flex flex-wrap justify-between text-center mt-1 p-1">
              <div>Ls Star</div>
              <div>750,00</div>
            </div>
            <div class="flex flex-wrap justify-between text-center mt-1 p-1">
              <div>Acolher</div>
              <div>1.400,00</div>
            </div>
          </div>
          <div
            class="painel-footer flex text-center justify-between border-t mt-1 p-2"
          >
            <div class="w-1/3">Total</div>
            <div class="w-1/3">000</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import { mapState } from "vuex";
  export default {
    name: "FeedbackFinanceiro",
    computed: {
      ...mapState({
        totalCategoriaContasVuex: (state) =>
          state.Financeiro.categoriaContas.totalCategorias,
      }),
    },
    filters: {
      money: function (value) {
        // console.log(value)
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
