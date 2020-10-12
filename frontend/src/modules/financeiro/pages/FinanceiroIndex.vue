<template>
  <div>
    <div class="flex flex-wrap justify-start mt-1">
      <div class="w-8/12 p-1">
        <div class="w-full sm:w-full md:w-2/4 lg:w-2/4 xl:w-1/4 p-1">
          <Calendario></Calendario>
        </div>
      </div>
      <div class="ml-2">
        <router-link :to="{ name: 'financeiroadicionarconta' }">
          <button
            class="mr-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 mt-1"
          >
            Adicionar Conta
          </button>
        </router-link>
      </div>
    </div>

    <div class="flex">
      <div class="w-8/12 p-1">
        <CategoriaContasAPagar></CategoriaContasAPagar>
      </div>
      <div class="w-4/12 border-l">
        <FeedbackFinanceiro />
      </div>
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
