<template>
  <div>
    <div class="flex">
      <div class="flex">
        <div class="card">
          <div class="card-header categoria-contas-pagar categoria-urgencia text-center">TOTAIS</div>
          <div class="card-body table-responsive">
            <table class="table table-sm table-financial table-striped table-hover">
              <tr>
                <td class="text-primary">Contas a pagar</td>
                <td>{{ totalCategoriaContasVuex | money }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div
            class="card-header categoria-contas-pagar categoria-estudos text-center"
          >Caixa / Frelas</div>
          <div class="card-body table-responsive">
            <table class="table table-sm table-financial table-striped table-hover">
              <tr>
                <td>Santander</td>
                <td>R$148,00</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-header categoria-contas-pagar categoria-lazer text-center">Poupança</div>
          <div class="card-body table-responsive">
            <table class="table table-sm table-financial table-striped table-hover">
              <tr>
                <td>ROUPA / HIGIENE</td>
                <td>R$400,00</td>
              </tr>
            </table>
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

