<template>
  <div class="flex">
    <div class="w-3/12 p-1" v-for="categoria in categoriaContas.contasAPagar" :key="categoria.id">
      <div class="painel mt-1 shadow-md">
        <div :class="categoria.cor + ' painel-header text-center'">
          <p class="painel-title">{{categoria.nome}}</p>
          <button type="button" class="togle" data-card-widget="collapse">
            <i class="fas fa-minus"></i>
          </button>
        </div>
        <div class="painel-body p-1">
          <div
            class="flex text-center mt-1"
            v-for="contas in categoria.contas_a_pagars"
            :key="contas.id"
          >
            <div
              class="w-1/3 pointer"
              @click="editarContaAPagar(contas.id)"
              data-toggle="modal"
              data-target="#exampleModal"
            >{{contas.favorecido}}</div>
            <div class="w-1/3">
              <span
                v-for="valores in contas.valores_contas_a_pagars"
                :key="valores.id"
              >{{valores.valor | money}}</span>
            </div>
            <div class="w-1/3">
              <input type="checkbox" class="custom-control-input pointer" :id="contas.id" />
              <label class="custom-control-label pointer" :for="contas.id"></label>
            </div>
          </div>
        </div>
        <div class="painel-footer flex text-center justify-between border-t mt-1 p-2">
          <div class="w-1/3">Total</div>
          <div class="w-1/3">{{categoria.totalCategoria | money}}</div>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import {mapActions, mapState} from 'vuex'
export default {
    name: 'CategoriaContasAPagar',
    data() {
        return {
            editandoContaAPagar: {},

            // categoriaContas: {},
        }
    },
    computed:{
        ...mapState({
            categoriaContas: state => state.Financeiro.categoriaContas
        })
    },
    methods:{
        editarContaAPagar(id){
            this.ActionGetEditarContaAPagar(id)
        },
        ...mapActions([
            'ActionGetCategoriasContasAPagar',
            'ActionGetEditarContaAPagar',
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
/* .custom-switch {
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

.pointer {
  cursor: pointer;
} */
/* .card-body {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding: 0.25rem;
}

.card {
  margin-top: 15px;
}

.card-header {
  padding: 0.25rem 1.25rem;
} */

.categoria-essenciais {
  background-color: #0971b2;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.categoria-compras {
  background-color: #4c12b2;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.categoria-urgencia {
  background-color: #b21212;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.categoria-essenciais {
  background-color: #0971b2;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.categoria-estudos {
  background-color: #ff8507;
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.categoria-lazer {
  background-color: rgb(178, 18, 111);
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.categoria-poupanca {
  background-color: rgb(37, 210, 216);
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.categoria-transporte {
  background-color: rgb(80, 77, 74);
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.categoria-alimentacao {
  background-color: rgb(44, 116, 29);
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.categoria-avulsos {
  background-color: rgb(29, 116, 104);
  color: white;
  font-weight: bold;
  font-size: 14px;
}

/* .table {
  margin-bottom: 0rem;
}

body {
  font-size: 0.7rem;
}
.table td,
.table th {
  padding: 0.2rem;
} */
</style>
