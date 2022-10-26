<template>
  <div class="flex flex-wrap bg-neutral">
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-full p-1 border-b border-gray-700">
      <div class="shadow-md">
                <div class="btn btn-primary btn-sm w-full bg-blue-500 border-blue-400 text-white">

         TOTAIS
        </div>
        <div>
          <div v-if="financeiro.categoriaContas && financeiro.categoriaContas.SomaFormaPagamento">
            <div
              v-for="(index, formaPagamento) in financeiro.categoriaContas.SomaFormaPagamento"
              :key="index"
              class="painel-body p-1 pb-2"
            >
              <div class="flex flex-wrap">
                <div class="w-2/3 text-sm">{{ formaPagamento }}</div>
                <div v-if="formaPagamento" class="w-1/3 text-right text-sm">{{ money(index) }}</div>
                <div v-else class="w-1/4">{{ money(0) }}</div>
              </div>
            </div>
          </div>
        </div>

      
          <div class="flex justify-center px-1 border-t pt-2 pb-2">
            <div class="w-1/3">Total</div>
            <div
              v-if="financeiro.categoriaContas && financeiro.categoriaContas.TotalCategories"
              class="w-1/3 text-right text-sm font-bold text-blue-300"
            >{{ money(financeiro.categoriaContas.TotalCategories) }}</div>
           
        </div>
      </div>

    </div>

    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-full p-1">
      <div class="painel mt-1 shadow-md text-white">
        <div class="btn btn-primary btn-sm w-full bg-green-500 border-green-400 text-white">
          CAIXA / FREELAS
        </div>
        <div class="painel-body p-1">
          <div class="flex flex-wrap justify-between text-center mt-1 p-1 text-sm">
            <div>Ls Star</div>
            <div>0,00</div>
          </div>
          <div class="flex flex-wrap justify-between text-center mt-1 p-1 text-sm">
            <div>Acolher</div>
            <div>0,00</div>
          </div>
        </div>
        <div class="flex justify-center px-1 border-t pt-2 pb-2">
          <div class="w-1/3">Total</div>
          <div class="w-1/3 text-right text-sm font-bold text-blue-300">{{ money(0) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { money } from "../../../helpers/filters/filters";
import useStore from "../../../helpers/stores/store"

let {financeiro, router} = useStore()
</script>
