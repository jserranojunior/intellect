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
      <div class="w-4/12">
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
      <FeedbackFinanceiro />
      <div class="w-4/12"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import AddEditContas from "../components/AddEditContas";
import CategoriaContasAPagar from "../components/CategoriaContasAPagar";
import FeedbackFinanceiro from "../components/FeedbackFinanceiro";
import Calendario from "../components/calendario/Calendario";
export default {
  name: "FinanceiroIndex",
  data() {
    return {};
  },
  components: {
    CategoriaContasAPagar,
    AddEditContas,
    FeedbackFinanceiro,
    Calendario,
  },
};
</script>
