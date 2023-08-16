<template>


  <div class=" flex flex-wrap ">
    <div class="btn btn-primary btn-sm w-full bg-yellow-600 border-green-400 text-white">
         CONTAS A PAGAR
        </div>
  <div v-for="categoria in Financial.store.categoriaContas.CategoriasContasAPagars" :key="categoria.id" class="w-full">
    <div class=" py-1" v-if="categoria.ContasAPagar[0]">
      <div class="bg-base-300 rounded-lg shadow-xl p-2" >
      <div class="text-lg font-semibold">{{ categoria.nome }}</div>
      <div class="mt-1">
      
        <div v-for="contas in categoria.ContasAPagar" :key="contas.ID" class="bg-base-200 p-2 rounded-lg shadow mb-1 flex">
          <div class="w-1/4 flex items-center" >
         
            <input
              type="checkbox"
              class="toggle toggle-sm toggle-primary"
              checked
              v-if="contas.ContasPagas && contas.ContasPagas.ID > 0"
              @click="Financial.deleteBillPayment(contas.ContasPagas.ID)"
            />
            <input
              type="checkbox"
              class="toggle toggle-sm toggle-secondary"
              v-else
              @click="Financial.makeBillPayment(contas.ID)"
            />
          </div>
          <div class="w-3/4 cursor-pointer" @click="openEditBillsToPay(contas.ID)">
            <div class="flex justify-between items-center">
              <div class="text-sm">{{ contas.favorecido }}</div>
              <div class="text-sm" v-if="contas.ValoresContasAPagar">{{ money(contas.ValoresContasAPagar.valor) }}</div>
              <div v-else>0</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-2  p-1  border-t pt-2">
        <div class="font-semibold">Total</div>
        <div class="font-semibold">{{ money(categoria.Soma) }}</div>
      </div>
    </div>
    </div>
  </div>


 
</div>


</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { onBeforeMount } from '@vue/runtime-core';

import {money} from "../../../helpers/filters/filters"
import Financial from "../composables/Financial"
import router from "../../rotas/index"


async function openEditBillsToPay(id: any) {
  Financial.store.mode = "edit"
   await Financial.getSetContasAPagar(id).then(() => {
    router.push("/financeiroaddconta")
  }); 
} 


</script>
