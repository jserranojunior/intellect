<template>
  <div>
    <div class="flex flex-wrap justify-between rounded-xl bg-neutral p-1">
      <div class="w-full sm:w-1/2 md:w-1/5 lg:w-1/5 p-1">
        <!-- <Calendario /> -->
      </div>
      <div class="w-full sm:w-1/4 md:w-1/4 text-right p-1">
        <button class="btn btn-accent btn-xs" @click="openModalAddBillsToPay()">
            Nova conta
        </button>
      </div>
    </div>

    <div class="flex flex-wrap mt-1">
      <hr class="border-t border-gray-600 bg-neutral w-full mb-1" />
      <div class="w-full sm:w-full  bg-neutral p-2 rounded-xl">
         <CategoriaContasAPagar />
     </div>
      <!-- <div class="w-full sm:w-full md:w-1/5 lg:w-1/5 border-l border-gray-600">
      <FeedbackFinanceiro />
    </div> -->
    </div>
  </div>
</template>

        <!-- <router-link to="/financeiro/adicionarconta">Adicionar Conta</router-link> -->
        <script lang="ts" setup>
        import CategoriaContasAPagar from "../mods/financeiro//components/CategoriaContasAPagar.vue"
        import useStore from "../helpers/stores/store"
        let {router} = useStore()
      

        function openModalAddBillsToPay(){
          router.push("financeiroaddconta")
        }
        </script>