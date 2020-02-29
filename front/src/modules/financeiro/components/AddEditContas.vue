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
                <input type="text" class="form-control" v-mask="'money'" name="valor" v-model="fields.valor"  required placeholder="Valor">
            </div>
            <div class="form-group">
                <label for="inicio_data_pagamento">Inicio Pagamento</label>
                <input type="text" class="form-control" v-mask="'99/99/9999'" placeholder="dd/mm/aaaa" v-model="inicio_data_pagamento" required >
            </div>

            <div class="form-group">
                <label for="fim_data_pagamento">Fim Pagamento</label>
                <input type="text" class="form-control" v-mask="'99/99/9999'" placeholder="dd/mm/aaaa" v-model="fields.fim_data_pagamento">
            </div>
            <div class="form-group">

                <select name="categorias_contas_a_pagar_id" id="" v-model="categorias_contas_a_pagar_id" required class="form-control">
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

            <div class="form-group">
                <select name="tipo_conta" id="" v-model="tipo_conta" required class="form-control">
                    <option disabled selected value="Tipo de Conta">Tipo de Conta</option>
                    <option value="Extra">Extra</option>
                    <option value="Fixa">Fixa</option>
                    <option value="Parcelada">Parcelada</option>
                </select>
            </div>

            <div class="form-group">
                <select name="forma_pagamento" v-model="forma_pagamento" required id="" class="form-control">
                    <option disabled selected value="Forma de Pagamento">Forma de Pagamento</option>
                    <option value="Cartão">Cartão</option>
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Débito">Débito</option>
                    <option value="Débito Automatico">Débito Automatico</option>
                    <option value="Terceiro">Terceiro</option>
                </select>
            </div>

            <div class="card-footer text-center">    
                <div class="btn btn-primary pointer" data-dismiss="modal" @click="submit">Cadastrar</div>
            </div>

        </form>
    </div>
</template> 

<script>
import {mapState, mapActions} from 'vuex'
import AwesomeMask from 'awesome-mask'
import moment from 'moment'


    export default {
        name: "AddEditContas",   
        data() {
            return { 
                dataAtualHoje: '',
                fields: {},
                errors: {},
                loaded: true,
                minhadata:'',
                inicio_data_pagamento:'',
                categorias_contas_a_pagar_id:1,
                tipo_conta:'Extra',
                forma_pagamento:'Cartão'                
            };
        },    
        directives: {
            'mask': AwesomeMask
        },
    
        methods: {
            ...mapActions([
                'ActionAddContasAPagar'
        ]),            
            submit() {
                this.ActionAddContasAPagar(this.fields)
                       
                             
            }
        },
        beforeMount(){           
            
                this.fields.categorias_contas_a_pagar_id = this.categorias_contas_a_pagar_id    
                this.fields.tipo_conta = this.tipo_conta          
                this.fields.forma_pagamento = this.forma_pagamento
            
        
            
            /* hora atual */
            var hoy = new Date();            	
            this.dataAtualHoje = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();  
        
        },
        watch:{
            inicio_data_pagamento: function(){
                this.fields.inicio_data_pagamento = this.inicio_data_pagamento
            },
              categorias_contas_a_pagar_id: function(){
                this.fields.categorias_contas_a_pagar_id = this.categorias_contas_a_pagar_id
            },
              tipo_conta: function(){
                this.fields.tipo_conta = this.tipo_conta
            },
              forma_pagamento: function(){
                this.fields.forma_pagamento = this.forma_pagamento
            }, 
            editarContaAPagar: {
      deep: true,

      handler(){
      console.log("ta funcioandno")
      }
        },
            dataAtual(){
                moment.locale('pt-BR');
                var dataMoment = this.dataAtual + "-" + "01"
                 this.inicio_data_pagamento =   moment(dataMoment).format('L');  
                 this.fields.fim_data_pagamento =   moment(dataMoment).format('L');  
            }
        },        
        computed: {
        ...mapState({           
            dataAtual: state => state.Financeiro.dataSelecionada,
            editarContaAPagar: state => state.Financeiro.editarContaAPagar,
 
        }),    
    },
        
    };
</script>
