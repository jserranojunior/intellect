<template>
    <div>

        <form @submit.prevent.stop="submit" method="post">
            <div class="form-group">
                <!-- <label for="favorecido">Favorecido</label> -->
                <input type="text" class="form-control" name="favorecido" v-model="fields.favorecido" required
                    placeholder="Favorecido">
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
                <input type="date" class="form-control" placeholder="Inicio Pagamento" required v-model="fields.inicio_data_pagamento"
                    name="inicio_data_pagamento">
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
    
                <div class="btn btn-primary" data-dismiss="modal" @click="submit">Cadastrar</div>
            </div>

        </form>
    </div>
</template> 

<script>
    export default {
        name: "form-create-bills",
        methods: {
            teste(){
                this.$store.dispatch("createBillsToPay", this.fields);
                this.$store.dispatch("loadBillsToPay", this.inicio_data_pagamento);
            },
            submit() {
                if (this.loaded) {
                    this.loaded = false;
                    this.success = false;
                    this.errors = {};
                    this.$store.dispatch("createBillsToPay", this.fields);                 
                    this.fields = {}; 
                    this.loaded = true;
                    this.success = true;
                    this.$store.dispatch("loadBillsToPay", this.inicio_data_pagamento);                      
                }
            }
        },
        data() {
            return { 
                fields: {},
                errors: {},
                success: false,
                loaded: true,
                inicio_data_pagamento:'2018-12',
            };
        }
    };
</script>


/*
*/