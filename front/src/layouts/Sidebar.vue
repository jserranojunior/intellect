<template>
  <div class="menu p-4 overflow-y-auto w-80 text-neutral-content border-r border-neutral bg-base-100">
          <router-link class="btn-sm mt-1 btn " :to="'/'">Home</router-link>
          <router-link class="btn-sm mt-1 btn " :to="'/login'" v-if="auth && auth.auth && !auth.auth.token">Login</router-link>
          <router-link class="btn-sm mt-1 btn " :to="'/cadastro'" v-if="auth && auth.auth && !auth.auth.token">Cadastro</router-link>
          <router-link class="btn-sm mt-1 btn " :to="'/financeiro'" v-if="auth && auth.auth.token">Financeiro
          </router-link>
          <div class="btn-sm mt-1 btn btn-secondary" @click="sair()" v-if="auth && auth.auth && auth.auth.token">Sair
          </div> 
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, watch } from "@vue/runtime-core";
import useStore from "../helpers/stores/store"
let {auth, router,acl} = useStore()
function redirectPageTo(url:string){ 
    console.log("Redirecionando")
    router.push({ path: url })              
  }
 function sair(){
      auth.Logout()
      acl.clearRoutesEnableWithUserAcls()
      redirectPageTo("/login")
  }

  

onBeforeMount(async ()=>{
  await auth.isLogged().then(async()=>{
    await acl.getUserAcl().then(() => {
          acl.generateRoutesEnableWithUserAcls();
        })
  })
})
</script>
