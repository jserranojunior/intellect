<template>
  <div class="flex justify-center mx-4">
    <div class="w-full sm:w-1/2 md:w-1/3 painel-tail my-4">
      <div
        v-if="err"
        class="my-1 block text-sm text-gray-300 text-center bg-yellow-800 border border-yellow-900 h-8 items-center p-2 rounded-lg"
        role="alert"
      >
        {{ err }}
      </div>
      <div class="p-2 rounded-sm shadow-sm bg-gray-800">
        <div class="flex flex-wrap">
          <!-- <label class="pb-2 text-gray-700 font-semibold">Favorecido</label> -->
          <input
            v-model="ContaAPagar.favorecido"
            type="text"
            class="form-tail w-full"
            name="favorecido"
            required
            placeholder="Favorecido"
          />
        </div>
        <div class="mt-1 flex flex-wrap pt-2">
          <!-- <label class="pb-2 text-gray-700 font-semibold"  >Descrição</label> -->
          <input
            v-model="ContaAPagar.descricao"
            type="text"
            class="form-tail"
            name="descricao"
            placeholder="Descrição"
          />
        </div>

        <div class="mt-1 flex flex-wrap pt-2">
          <label class="pb-2 text-gray-700 font-semibold">Valor</label>

          <input
            v-model="ContaAPagar.ValoresContasAPagar.valor"
            type="number"
            class="form-tail"
            name="valor"
            required
            placeholder="Valor"
          />
        </div>

        <div class="mt-1 flex flex-wrap pt-2">
          <label for="inicio_data_pagamento" class="pb-2 text-gray-700 font-semibold"
            >Inicio Pagamento</label
          >

          <input
            v-model="ContaAPagar.inicio_data_pagamento"
            type="date"
            class="form-tail"
            placeholder="dd/mm/aaaa"
            required
          />
        </div>

        <div class="mt-1 flex flex-wrap pt-2">
          <label for="fim_data_pagamento" class="pb-2 text-gray-700 font-semibold"
            >Fim Pagamento</label
          >
          <input
            v-model="ContaAPagar.fim_data_pagamento"
            type="date"
            class="form-tail"
            placeholder="dd/mm/aaaa"
          />
        </div>
        <div class="mt-1 flex flex-wrap pt-2">
          <select
            v-model="ContaAPagar.categorias_contas_a_pagar_id"
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
          <select
            v-model="ContaAPagar.tipo_conta"
            name="tipo_conta"
            required
            class="form-tail"
          >
            <option disabled selected value="Tipo de Conta">Tipo de Conta</option>
            <option value="Extra">Extra</option>
            <option value="Fixa">Fixa</option>
            <option value="Parcelada">Parcelada</option>
          </select>
        </div>

        <div class="mt-1 flex flex-wrap pt-2">
          <select
            v-model="ContaAPagar.forma_pagamento"
            name="forma_pagamento"
            required
            class="form-tail"
          >
            <option disabled selected value="Forma de Pagamento">
              Forma de Pagamento
            </option>
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
              v-if="mode === 'add'"
              class="btn-primary-tail-rounded"
              @click="storeBillsToPay()"
            >
              Cadastrar
            </button>
            <button v-else class="btn-primary-tail-rounded" @click="updateBillsToPay()">
              Atualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, inject, watch } from "vue";
import router from "../../../router/index";

// import { datePtBrToUs, dateUsToPtBr } from "../../../helpers/dates/helpersDates";

// import AwesomeMask from "awesome-mask";
export default {
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const useFinancial = inject("financial");
    const {
      storeBillsToPay,
      setEditAddMode,
      addBillsToPay,
      updateBillsToPay,
      ContaAPagar,
      err,
    } = useFinancial;

    function setMode() {
      setEditAddMode(props.mode).then((res) => {
        if (res === "add") {
          addBillsToPay();
        } else if (res === "edit" && !ContaAPagar.value.ID) {
          router.push("/financeiro");
        }
      });
    }
    onMounted(() => {
      setMode();
    });

    // watch(props.mode, () => {
    //   setMode();
    // });

    return {
      storeBillsToPay,

      updateBillsToPay,
      ContaAPagar,
      err,
    };
  },
  // watch: {
  //   dataAtualFinanceiro: {
  //     handler() {
  //       this.setData();
  //     },
  //     deep: true,
  //   },
  //   editarContaAPagar: {
  //     handler() {
  //       this.setFields();
  //     },
  //     deep: true,
  //   },

  //   categorias_contas_a_pagar_id: function() {
  //     this.ContaAPagar.categorias_contas_a_pagar_id = this.categorias_contas_a_pagar_id;
  //   },
  // },
  // computed: {
  //   ...mapState({
  //     dataAtualFinanceiro: (state) => state.Financeiro.dataSelecionada,
  //     editarContaAPagar: (state) => state.Financeiro.editarContaAPagar,
  //   }),
  // },

  // directives: {
  // mask: AwesomeMask,
  // },
};
</script>
