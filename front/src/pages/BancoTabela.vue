<template>
  <div class="p-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    <div
      v-for="(banco, index) in bancos"
      :key="index"
      class="card bg-base-200 rounded-2xl p-1 shadow-lg"
    >
      <div class="bg-base-100 p-4 rounded-2xl">
        <h3 class="text-xl font-bold text-primary mb-2 flex items-center gap-2">
          <!-- Ícone do banco -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 10h18M4 6h16M5 20h14M6 14h12"
            />
          </svg>
          {{ banco.nome }}
        </h3>

        <p class="text-sm text-gray-500 mb-1">
          <strong>Data de Abertura:</strong> {{ formatarData(banco.data) }}
        </p>
        <p class="text-sm text-gray-500 mb-3">
          <strong>Informações:</strong> {{ banco.info }}
        </p>

        <div class="mt-2">
          <p class="text-sm font-semibold mb-1 text-gray-600">Ticks:</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tick in banco.ticks"
              :key="tick"
              class="badge badge-outline"
            >
              {{ tick }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Banco {
  nome: string;
  data: string;
  info: string;
  ticks: string[];
}

const bancos = ref<Banco[]>([
  {
    nome: "Banco do Brasil",
    data: "2023-04-10",
    info: "Conta PJ",
    ticks: ["BBAS3", "PETR4"],
  },
  {
    nome: "Caixa Econômica",
    data: "2022-09-15",
    info: "Poupança",
    ticks: ["ITUB4"],
  },
  {
    nome: "Nubank",
    data: "2021-02-01",
    info: "Conta Corrente",
    ticks: ["NU", "VALE3", "B3SA3"],
  },
]);

function formatarData(dataISO: string): string {
  return new Date(dataISO).toLocaleDateString("pt-BR");
}
</script>
