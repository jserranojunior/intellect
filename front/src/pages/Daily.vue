<template>
  <Tabs />
  <div class="flex justify-end m-4">
    <div
      class="text-right btn btn-primary"
      v-if="!openNewCompra"
      @click="toggleNewCompra"
    >
      Registrar Compra
    </div>
    <div
      class="text-right btn btn-warning"
      v-if="openNewCompra"
      @click="toggleNewCompra"
    >
      Fechar
    </div>
  </div>
  <div v-if="!openNewCompra">
    <Resumo />
  </div>

  <div v-if="openNewCompra">
    <addNewDailyAction />
  </div>
  <div v-if="!openNewCompra">
    <Performance />
  </div>
  <div v-if="!openNewCompra">
    <RelatorioDiario />
  </div>
  <div v-if="!openNewCompra">
    <ResultadoMensal />
  </div>
</template>
<script setup lang="ts">
import Tabs from "../mods/tickers/components/Tabs.vue";
import addNewDailyAction from "../mods/tickers/addNewDailyAction.vue";
import Performance from "../mods/tickers/Performance.vue";
import RelatorioDiario from "../mods/tickers/RelatorioDiario.vue";
import { ref } from "vue";
import ResultadoMensal from "../mods/tickers/ResultadoMensal.vue";
import Resumo from "../mods/tickers/Resumo.vue";
const openNewCompra = ref(false);

function toggleNewCompra() {
  openNewCompra.value = !openNewCompra.value;
}
</script>
