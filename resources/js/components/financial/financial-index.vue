<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-lg-3 col">
                <div class="card">
                    <div class="card-footer">
                        <div class="row">
                            <div class="col">
                                <a href="#">
                                    <div class="btn btn-sm  btn-block btn-outline-primary active" data-toggle="modal" data-target="#exampleModal">
                                        (+) CONTA
                                    </div>
                                </a>
                            </div>
                            <div class="col">
                                <div class="btn btn-block btn-sm btn-outline-warning active float-right">
                                    (+) PAGAMENTO
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <div class="row justify-content-center">
                            <div class="col-sm text-center">{{financeiro.data.dates.mesAtualEscrito}} de {{financeiro.data.dates.anoAtual}}
                            </div>
                        </div>
                        <div class="row row-space">
                            <div class="col-md text-center">
                                <a class="btn btn-default btn-xs " @click.stop="previousDate()" href="#">Anterior</a>
                                <a class="btn btn-default btn-xs float-center" @click.stop="currentDate()" href="#">Atual</a>
                                <a class="btn btn-default btn-xs" @click.stop="nextBillsToPay()" href="#">Proximo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col">
                        <div class="card-columns">
                            <div class="card card-primary" v-for="categorie in financeiro.data.data.billsToPay" :key="categorie.id">
                                <div class="card-header categoria-contas-pagar text-center " v-bind:class="categorie.cor">
                                    {{categorie.nome}}
                                </div>
                                <div class="card-body table-responsive">
                                    <table class="table table-sm table-financial table-striped  table-hover">
                                        <thead>
                                        </thead>
                                        <tbody>
                                            <tr v-for="conta in categorie.categories.bills" :key="conta.id">
                                                <td>{{conta.favorecido}}</td>
                                                <td class="text-right">{{conta.valor | money }}</td>
                                            </tr>
                                            <tr>
                                                <th><span class="text-bold text-primary">TOTAL</span></th>
                                                <th class="text-right"><span class="text-bold text-primary">
                                                            {{categorie.categories.total | money}}
                                                        </span></th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-4">
                        <div class="card">
                            <div class="card-header categoria-contas-pagar categoria-lazer text-center">
                                TOTAIS
                            </div>
                            <div class="card-body table-responsive">
                                <table class="table table-sm table-financial table-striped  table-hover">
                                    <tr>
                                        <td>
                                            Contas a pagar
                                        </td>
                                        <td>
                                            {{financeiro.data.data.categorieTotalBillsToPay | money}}
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    
    
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">NOVA CONTA</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
                    </div>
                    <div class="modal-body">
                        <form-create-bills></form-create-bills>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import formCreateBills from './form-create-bills.vue'
import {mapState, mapActions} from 'vuex'

export default {
    name: "financial-index",
    components: {
        formCreateBills,
    },
    data() {
        return {
           
        };
    },
    methods: {
        ...mapActions([
            'loadBillsToPay',
            'nextDateBillsToPay',
            'previousDateBillsToPay',           
        ]),
        nextDate() {
            this.dataAtual = this.financeiro.data.dates.dataPosterior;
        },
        previousDate() {
            this.previousDateBillsToPay();
        },
        getContasAPagar() { 
            this.loadBillsToPay(this.dataAtual);
        },
        nextBillsToPay(){
            this.nextDateBillsToPay();
        }
    },
    mounted() {
        this.loadBillsToPay("");
    },
    filters: {
        money: function(value) {
            if (!value) return '0,00';
            let val = (value / 1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    },
    computed: {
        ...mapState({
            financeiro: state => state.financeiro,
        }),    
    }
};
</script>
