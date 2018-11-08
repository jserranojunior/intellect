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
                        <div class="col-sm text-center">{{mesAtualEscrito}} de {{anoAtual}}
                        </div>
                    </div>
                    <div class="row row-space">
                        <div class="col-md text-center">
                            <a class="btn btn-default btn-xs " @click.stop="previousDate()" href="#">Anterior</a>
                            <a class="btn btn-default btn-xs float-center" @click.stop="currentDate()" href="#">Atual</a>
                            <a class="btn btn-default btn-xs" @click.stop="nextDate()" href="#">Pŕoximo</a>
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
            dataPosterior:"",
            dataAnterior:"",
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
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        },
        nextDate(){
            this.dataAtual = this.dataPosterior
            console.log(this.dataAtual);
        },
        previousDate(){
            this.dataAtual = this.dataAnterior
            console.log(this.dataAtual);
        },
        currentDate(){
            this.dataAtual = "2018-11"
            console.log(this.dataAtual);
        }
    },
    mounted() {
        this.getContasApagar();
    },
    watch:{
        dataAtual(){
            this.getContasApagar();
        }
    }
};
</script>
