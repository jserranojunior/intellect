<template>
  <div class="menu p-4 overflow-y-auto w-80 text-neutral-content border-r border-neutral bg-base-100">
    <router-link class="btn-sm mt-1 btn " :to="'/'">Home</router-link>
    <router-link class="btn-sm mt-1 btn " :to="'/login'"
      v-if="Auth.store.auth && !Auth.store.auth.token">Login</router-link>
    <router-link class="btn-sm mt-1 btn " :to="'/cadastro'"
      v-if="Auth.store.auth && !Auth.store.auth.token">Cadastro</router-link>
    <router-link class="btn-sm mt-1 btn " :to="'/financeiro'" v-if="Auth.store.auth && Auth.store.auth.token">Financeiro
    </router-link>
    <div class="btn-sm mt-1 btn btn-secondary" @click="Auth.Logout()" v-if="Auth.store.auth && Auth.store.auth.token">Sair
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "@vue/runtime-core";
import UseAcl from "../mods/acl/composables/UseAcl";
import Auth from "./../mods/auth/composables/Auth"

onBeforeMount(async () => {
  await Auth.isLogged().then(async () => {
    await UseAcl.fetchUserAclFromApi().then(() => {
      UseAcl.generateRoutesEnableWithUserAcls();
    })
  })
})
</script>
