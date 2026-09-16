<template>
  <Tabs />
  <div class="flex flex-wrap justify-center items-center">
    <!-- Card de Horários -->
    <div class="w-full md:w-1/5 max-w-md p-4">
      <div class="card bg-base-100 shadow-xl rounded-lg">
        <div class="card-body">
          <h2 class="card-title justify-center text-xl font-semibold mb-4">
            Horários
          </h2>
          <div
            v-for="zone in timeZones"
            :key="zone.label"
            class="form-control mb-3"
          >
            <label class="label">
              <span class="label-text font-medium">{{ zone.label }}</span>
            </label>
            <p class="mt-2 text-center text-black text-2xl font-mono">
              {{ formatTime(zone.tz) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Card de Cotações -->
    <div class="w-full md:w-1/5 max-w-md p-4">
      <div class="card bg-base-100 shadow-xl rounded-lg">
        <div class="card-body">
          <h2 class="card-title justify-center text-xl font-semibold mb-3">
            Cotações
          </h2>

          <div class="form-control mb-1">
            <label class="label">
              <span class="label-text font-medium">Dólar</span>
            </label>
            <p class="mt-1 text-center text-black text-2xl font-mono">
              {{ formatCurrency(rates.usd) }}
            </p>
          </div>

          <div class="form-control mb-1">
            <label class="label">
              <span class="label-text font-medium">Euro</span>
            </label>
            <p class="mt-1 text-center text-black text-2xl font-mono">
              {{ formatCurrency(rates.eur) }}
            </p>
          </div>

          <div class="form-control mb-1">
            <label class="label">
              <span class="label-text font-medium">Ethereum</span>
            </label>
            <p class="mt-1 text-center text-black text-2xl font-mono">
              {{ formatCurrency(rates.eth) }}
            </p>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text font-medium">Bitcoin</span>
            </label>
            <p class="mt-1 text-center text-black text-2xl font-mono">
              {{ formatCurrency(rates.btc) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Calendário -->
    <div class="w-full xs:w-2/6 p-2 sm:w-full md:w-2/6">
      <Calendario />
    </div>
  </div>

  <div class="flex flex-wrap justify-center">
    <!-- Card Favoritos -->
    <div class="xs:w-1/3 p-2 sm:w-full md:w-1/3">
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body p-3">
          <h2 class="card-title justify-center text-md">Favoritos</h2>
          <div class="flex flex-wrap text-center">
            <div
              v-for="fav in favorites"
              :key="fav.url"
              class="p-2 rounded-lg bg-base-100 w-full cursor-pointer hover:bg-base-300 transition"
            >
              <a
                :href="fav.url"
                target="_blank"
                rel="noopener noreferrer"
                class="block"
              >
                <p class="font-semibold text-blue-600 hover:underline">
                  {{ fav.name }}
                </p>
                <p class="text-sm text-gray-600">{{ fav.description }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Conversores -->
    <div class="w-full md:w-2/8 p-4">
      <DolarConversor :usdRate="rates.usd" />
    </div>
    <div class="w-full md:w-2/8 p-4">
      <EuroConversor :eurRate="rates.eur" />
    </div>
  </div>

  <div class="flex justify-center">
    <div class="w-full mx-auto items-center align-middle">
      <Calculadora />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import EuroConversor from "../mods/dashbord/components/EuroConversor.vue";
import DolarConversor from "../mods/dashbord/components/DolarConversor.vue";
import Calendario from "../mods/dashbord/components/Calendario.vue";
import Calculadora from "../mods/dashbord/calculadora/Calculadora.vue";
import Tabs from "../mods/tickers/components/Tabs.vue";

// Timezones
const timeZones = [
  { label: "São Paulo", tz: "America/Sao_Paulo" },
  { label: "Portugal", tz: "Europe/Lisbon" },
  { label: "Japão", tz: "Asia/Tokyo" },
];

// Favoritos
const favorites = ref([
  {
    name: "TradingView Brasil",
    url: "https://br.tradingview.com/",
    description: "Gráficos e análise técnica para traders e investidores.",
  },
  {
    name: "XPI Investimentos",
    url: "https://www.xpi.com.br/plataformas/",
    description: "Plataformas completas para investimentos financeiros.",
  },
  {
    name: "Genial Investimentos",
    url: "https://www.genialinvestimentos.com.br/",
    description: "Investimentos, renda fixa, ações e muito mais.",
  },
  {
    name: "Nomad Global",
    url: "https://www.nomadglobal.com/investimentos",
    description: "Investimentos internacionais e globalização financeira.",
  },
]);

// Atualização de hora
const now = ref(new Date());
let interval: ReturnType<typeof setInterval>;

onMounted(() => {
  interval = setInterval(() => {
    now.value = new Date();
  }, 1000);
  fetchRates();
  setInterval(fetchRates, 30000); // Atualiza a cada 30s
});

onUnmounted(() => {
  clearInterval(interval);
});

function formatTime(tz: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(now.value);
}

const rates = ref({ usd: 0, eur: 0, eth: 0, btc: 0 });

async function fetchRates() {
  try {
    // Cotações BRL → USD e EUR (Frankfurter)
    const forexRes = await fetch(
      "https://api.frankfurter.app/latest?from=BRL&to=USD,EUR"
    );
    if (!forexRes.ok) throw new Error("Erro na API Frankfurter");
    const forexData = await forexRes.json();

    // Cotações de cripto (CoinGecko)
    const cryptoRes = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=brl"
    );
    if (!cryptoRes.ok) throw new Error("Erro na API CoinGecko");
    const cryptoData = await cryptoRes.json();

    const newRates = {
      usd: Number((1 / forexData.rates.USD).toFixed(2)), // 1 USD em BRL
      eur: Number((1 / forexData.rates.EUR).toFixed(2)), // 1 EUR em BRL
      eth: Number(cryptoData.ethereum?.brl ?? 0),
      btc: Number(cryptoData.bitcoin?.brl ?? 0),
    };

    rates.value = newRates;

    // Cache
    localStorage.setItem(
      "cachedRates",
      JSON.stringify({ timestamp: Date.now(), data: newRates })
    );
  } catch (error) {
    console.error("Erro ao buscar cotações:", error);
  }
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
</script>
