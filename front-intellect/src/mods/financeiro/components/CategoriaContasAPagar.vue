<template>

  <div class="flex flex-wrap">


    <div class=" card  shadow-xl w-1/5 p-1" v-for="categoria in financeiro.categoriaContas.CategoriasContasAPagars"
      :key="categoria.id">
      <div class="card-body  p-1 
              border-gray-700 bg-base-300">
        <h2 class="card-title"> {{ categoria.nome }}</h2>
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
      </div>
    </div>

  </div>

</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { onBeforeMount } from '@vue/runtime-core';
import useStore from "../../../helpers/stores/store"
let {financeiro, router} = useStore()



const counts = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


function money(value: any) {
  return value;
}
async function openEditBillsToPay(id: any) {
 /*  await financeiro.editBillsToPay(id).then(() => {
    router.push("/financeiro/editarconta");
  }); */
} 

onBeforeMount(async() => {
  await   financeiro.getSetCategoriasContas().then(()=>{
    console.log(financeiro.categoriaContas)
  });
   /* financeiro.setCategoriaTest(); */
});
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