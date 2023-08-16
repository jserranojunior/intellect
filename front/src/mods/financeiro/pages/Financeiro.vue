<template>
  <div>
    <div class="flex flex-wrap justify-between rounded-xl bg-neutral p-1">
      <div class="w-full sm:w-1/2 md:w-1/5 lg:w-1/5 p-1">
        <Calendario />
      </div>
      <div class="w-full sm:w-1/4 md:w-1/4 text-right p-1">
        <button class="btn btn-accent btn-xs" @click="openModalAddBillsToPay()">
          Nova conta
        </button>
      </div>
    </div>

    <div class="flex flex-wrap mt-1 ">
      <hr class="border-t border-gray-600  w-full mb-1"/>
      <div class="w-full sm:w-full md:w-1/6  p-2 rounded-xl">
        <CategoriaContasAPagar />
      </div>
      <div class="w-full sm:w-full md:w-1/6  border-l border-gray-600 ">
        <FeedbackFinanceiro />
      </div>
      <div class="w-full sm:w-full md:w-1/6  border-l border-gray-600 ">
        <Investimentos />
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import Calendario from "../../../components/Calendario.vue"
import CategoriaContasAPagar from "../../../mods/financeiro//components/CategoriaContasAPagar.vue"
import FeedbackFinanceiro from "../../../mods/financeiro//components/FeedbackFinanceiro.vue"
import Financial from "../../../mods/financeiro/composables/Financial"
import Investimentos from "../components/Investimentos.vue"

import useStore from "../../../helpers/stores/store"
import { onBeforeMount } from "vue";
let { router } = useStore()

onBeforeMount(async () => {
  await Financial.getSetCategoriasContas()

});

function openModalAddBillsToPay() {
  Financial.store.mode = "add"
  router.push("/financeiroaddconta")
}
</script>