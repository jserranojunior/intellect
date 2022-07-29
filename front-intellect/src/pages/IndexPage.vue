<template>
  <div class="">
    <div class="context centered">
      <h1>{{ msg }}</h1>
    </div>
    <efectCircles></efectCircles>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import efectCircles from "../components/efectCircles.vue"

const msg = ref(`Bem vindo ao futuro da organização financeira!`);
</script >