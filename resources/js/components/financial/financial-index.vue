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
                            <div class="col-sm text-center">{{financeiro.data.dates.mesAtualEscrito}} de
                                {{financeiro.data.dates.anoAtual}}
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


        <modal v-if="showModal" @close="showModal = false">
            <transition name="modal">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-container">

                            <div class="modal-header">
                                <slot name="header">
                                    <h5 class="text-center">NOVA CONTA</h5> 
                                </slot>
                                <span @click="showModal = false">X</span>
                            </div>

                            <div class="modal-body">
                                <slot name="body">
                                    
                                </slot>
                            </div>

                            <div class="modal-footer">
                                <slot name="footer">
                                    <button class="btn btn-primary" @click="showModal = false">
                                        CADASTRAR
                                    </button>
                                    <button class="btn btn-danger" @click="showModal = false">
                                        FECHAR
                                    </button>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </modal>



    </div>
</template>

<script>
    import formCreateBills from './form-create-bills.vue';


    export default {
        name: "financial-index",
        components:{       
        formCreateBills,     
        },
        data() {
            return {
                dataAtual: '',
                showModal: false,
                fields: {},
                errors: {},
                success: false,
                loaded: true,
            };
        },
        methods: {
            nextDate() {
                this.dataAtual = this.$store.state.financeiro.data.dates.dataPosterior;
            },
            previousDate() {
                this.dataAtual = this.$store.state.financeiro.data.dates.dataAnterior;
            },
            currentDate() {
                this.dataAtual = "2018-12";
            },
            getContasAPagar() {
                this.$store.dispatch("loadBillsToPay", this.dataAtual);
            },
        },
        mounted() {
            this.currentDate();
            this.getContasAPagar();
        },
        watch: {
            dataAtual() {
                this.$store.dispatch("loadBillsToPay", this.dataAtual);
            }
        },
        filters: {
            money: function (value) {
                if (!value) return '0,00';
                let val = (value / 1).toFixed(2).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        },
        computed: {
            financeiro() {
                return this.$store.state.financeiro;
            }
        }
    };
</script>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 30%;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>