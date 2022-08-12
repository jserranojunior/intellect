<template>
  <div class="text-neutral rounded-xl w-full z-10">
    <div class="p-2 flex flex-wrap justify-between my-auto items-center mx-2">
      <label for="my-drawer" class="btn btn-sm drawer-button cursor-pointer">
        <svg viewBox="0 0 100 80" width="18" height="18" class="fill-current text-neutral-content">
          <rect width="100" height="20" />
          <rect y="30" width="100" height="20" />
          <rect y="60" width="100" height="20" />
        </svg></label>
      <div class>
        <nav :class="'flex flex-wrap my-auto'">
          <router-link class="btn-sm mx-1 btn btn-primary" :to="'/'">Home</router-link>
          <router-link class="btn-sm mx-1 btn btn-primary" :to="'/login'" v-if="auth && auth.auth && !auth.auth.token">Login</router-link>
                    <router-link class="btn-sm mx-1 btn btn-primary" :to="'/cadastro'" v-if="auth && auth.auth && !auth.auth.token">Cadastro</router-link>

          <router-link class="btn-sm mx-1 btn btn-primary" :to="'/financeiro'" v-if="auth && auth.auth.token">Financeiro
          </router-link>
          <div class="btn-sm mx-1 btn btn-secondary" @click="sair()" v-if="auth && auth.auth && auth.auth.token">Sair
          </div>
       
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, watch } from "@vue/runtime-core";
import useStore from "../helpers/stores/store"
let {auth, router} = useStore()
function redirectPageTo(url:string){ 
    console.log("Redirecionando")
    router.push({ path: url })              
  }
 function sair(){
      auth.Logout()
      redirectPageTo("/login")
  }
  watch(auth.fields,()=>{
    console.log("mudou")
  })
onBeforeMount(()=>{
  auth.isLogged()
})
</script>