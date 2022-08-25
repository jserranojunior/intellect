<template>
  <div>
    <div class="context centered">
      <img src="../assets/logo.jpg" class="mx-auto object-cover h-48 w-96 mb-4"/>
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