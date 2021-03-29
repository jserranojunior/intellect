<template>
  <div class="bg-gray-900 p-1">
    <div class="flex flex-wrap justify-between">
      <div class="w-full sm:w-full md:w-1/5 p-1">
        <Calendario></Calendario>
      </div>
      <div class="w-full sm:w-full md:w-1/2 text-right">
        <router-link to="/financeiro/adicionarconta">
          <button
            class="mr-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 mt-1"
          >
            Adicionar Conta
          </button>
        </router-link>
      </div>
    </div>

    <div class="flex flex-wrap">
      <hr class="border-t border-gray-800 w-full mb-1" />
      <div class="w-4/5 p-1 bg-gray-900">
        <CategoriaContasAPagar></CategoriaContasAPagar>
      </div>
      <div class="w-1/5 border-l">
        <FeedbackFinanceiro />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

// import AddEditContas from "../components/AddEditContas";
import CategoriaContasAPagar from "../components/CategoriaContasAPagar";
import FeedbackFinanceiro from "../components/FeedbackFinanceiro";
import Calendario from "../components/calendario/Calendario";
export default {
  setup() {},
  components: {
    CategoriaContasAPagar,
    // AddEditContas,
    FeedbackFinanceiro,
    Calendario
  }
};
</script>
