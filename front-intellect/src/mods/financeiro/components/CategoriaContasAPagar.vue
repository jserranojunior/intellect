<template>

  <div class="gap-2 columns-3 lg:columns-4 ">


    <div class=" card  shadow-xl w-full p-1" v-for="categoria in financeiro.categoriaContas.CategoriasContasAPagars"
      :key="categoria.id">
      <div class="card-body border rounded-lg p-1 
              border-gray-700 bg-base-300">
                        <div class="btn btn-outline btn-sm w-full ">
 {{ categoria.nome }}</div>
        <div class="
              text-center
              cursor-pointer
              rounded-lg
              hover:bg-neutral-focus
          bg-base-200
              w-full
              shadow
              flex flex-wrap
              align-middle	
              p-1 py-0
              m-0" v-for="contas in categoria.ContasAPagar" :key="contas.ID">
          <div class="w-1/3">
            <div class="flex">
              <div class="w-full text-left">
                <input type="checkbox " class="toggle toggle-sm toggle-primary"
                  v-if="contas.ContasPagas && contas.ContasPagas.ID > 0"
                  @click="financeiro.deleteBillPayment(contas.ContasPagas.ID)" />
                <input type="checkbox " class="toggle toggle-sm toggle-secondary" v-else
                  @click="financeiro.makeBillPayment(contas.ID)" />
              </div>
            </div>
          </div>
          <div class="w-2/3" @click="openEditBillsToPay(contas.ID)">
            <div class="flex">
              <div class="w-1/2 pointer text-sm">
                <span class=" inline-block align-middle">

{{ contas.favorecido }} 
                </span>
                </div>
              <div class="w-1/2 text-right text-sm" v-if="contas.ValoresContasAPagar">{{
                  money(contas.ValoresContasAPagar.valor)
              }}</div>
              <div v-else class="w-1/2">0</div>
            </div>
          </div>
         
        </div> 
        <div class="flex flex-wrap justify-between" >
        <div clas="w-1/2">Total</div>
                <div clas="w-1/2">{{money(categoria.Soma)}}</div>
              

        </div>
      </div>
    </div>
  
  </div>

</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { onBeforeMount } from '@vue/runtime-core';
import useStore from "../../../helpers/stores/store"
import {money} from "../../../helpers/filters/filters"
let {financeiro, router} = useStore()



const counts = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])



async function openEditBillsToPay(id: any) {
 /*  await financeiro.editBillsToPay(id).then(() => {
    router.push("/financeiro/editarconta");
  }); */
} 


</script>
<!-- <style scoped>
.columns {
  column-width: 420px;
  column-gap: 10px;
}

div.columns div {
  display: inline-block;
}

.columns {
  column-width: 210px;
  column-gap: 5px;
}

div.columns div {
  display: inline-block;
}
</style>  -->