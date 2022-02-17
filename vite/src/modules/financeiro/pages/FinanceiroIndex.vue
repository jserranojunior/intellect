<template>
  <div class="flex flex-wrap justify-between rounded-xl bg-neutral p-1">
    <div class="w-full sm:w-1/2 md:w-1/5 lg:w-1/5 p-1">
      <Calendario></Calendario>
    </div>
    <div class="w-full sm:w-1/4 md:w-1/4 text-right p-1">
      <button class="btn btn-sm btn-outline">
        <router-link to="/financeiro/adicionarconta">Adicionar Conta</router-link>
      </button>
    </div>
  </div>

  <div class="flex flex-wrap mt-1">
    <hr class="border-t border-gray-600 bg-neutral w-full mb-1" />
    <div class="w-full sm:w-full md:w-4/5 lg:w-4/5 bg-neutral p-2 rounded-xl">
      <CategoriaContasAPagar></CategoriaContasAPagar>
    </div>
    <div class="w-full sm:w-full md:w-1/5 lg:w-1/5 border-l border-gray-600">
      <FeedbackFinanceiro />
    </div>
  </div>
</template>

<script>
/* eslint-disable */

// import AddEditContas from "../components/AddEditContas";
import CategoriaContasAPagar from "../components/CategoriaContasAPagar.vue";
import FeedbackFinanceiro from "../components/FeedbackFinanceiro.vue";
import Calendario from "../components/calendario/Calendario.vue";
export default {
  setup() { },
  components: {
    CategoriaContasAPagar,
    // AddEditContas,
    FeedbackFinanceiro,
    Calendario,
  },
};
</script>
