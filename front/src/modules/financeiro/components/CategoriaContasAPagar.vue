<template>

        <div class="row">
            <div class="col-3" v-for="categoria in categoriaContas.contasAPagar" :key="categoria.id">
                <div class="card card-outline card-success">
                    <div class="card-header text-center" :class="categoria.cor">
                        <h3 class="card-title">{{categoria.nome}}</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                            </button>
                        </div>
                        <!-- /.card-tools -->
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <table class="table table-sm table-hover">
                            <thead>
                                <tr>
                                    <!-- <th>Id</th>
                                    <th>Favorecido</th>
                                    <th>Valor</th>
                                    <th>Status</th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="contas in categoria.contas_a_pagars" :key="contas.id">

                                
                                    <td>
                                        {{contas.favorecido}}
                                    </td>
                                    <td class="text-center"> 
                                        <p v-for="valores in contas.valores_contas_a_pagars" :key="valores.id">
                                            {{valores.valor}}
                                        </p>

                                    </td>
                                    <td class="text-right">
                                        <div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-primary text-right  pointer">
                      <input type="checkbox" class="custom-control-input  pointer" :id="contas.id">
                      <label class="custom-control-label  pointer" :for="contas.id"></label>
                    </div>
                                    </td> 
                                </tr>
                                <tr class="font-weight-bold">
                                    <td  colspan="2">TOTAL</td>
                                    <td colspan="2" class="text-right">{{categoria.totalCategoria | money}}</td>
                                  
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>

        </div>
    
</template>

<script>

import {mapActions, mapState} from 'vuex'
export default {
    name: 'CategoriaContasAPagar',
    data() {
        return {
            // categoriaContas: {},
        }
    },
    computed:{
        ...mapState({
            categoriaContas: state => state.Financeiro.categoriaContas
        })
    },
    methods:{
        ...mapActions([
            'ActionGetCategoriasContasAPagar'
        ])        
    },
    props: {
        msg: String
    },
    beforeMount(){
        this.ActionGetCategoriasContasAPagar()
    },

    filters: {
        money: function(value) {
            // console.log(value)
            if (!value){
                 return '0,00';
            }
            else{
            let val = (value / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
          
    
        }
    },
    

}
</script>

<style>
.custom-switch {
    padding-left: 0px;
}
.custom-control-label {
 
    float: right;
    margin-right: -22px;
}
.custom-control-input {
    position: fixed;
    z-index: 0;
    opacity: 0;
    display: none;
}

.pointer{
    cursor: pointer;
}
.card-body {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding: 0.25rem;
}

.card {
    margin-top: 15px;
}

.card-header {

    padding: 0.25rem 1.25rem;

}

.categoria-essenciais {
    background-color: #0971B2;
    color: white;
    font-weight: bold;
    font-size: 14px;
}

.categoria-compras {
    background-color: #4C12B2;
    color: white;
    font-weight: bold;
    font-size: 14px;
}

.categoria-urgencia {
    background-color: #B21212;
    color: white;
    font-weight: bold;
    font-size: 14px;
}

.categoria-essenciais {
    background-color: #0971B2;
    color:white;
    font-weight: bold;
    font-size:14px;
}

.categoria-estudos {
    background-color: #ff8507;
    color:white;
    font-weight: bold;
    font-size:14px;
}

.categoria-lazer {
    background-color: rgb(178, 18, 111);
    color:white;
    font-weight: bold;
    font-size:14px;
}

.categoria-poupanca {
    background-color: rgb(37, 210, 216);
    color:white;
    font-weight: bold;
    font-size:14px;
}

.categoria-transporte{
    background-color: rgb(80, 77, 74);
    color:white;
    font-weight: bold;
    font-size:14px;
}
 
.categoria-alimentacao{
    background-color: rgb(44, 116, 29);
    color:white;
    font-weight: bold;
    font-size:14px;
}

.categoria-avulsos{
    background-color: rgb(29, 116, 104);
    color:white;
    font-weight: bold;
    font-size:14px;
}


.table {
    margin-bottom: 0rem;
}

body {
    font-size: 0.7rem;
}
.table td, .table th {
    padding: .2rem;
}
</style>
