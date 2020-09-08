<template>
  <div>
    <div class="flex flex-wrap justify-center mt-1">
      <div class="w-6/12">
        <button
          type="button"
          class="mr-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
          data-toggle="modal"
          data-target="#exampleModal"
        >Adicionar Conta</button>
      </div>
      <div class="w-6/12">
        <Calendario></Calendario>
      </div>
    </div>
    <!-- <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <AddEditContas></AddEditContas>
          </div>
        </div>
      </div>
    </div>-->

    <div class="flex">
      <div class="w-8/12 p-1">
        <CategoriaContasAPagar></CategoriaContasAPagar>
      </div>

      <div class="w-4/12">
        <div class="flex">
          <div class="card">
            <div class="card-header categoria-contas-pagar categoria-urgencia text-center">TOTAIS</div>
            <div class="card-body table-responsive">
              <table class="table table-sm table-financial table-striped table-hover">
                <tr>
                  <td class="text-primary">Contas a pagar</td>
                  <td>{{ categoriaContas.TotalGeralContasAPagar | money }}</td>
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
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";
import AddEditContas from "../components/AddEditContas";
import CategoriaContasAPagar from "../components/CategoriaContasAPagar";
import Calendario from "../components/Calendario";
export default {
  name: "FinanceiroIndex",
  data() {
    return {};
  },
  components: {
    CategoriaContasAPagar,
    AddEditContas,

    Calendario
  },
  computed: {
    ...mapState({
      categoriaContas: state => state.Financeiro.categoriaContas
    })
  },
  filters: {
    money: function(value) {
      // console.log(value)
      if (!value) {
        return "0,00";
      } else {
        let val = (value / 1).toFixed(2).replace(".", ",");
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
    }
  }
};
</script>
