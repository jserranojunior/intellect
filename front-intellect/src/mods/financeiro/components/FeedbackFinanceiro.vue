<template>
  <div class="flex flex-wrap bg-neutral">
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-full p-1">
      <div class="shadow-md">
        <div>
          <p class="painel-title text-sm">TOTAIS</p>
        </div>
        <div>
          <div v-if="categoriaContas && categoriaContas.SomaFormaPagamento">
            <div
              v-for="(index, formaPagamento) in categoriaContas.SomaFormaPagamento"
              :key="index"
              class="painel-body p-1"
            >
              <div class="flex flex-wrap">
                <div class="w-2/3">{{ formaPagamento }}</div>
                <div v-if="formaPagamento" class="w-1/3 text-right text-sm">{{ money(index) }}</div>
                <div v-else class="w-1/4">{{ money("0") }}</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="flex justify-between">
            <div>Total</div>
            <div
              v-if="categoriaContas && categoriaContas.TotalCategories"
              class="text-right text-sm"
            >{{ money(categoriaContas.TotalCategories) }}</div>
          </div>
        </div>
      </div>
      <!-- <div class="painel mt-1 shadow-md text-white">
        <div class="painel-header text-center p-1 rounded-lg text-white bg-red-500">
          
        </div>
        
        <div class="painel-footer flex border-t mt-1 p-1">

        </div>
      </div>-->
    </div>

    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-full p-1">
      <div class="painel mt-1 shadow-md text-white">
        <div class="painel-header text-center p-1 rounded-lg text-white bg-green-500">
          <p class="painel-title">CAIXA / FREELAS</p>
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
        <div class="painel-footer flex text-center justify-between border-t mt-1 p-2 text-sm">
          <div class="w-1/3">Total</div>
          <div class="w-1/3">{{ money("0") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { money } from "@/helpers/filters/filters";

export default {
  setup() {
    const { categoriaContas } = useFinancial();
    return { money, categoriaContas };
  },
};
</script>
