<template>
    <div>
        <form v-if="favorecido" @submit.prevent.stop="submit" method="post">
            <div class="form-group">
                <!-- <label for="favorecido">Favorecido</label> -->
                <input type="text" class="form-control" name="favorecido" v-model="fields.favorecido" required placeholder="Favorecido">
                <!-- COLOCAR SELECT COM OPÇÃO DE ADICIONAR CONTA -->
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="descricao" v-model="fields.descricao" placeholder="Descrição">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" name="valor" v-model="fields.valor" required placeholder="Valor">
            </div>
            
            <div class="form-group">
                <label for="inicio_data_pagamento">Inicio Pagamento</label>
                <input type="date" class="form-control" placeholder="Inicio Pagamento" v-model="fields.inicio_data_pagamento" required name="inicio_data_pagamento">
            </div>
            <div class="form-group">
                <label for="fim_data_pagamento">Fim Pagamento</label>
                <input type="date" class="form-control" v-model="fields.fim_data_pagamento" name="fim_data_pagamento">
            </div>
            <div class="form-group">
                <select name="categoria" id="" v-model="fields.categoria" required class="form-control">
                        <option value="1">Essenciais</option>
                        <option value="2">Compras</option>
                        <option value="3">Urgencias</option>
                        <option value="4">Poupança</option>
                        <option value="5">Lazer</option>
                        <option value="6">Transporte</option>
                        <option value="7">Alimentação</option>
                        <option value="8">Estudos</option>
                        <option value="9">Avulsos</option>
                    </select>
            </div>
            <div class="form-group">
                <select name="tipo_conta" id="" v-model="fields.tipo_conta" required class="form-control">
                        <option disabled selected value="Tipo de Conta">Tipo de Conta</option>
                        <option value="Extra">Extra</option>
                        <option value="Fixa">Fixa</option>
                        <option value="Parcelada">Parcelada</option>
                    </select>
            </div>
            <div class="form-group">
                <select name="forma_pagamento" v-model="fields.forma_pagamento" required id="" class="form-control">
                        <option disabled selected value="Forma de Pagamento">Forma de Pagamento</option>
                        <option value="Cartão">Cartão</option>
                        <option value="Dinheiro">Dinheiro</option>
                        <option value="Débito">Débito</option>
                        <option value="Débito Automatico">Débito Automatico</option>
                        <option value="Terceiro">Terceiro</option>
                    </select>
            </div>
            <div class="card-footer text-center">
                <div class="btn btn-primary" data-dismiss="modal" @click="submitUpdate()">Atualizar</div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AwesomeMask from 'awesome-mask'

export default {
    name: "form-edit-bills",
    data() {
        return {
            dataAtualHoje: '',
            fields: {},
            errors: {},
            loaded: true,
            minhadata: '',
            inicio_data_pagamento: '',
            favorecido: '',
            editIdDateFields: {},
        };
    },
    directives: {
        'mask': AwesomeMask
    },
    methods: {
        ...mapActions([
            'loadBillsToPay',
            'nextDateBillsToPay',
            'previousDateBillsToPay',
            'editBillsToPay',
            'updateBillsToPay',
        ]),
        submitUpdate() {

            // corrigir data de atualização 

            this.editIdDateFields.id = this.fields.id
            this.editIdDateFields.date = this.fields.inicio_data_pagamento
            this.editIdDateFields.fields = this.fields
            this.updateBillsToPay(this.editIdDateFields);
        }
    },
    mounted() {
        var hoy = new Date();
        this.dataAtualHoje = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
    },
    watch: {
        inicio_data_pagamento: function() {
            this.fields.inicio_data_pagamento = this.inicio_data_pagamento
        },
        editedbill: function() {
            this.favorecido = this.editedbill.favorecido
            //valida
            this.fields.id = this.editedbill.id;
            this.fields.favorecido = this.editedbill.favorecido;
            this.fields.valor = this.editedbill.valor;
            this.fields.descricao = this.editedbill.descricao;
            this.fields.inicio_data_pagamento = this.editedbill.inicio_data_pagamento;
            this.fields.fim_data_pagamento = this.editedbill.fim_data_pagamento;
            this.fields.parcelas = this.editedbill.parcelas;
            this.fields.tipo_conta = this.editedbill.tipo_conta;
            this.fields.forma_pagamento = this.editedbill.forma_pagamento;
            this.fields.categoria = this.editedbill.categoria;
            this.fields.contas_a_pagar_id = this.editedbill.contas_a_pagar_id;
            this.fields.data_pagamento = this.dataAtual;

            console.log(this.fields.data_pagamento)
        }
    },
    computed: {
        ...mapState({
            dataAtual: state => state.financeiro.data.dates.dataAtual,
            editedbill: state => state.financeiro.editedbill,
        }),
    }
};
</script>

