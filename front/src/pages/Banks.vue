<template>
  <Tabs />
  <div class="flex justify-center flex-wrap">
    <addNewBank />
    <AddNewTick />
  </div>
  <BancoTabela />
</template>
<script setup lang="ts">
import addNewBank from "../mods/tickers/addNewBank.vue";
import AddNewTick from "../mods/tickers/addNewTick.vue";
import Tabs from "../mods/tickers/components/Tabs.vue";
import BancoTabela from "./BancoTabela.vue";
</script>
