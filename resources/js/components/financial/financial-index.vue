<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-lg-3 col">
                <div class="card">
                    <div class="card-footer">
                        <div class="row">
                            <div class="col">
                                <a href="#">
                                    <div class="btn btn-sm  btn-block btn-outline-primary active">
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
                                <a class="btn btn-default btn-xs" @click.stop="nextDate()" href="#">Proximo</a>
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
                                                <td class="text-right">{{conta.valor}}</td>
                                            </tr>
                                            <tr>
                                                <th><span class="text-bold text-primary">TOTAL</span></th>
                                                <th class="text-right"><span class="text-bold text-primary">
                                                        {{categorie.categories.total}}
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
                                            Contas a pagar-- {{financeiro.data.dates.diaFinal}}
                                        </td>
                                        <td>
                                            {{financeiro.data.data.categorieTotalBillsToPay}}
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "financial-index",
        data() {
            return {
                data: "",
                dataAtual: "",
                anoAtual: "",
                dataPosterior: "",
                dataAnterior: "",  
            }
        },
        methods: {
            click() {
                console.log(funcionando);
            },            
            nextDate() {
                this.dataAtual = this.dataPosterior
            },
            previousDate() {
                this.dataAtual = this.dataAnterior
            },
            currentDate() {
                this.dataAtual = "2018-11"
            }
        }, 
        mounted() {          
            this.$store.dispatch('loadBillsToPay').then(() => {
            });   
        },
        watch: {
            dataAtual()  {
                this.getContasApagar();
            }
        },
        computed:{
            financeiro(){
                return this.$store.state.financeiro
            }
        }
    };
</script>