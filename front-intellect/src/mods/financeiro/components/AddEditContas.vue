<template>
  <div class="flex justify-center mx-4">
    <div class="w-full sm:w-1/2 md:w-1/3 painel-tail my-4">
      <div
        v-if="financeiro.err"
        class="my-1 block text-sm text-gray-300 text-center bg-yellow-800 border border-yellow-900 h-8 items-center p-2 rounded-lg"
        role="alert"
      >{{ financeiro.err }}</div>
      <div class="p-2 rounded-sm shadow-sm bg-gray-800">
        <div class="flex flex-wrap">
          <!-- <label class="pb-2 text-gray-700 font-semibold">Favorecido</label> -->
          <input            
            type="text"
            class="form-tail w-full"
            name="favorecido"
            placeholder="Favorecido"
            v-model="financeiro.ContaAPagar.favorecido"
          />
        </div>
        <div class="mt-1 flex flex-wrap pt-2">
          <!-- <label class="pb-2 text-gray-700 font-semibold"  >Descrição</label> -->
          <input
            type="text"
            class="form-tail"
            name="descricao"
            placeholder="Descrição"
                        v-model="financeiro.ContaAPagar.descricao"

          />
        </div>

        <div class="mt-1 flex flex-wrap pt-2">
          <label class="pb-2 text-gray-700 font-semibold">Valor</label>

          <input
            v-model="financeiro.ContaAPagar.ValoresContasAPagar.valor"
            type="number"
            class="form-tail"
            name="valor"
            required
            placeholder="Valor"
          />
        </div>

        <div class="mt-1 flex flex-wrap pt-2">
          <label
            for="inicio_data_pagamento"
            class="pb-2 text-gray-700 font-semibold"
          >Inicio Pagamento</label>

          <input
            v-model="financeiro.ContaAPagar.inicio_data_pagamento"
            type="date"
            class="form-tail"
            placeholder="dd/mm/aaaa"
            required
          />
        </div>

        <div class="mt-1 flex flex-wrap pt-2">
          <label for="fim_data_pagamento" class="pb-2 text-gray-700 font-semibold">Fim Pagamento</label>
          <input
            v-model="financeiro.ContaAPagar.fim_data_pagamento"
            type="date"
            class="form-tail"
            placeholder="dd/mm/aaaa"
          />
        </div>
        <div class="mt-1 flex flex-wrap pt-2">
          <select
            v-model="financeiro.ContaAPagar.categorias_contas_a_pagar_id"
            name="categorias_contas_a_pagar_id"
            required
            class="form-tail"
          >
            <option value="1">Essenciais</option>
            <option value="2">Compras</option>
            <option value="3">Urgencias</option>

            <option value="4">Lazer</option>
            <option value="5">Transporte</option>
            <option value="6">Alimentação</option>
            <option value="7">Estudos</option>
            <option value="8">Avulsos</option>
            <option value="9">Empresa</option>
          </select>
        </div>

        <div class="mt-1 flex flex-wrap pt-2">
          <select v-model="financeiro.ContaAPagar.tipo_conta" name="tipo_conta" required class="form-tail">
            <option disabled selected value="Tipo de Conta">Tipo de Conta</option>
            <option value="Extra">Extra</option>
            <option value="Fixa">Fixa</option>
            <option value="Parcelada">Parcelada</option>
          </select>
        </div>

        <div class="mt-1 flex flex-wrap pt-2">
          <select
            v-model="financeiro.ContaAPagar.forma_pagamento"
            name="forma_pagamento"
            required
            class="form-tail"
          >
            <option disabled selected value="Forma de Pagamento">Forma de Pagamento</option>
            <option value="Cartão">Cartão</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Débito">Débito</option>
            <option value="Débito Automatico">Débito Automatico</option>
            <option value="Terceiro">Terceiro</option>
          </select>
        </div>

        <div class="mt-2 flex flex-wrap justify-between">
          <div class="w-1/2">
            <router-link to="/financeiro">
              <button class="btn-warning-tail-rounded">Voltar</button>
            </router-link>
          </div>
          <div class="w-1/2 text-right">
            <button
              v-if="financeiro.mode === 'add'"
              class="btn-primary-tail-rounded"
              @click="financeiro.storeBillsToPay()"
            >Cadastrar</button>
            <button v-else class="btn-primary-tail-rounded" @click="financeiro.updateBillsToPay()">Atualizar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { onMounted } from "vue";
        import useStore from "../../../helpers/stores/store"
import { onBeforeMount } from '@vue/runtime-core';
        let {router, financeiro} = useStore()



    function setMode() {
      financeiro.setEditAddMode(financeiro.mode).then((res) => {
        if (res === "add") {
          financeiro.setEditAddMode("add");
        } else if (res === "edit" && !financeiro.ContaAPagar.ID) {
          router.push("/financeiro");
        }
      });
    }
    onBeforeMount(() => {
      setMode();
    });
   
  
  // watch: {
  //   dataAtualFinanceiro: {
  //     handler() {
  //       this.setData();
  //     },
  //     deep: true,
  //   },
  //   editarfinanceiro.ContaAPagar: {
  //     handler() {
  //       this.setFields();
  //     },
  //     deep: true,
  //   },

  //   categorias_contas_a_pagar_id: function() {
  //     this.financeiro.ContaAPagar.categorias_contas_a_pagar_id = this.categorias_contas_a_pagar_id;
  //   },
  // },
  // computed: {
  //   ...mapState({
  //     dataAtualFinanceiro: (state) => state.Financeiro.dataSelecionada,
  //     editarfinanceiro.ContaAPagar: (state) => state.Financeiro.editarfinanceiro.ContaAPagar,
  //   }),
  // },

  // directives: {
  // mask: AwesomeMask,
  // },

</script>
