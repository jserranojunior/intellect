<template>
<div>
    <Main>
        <template v-slot:mainpage>

            <div class="row justify-content-center">
                <div class="col-4">
                    <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Adicionar Conta
                    </button>
                </div>
                <div class="col-4">

                    <div class="row">
                        <div class="col">
                            <Calendario></Calendario>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col">

                        </div>

                    </div>
                </div>
                <div class="col-4">

                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <AddEditContas></AddEditContas>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-8">
                    <CategoriaContasAPagar></CategoriaContasAPagar>
                </div>

                <div class="col-4">
                    <div class="col">
                        <div class="card">
                            <div class="card-header categoria-contas-pagar categoria-urgencia text-center">
                                TOTAIS
                            </div>
                            <div class="card-body table-responsive">
                                <table class="table table-sm table-financial table-striped  table-hover">
                                    <tr>
                                        <td class="text-primary">
                                            Contas a pagar
                                        </td>
                                        <td>
                                            {{categoriaContas.TotalGeralContasAPagar | money}}
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header categoria-contas-pagar categoria-estudos text-center">
                                Caixa / Frelas
                            </div>
                            <div class="card-body table-responsive">
                                <table class="table table-sm table-financial table-striped  table-hover">
                                    <tr>
                                        <td>
                                            Santander
                                        </td>
                                        <td>
                                            R$148,00
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header categoria-contas-pagar categoria-lazer text-center">
                                Poupança
                            </div>
                            <div class="card-body table-responsive">
                                <table class="table table-sm table-financial table-striped  table-hover">
                                    <tr>
                                        <td>
                                            ROUPA / HIGIENE
                                        </td>
                                        <td>
                                            R$400,00
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </template>
    </Main>
</div>
</template>

<script>
import {mapState} from 'vuex'
import Main from '@/views/layouts/Main'
import AddEditContas from '@/modules/financeiro/components/AddEditContas'
import CategoriaContasAPagar from '@/modules/financeiro/components/CategoriaContasAPagar'
import Calendario from '@/modules/financeiro/components/Calendario'
export default {
    name: "FinanceiroIndex",
    data() {
        return {}
    },
    components: {
        CategoriaContasAPagar,
        AddEditContas,
        Main,
        Calendario,
    },
    computed:{
        ...mapState({
            categoriaContas: state => state.Financeiro.categoriaContas
        })
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
