<template>

    <div class="text-neutral rounded-xl w-full z-10 px-2 flex flex-wrap justify-between my-1 items-center mx-2">
      <div class="flex-1">
      <label for="my-drawer" class="btn btn-sm drawer-button cursor-pointer">
        <svg viewBox="0 0 100 80" width="18" height="18" class="fill-current text-neutral-content">
          <rect width="100" height="20" />
          <rect y="30" width="100" height="20" />
          <rect y="60" width="100" height="20" />
        </svg></label>
         <slot name="title"></slot>
      </div>
      <div class="flex-none">
        <nav :class="'flex flex-wrap my-auto'">
          <router-link class="btn-sm mx-1 btn btn-outline btn-secondary " v-if="acl.checkIfExisteRoutes(1)" :to="'/'">Home</router-link>
                    <router-link class="btn-sm mx-1 btn btn-outline btn-secondary " :to="'/login'" v-if="acl.checkIfExisteRoutes(2) && auth && auth.auth && !auth.auth.token">Login</router-link>

          <router-link class="btn-sm mx-1 btn btn-outline btn-secondary "  :to="'/cadastro'" v-if="acl.checkIfExisteRoutes(3) && auth && auth.auth && !auth.auth.token">Cadastro</router-link>
          <router-link class="btn-sm mx-1 btn btn-outline btn-secondary " :to="'/financeiro'" v-if="acl.checkIfExisteRoutes(4) && auth && auth.auth.token">Financeiro
          </router-link>
          <router-link class="btn-sm mx-1 btn btn-outline btn-secondary " :to="'/usuarios'" v-if="acl.checkIfExisteRoutes(5)">Usuários
          </router-link>
          <div class="btn-sm mx-1 btn btn-primary"  @click="sair()" v-if="auth && auth.auth && auth.auth.token">Sair
          </div>       
        </nav>
      </div>
    </div>
 
</template>

<script lang="ts" setup>
import { onBeforeMount, watch } from "@vue/runtime-core";
import useStore from "../helpers/stores/store"


let {auth, router, acl} = useStore()
function redirectPageTo(url:string){ 
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