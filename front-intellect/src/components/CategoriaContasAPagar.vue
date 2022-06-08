<template>
  <div class="flex">
    <div v-if="categoriaContas && categoriaContas.CategoriasContasAPagars" class="columns mt-1">
      <div
        class="card mb-2 bg-neutral border border-gray-600 "
        v-for="categoria in categoriaContas.CategoriasContasAPagars"
        :key="categoria.id"
      >
        <div class="card-body p-1 text-gray-50">
          <h2
            class="py-1 px-2 w-full card-title text-sm font-bold text-center rounded-lg text-gray-100"
            :style="{ backgroundColor: categoria.cor }"
          >{{ categoria.nome }}</h2>
          <div
            v-for="contas in categoria.ContasAPagar"
            :key="contas.ID"
            class="text-center cursor-pointer rounded-lg hover:bg-neutral-focus  bg-neutral w-full shadow flex flex-wrap border border-gray-700 p-1 mt-1"
          >
            <div class="w-1/3">
              <div class="flex">
                <div class="w-full text-left">
                  <div v-if="contas.ContasPagas && contas.ContasPagas.ID > 0" class="relative">
                    <label
                      for="checked"
                      class="cursor-pointer"
                      @click="deleteBillPayment(contas.ContasPagas.ID)"
                    >
                      <span>
                        <span class="block w-8 h-5 bg-blue-800 rounded-full shadow-inner"></span>
                        <span
                          class="absolute block w-3 h-3 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-blue-300 transform translate-x-full"
                        ></span>
                      </span>
                    </label>
                  </div>
                  <div v-else class="relative">
                    <label
                      for="unchecked"
                      class="cursor-pointer"
                      @click="makeBillPayment(contas.ID)"
                    >
                      <span>
                        <span class="block w-8 h-5 bg-red-800 rounded-full shadow-inner"></span>
                        <span
                          class="absolute block w-3 h-3 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-red-300"
                        ></span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-2/3" @click="openEditBillsToPay(contas.ID)">
              <div class="w-1/2 pointer text-sm">{{ contas.favorecido }}</div>
              <div
                v-if="contas.ValoresContasAPagar"
                class="w-1/2 text-right text-sm"
              >{{ money(contas.ValoresContasAPagar.valor) }}</div>
              <div v-else class="w-1/2">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { money } from "@/helpers/filters/filters";
export default defineComponent({
  setup() {
    const { fields, auth, Logout, ola } = useAuth();


    const router = useRouter()
    const {
      categoriaContas,
      getCategoriaContas,
      makeBillPayment,
      deleteBillPayment,
      editBillsToPay,

    } = useFinancial();

    async function openEditBillsToPay(id) {
      await editBillsToPay(id).then(() => {
        router.push("/financeiro/editarconta");
      });
    }

    onMounted(() => {
      getCategoriaContas();
    });

    return {
      categoriaContas,

      money,
      makeBillPayment,
      deleteBillPayment,
      openEditBillsToPay,

    };
  },
});
</script>
<style scoped>
.columns {
  column-width: 210px;
  column-gap: 5px;
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
</style> 