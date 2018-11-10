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
                            <div class="col-sm text-center"> de {{anoAtual}}
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
                            <div class="card card-primary" v-for="categorie in categories" :key="categorie.id">
                                <div class="card-header categoria-contas-pagar text-center " v-bind:class="categorie.cor">
                                    {{categorie.nome}}
                                </div>
                                <div class="card-body table-responsive">
                                    <table class="table table-sm table-financial table-striped  table-hover">
                                        <thead>
                                        </thead>
                                        <tbody>
                                            <tr v-for="conta in categorie.bills.bills" :key="conta.id">
                                                <td>{{conta.favorecido}}</td>
                                                <td class="text-right">{{conta.valor}}</td>
                                            </tr>
                                            <tr>
                                                <th><span class="text-bold text-primary">TOTAL</span></th>
                                                <th class="text-right"><span class="text-bold text-primary">
                                                        {{categorie.bills.total}}
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
                                            {{billsToPayTotal}}
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
                mesAtualEscrito: "",
                dataAtual: "",
                anoAtual: "",
                dataPosterior: "",
                dataAnterior: "",
                categories: "",
                billsToPayTotal: "",                
            }
        },
        methods: {
            click() {
                console.log(funcionando);
            },
            getContasApagar() {
                let url = 'http://localhost/intellect/public/api/v1/financeiro?data=' + this.dataAtual;
                let objThis = this;
                this.axios
                    .get(url)
                    .then(function (response) {
                        objThis.data = response.data;
                        objThis.mesAtualEscrito = response.data.dates.mesAtualEscrito;
                        objThis.anoAtual = response.data.dates.anoAtual;
                        objThis.dataAtual = response.data.dates.dataAtual;
                        objThis.dataPosterior = response.data.dates.dataPosterior;
                        objThis.dataAnterior = response.data.dates.dataAnterior;
                        objThis.categories = response.data.data.billsToPay
                        objThis.billsToPayTotal = response.data.data.categorieTotalBillsToPay;
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });
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
            this.getContasApagar();
            this.$store.dispatch('loadBillsToPay').then(() => {
        });
           
            console.log(this.$store.state.financeiro.data.dates);
             return this.$store.state.financeiro.valor;
        },
        watch: {
            dataAtual() {
                this.getContasApagar();
            }
        }
    };
</script>