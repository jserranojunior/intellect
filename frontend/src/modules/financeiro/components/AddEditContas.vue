<template>
  <div>
    <div class="flex-col flex">
      <!-- <label class="pb-2 text-gray-700 font-semibold">Favorecido</label> -->
      <input
        type="text"
        class="form-tail w-full"
        name="favorecido"
        v-model="fields.favorecido"
        required
        placeholder="Favorecido"
      />
    </div>
    <div class="flex-col flex pt-2">
      <!-- <label class="pb-2 text-gray-700 font-semibold"  >Descrição</label> -->
      <input
        type="text"
        class="form-tail"
        name="descricao"
        v-model="fields.descricao"
        placeholder="Descrição"
      />
    </div>

    <div class="flex-col flex pt-2">
      <!-- <label class="pb-2 text-gray-700 font-semibold">Valor</label> -->
      <input
        type="text"
        class="form-tail"
        v-mask="'money'"
        name="valor"
        v-model="fields.valor"
        required
        placeholder="Valor"
      />
    </div>

    <div class="flex-col flex pt-2">
      <label for="inicio_data_pagamento" class="pb-2 text-gray-700 font-semibold">Inicio Pagamento</label>

      <input
        type="text"
        class="form-tail"
        v-mask="'99/99/9999'"
        placeholder="dd/mm/aaaa"
        v-model="fields.inicio_data_pagamento"
        required
      />
    </div>

    <div class="flex-col flex pt-2">
      <label for="fim_data_pagamento" class="pb-2 text-gray-700 font-semibold">Fim Pagamento</label>
      <input
        type="text"
        class="form-tail"
        v-mask="'99/99/9999'"
        placeholder="dd/mm/aaaa"
        v-model="fields.fim_data_pagamento"
      />
    </div>
    <div class="flex-col flex pt-2">
      <select
        name="categorias_contas_a_pagar_id"
        id
        v-model="fields.categorias_contas_a_pagar_id"
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
      </select>
    </div>

    <div class="flex-col flex pt-2">
      <select name="tipo_conta" v-model="fields.tipo_conta" required class="form-tail">
        <option disabled selected value="Tipo de Conta">Tipo de Conta</option>
        <option value="Extra">Extra</option>
        <option value="Fixa">Fixa</option>
        <option value="Parcelada">Parcelada</option>
      </select>
    </div>

    <div class="flex-col flex pt-2">
      <select name="forma_pagamento" v-model="fields.forma_pagamento" required class="form-tail">
        <option disabled selected value="Forma de Pagamento">Forma de Pagamento</option>
        <option value="Cartão">Cartão</option>
        <option value="Dinheiro">Dinheiro</option>
        <option value="Débito">Débito</option>
        <option value="Débito Automatico">Débito Automatico</option>
        <option value="Terceiro">Terceiro</option>
      </select>
    </div>

    <div class="mt-1">
      <div
        v-if="!modoEdicao"
        class="btn-primary-tail-rounded"
        data-dismiss="modal"
        @click="cadastrar()"
      >Cadastrar</div>
      <div v-else class="cursor-pointer btn-primary-tail" data-dismiss="modal">Atualizar</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState, mapActions } from "vuex";
import AwesomeMask from "awesome-mask";
import moment from "moment";
export default {
  name: "AddEditContas",
  data() {
    return {
      fields: {},
      errors: {},
      loaded: true,
      minhadata: "",

      modoEdicao: false,
    };
  },
  methods: {
    ...mapActions(["ActionAddContasAPagar"]),

    cadastrar() {
      this.ActionAddContasAPagar(this.fields);
    },
  },
  beforeMount() {
    // this.fields.categorias_contas_a_pagar_id = 1;
    // this.fields.tipo_conta = "Extra";
    // this.fields.forma_pagamento = "Terceiro";
    this.fields.user_id = 1;
  },
  watch: {
    categorias_contas_a_pagar_id: function () {
      this.fields.categorias_contas_a_pagar_id = this.categorias_contas_a_pagar_id;
    },
    tipo_conta: function () {
      this.fields.tipo_conta = this.tipo_conta;
    },
    forma_pagamento: function () {
      this.fields.forma_pagamento = this.forma_pagamento;
    },
    editarContaAPagar: {
      deep: true,
      handler() {
        if (this.editarContaAPagar) {
          this.modoEdicao = true;
          moment.locale("pt-BR");
          this.fields.inicio_data_pagamento = moment(
            this.editarContaAPagar.inicio_data_pagamento,
            "YYYY/MM/DD"
          ).format("DD-MM-YYYY");
          this.fields.fim_data_pagamento = moment(
            this.editarContaAPagar.fim_data_pagamento,
            "YYYY/MM/DD"
          ).format("DD-MM-YYYY");
          if (this.editarContaAPagar.valores_contas_a_pagars[0]) {
            this.fields.valor = this.editarContaAPagar.valores_contas_a_pagars[0].valor;
          } else {
            this.fields.valor = 0;
          }

          this.fields.favorecido = this.editarContaAPagar.favorecido;
          this.fields.descricao = this.editarContaAPagar.descricao;

          this.categorias_contas_a_pagar_id = this.editarContaAPagar.categorias_contas_a_pagar_id;
          this.tipo_conta = this.editarContaAPagar.tipo_conta;
          this.forma_pagamento = this.editarContaAPagar.forma_pagamento;
        } else {
          this.modoEdicao = false;
        }
      },
    },
    dataAtual() {
      if (!this.fields.inicio_data_pagamento || !this.modoEdicao) {
        moment.locale("pt-BR");
        var dataMoment = this.dataAtual + "-" + "07";
        this.fields.inicio_data_pagamento = moment(dataMoment).format("L");
      }
    },
  },
  computed: {
    ...mapState({
      dataAtual: (state) => state.Financeiro.dataSelecionada,
      editarContaAPagar: (state) => state.Financeiro.editarContaAPagar,
    }),
  },
  directives: {
    mask: AwesomeMask,
  },
};
</script>
