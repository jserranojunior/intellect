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
      <label
        for="inicio_data_pagamento"
        class="pb-2 text-gray-700 font-semibold"
        >Inicio Pagamento</label
      >

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
      <label for="fim_data_pagamento" class="pb-2 text-gray-700 font-semibold"
        >Fim Pagamento</label
      >
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
      <select
        name="tipo_conta"
        v-model="fields.tipo_conta"
        required
        class="form-tail"
      >
        <option disabled selected value="Tipo de Conta">Tipo de Conta</option>
        <option value="Extra">Extra</option>
        <option value="Fixa">Fixa</option>
        <option value="Parcelada">Parcelada</option>
      </select>
    </div>

    <div class="flex-col flex pt-2">
      <select
        name="forma_pagamento"
        v-model="fields.forma_pagamento"
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

    <div class="mt-2">
      <div
        v-if="mode === 'add'"
        class="btn-primary-tail-rounded"
        data-dismiss="modal"
        @click="cadastrar()"
      >
        Cadastrar
      </div>
      <div v-else class="flex justify-between mt-1">
        <router-link :to="{ name: 'financeiro' }">
          <button class="btn-warning-tail-rounded">Voltar</button>
        </router-link>
        <button class="btn-primary-tail-rounded" @click="atualizar()">
          Atualizar
        </button>
      </div>
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
        dataAtual: this.dataAtualFinanceiro
          ? this.dataAtualFinanceiro
          : new Date().toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }),
        modoEdicao: false,
      };
    },
    methods: {
      ...mapActions(["ActionStoreFinancial", "ActionUpdateFinancial"]),
      toMoney(value) {
        if (!value) {
          return "0,00";
        } else {
          let val = (value / 1).toFixed(2).replace(".", ",");
          val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          console.log(val);
          return val;
        }
      },
      cadastrar() {
        this.ActionStoreFinancial(this.fields).then((result) => {
          this.fields.favorecido = "";
          this.fields.descricao = "";
          this.fields.valor = "";
          this.$router.push({ name: "financeiro" });
        });
      },
      atualizar() {
        this.ActionUpdateFinancial(this.fields).then((result) => {
          this.$router.push({ name: "financeiro" });
        });
      },
      setFields() {
        if (this.mode === "add") {
          this.fields.inicio_data_pagamento = this.dataAtual;
          this.fields.fim_data_pagamento = this.dataAtual;
          this.fields.forma_pagamento = "Cartão";
          this.fields.tipo_conta = "Extra";
          this.fields.categorias_contas_a_pagar_id = "2";
        } else if (this.mode === "edit") {
          if (this.editarContaAPagar[0]) {
            this.fields.id = this.editarContaAPagar[0].id;
            this.fields.favorecido = this.editarContaAPagar[0].favorecido;
            this.fields.descricao = this.editarContaAPagar[0].descricao;
            this.fields.inicio_data_pagamento = this.editarContaAPagar[0].inicio_data_pagamento;
            this.fields.forma_pagamento = this.editarContaAPagar[0].forma_pagamento;
            this.fields.tipo_conta = this.editarContaAPagar[0].tipo_conta;
            this.fields.categorias_contas_a_pagar_id = this.editarContaAPagar[0].categorias_contas_a_pagar_id;

            this.fields.valor = this.toMoney(
              this.editarContaAPagar[0].valores_contas_a_pagars.valor
            );
            console.log(this.fields.valor);

            // const ContasAPagar = Array.from(this.editarContaAPagar[0]).slice();
            // this.fields = Array.from(ContasAPagar[0]).slice();
            // this.fields.valor = this.fields.valores_contas_a_pagars.valor;

            this.fields.inicio_data_pagamento = this.editarContaAPagar[0].inicio_data_pagamento
              .split("-")
              .reverse()
              .join("/");

            if (this.editarContaAPagar[0].fim_data_pagamento) {
              this.fields.fim_data_pagamento = this.editarContaAPagar[0].fim_data_pagamento
                .split("-")
                .reverse()
                .join("/");
            } else {
              this.fields.fim_data_pagamento = "";
            }
            this.fields.data_pagamento = this.dataAtualFinanceiro;
          } else {
            this.$router.push({ name: "financeiro" });
          }
        }
      },
    },
    beforeMount() {
      this.setFields();
    },
    props: {
      mode: {
        type: String,
        required: true,
      },
    },
    watch: {
      fields: {
        handler() {
          // console.log(this.fields);
        },
        deep: true,
      },
      categorias_contas_a_pagar_id: function () {
        this.fields.categorias_contas_a_pagar_id = this.categorias_contas_a_pagar_id;
      },
    },
    computed: {
      ...mapState({
        dataAtualFinanceiro: (state) => state.Financeiro.dataSelecionada,
        editarContaAPagar: (state) => state.Financeiro.editarContaAPagar,
      }),
    },

    directives: {
      mask: AwesomeMask,
    },
  };
</script>
