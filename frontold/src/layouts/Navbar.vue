<template>
  <div class="text-neutral rounded-xl w-full z-10 px-2 flex flex-wrap justify-between my-1 items-center mx-2">
    <div class="flex-1">
      <label for="my-drawer" class="btn btn-sm drawer-button cursor-pointer">
        <Icon icon="ic:sharp-menu" width="24" height="24"></Icon>
      </label>
      <slot name="title"></slot>
    </div>
    <div class="flex-none">
      <nav :class="'flex flex-wrap my-auto'">
        <router-link class="btn-sm mx-1 btn btn-outline btn-secondary " v-if="UseAcl.checkIncludeRoute(1)"
          :to="'/'">Home</router-link>
        <router-link class="btn-sm mx-1 btn btn-outline btn-secondary " :to="'/login'"
          v-if="UseAcl.checkIncludeRoute(2) && Auth.store.auth && !Auth.store.auth.token">Login</router-link>

        <router-link class="btn-sm mx-1 btn btn-outline btn-secondary " :to="'/cadastro'"
          v-if="UseAcl.checkIncludeRoute(3) && Auth.store.auth && !Auth.store.auth.token">Cadastro</router-link>
        <router-link class="btn-sm mx-1 btn btn-outline btn-secondary " :to="'/financeiro'"
          v-if="UseAcl.checkIncludeRoute(4) && Auth.store.auth.token">Financeiro
        </router-link>
        <router-link class="btn-sm mx-1 btn btn-outline btn-secondary " :to="'/contasapagar'" v-if="Auth.store.auth && Auth.store.auth.token">Contas a Pagar
    </router-link>
        <router-link class="btn-sm mx-1 btn btn-outline btn-secondary " :to="'/usuarios'"
          v-if="UseAcl.checkIncludeRoute(5)">Usuários
        </router-link>
        <div class="btn-sm mx-1 btn btn-primary" @click="logout()" v-if="Auth.store.auth.token">Sair
        </div>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from "vue";
import UseAcl from "../mods/acl/composables/UseAcl";
import Auth from "./../mods/auth/composables/Auth"
import router from "./../mods/rotas/index";

function logout() {
  Auth.Logout().then(() => {


    router.push("/");
  })
}

/* onBeforeMount(()=>{
  Auth.isLogged()
}) */
</script>../mods/auth/composables/Auth../mods/rotas/index../mods/auth/composables/Auth../mods/rotas/index