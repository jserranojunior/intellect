import axios from "axios"

export default {
    state: {
        data: {},
        valor: 0,
        success: false,
        errors: '',
    },
    mutations: {
        LOAD_BILLS_TO_PAY(state, financeiro) {
            state.data = financeiro
        },
        INCREMENT_VALOR(state) {
        },
        CREATE_NEW_BILL(state, valor) {
            state.valor = valor
        }
    },

    actions: {
        loadBillsToPay(context, data) {
            data = String(data)
            let url = '../public/api/v1/financeiro?data=' + data;
            axios
                .get(url)
                .then(response => context.commit('LOAD_BILLS_TO_PAY', response.data))
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    / always executed/
                });
        }, nextDateBillsToPay(state, dispatch) {
            state.dispatch("loadBillsToPay", this.state.financeiro.data.dates.dataPosterior);
        },
        previousDateBillsToPay(state, dispatch) {
            state.dispatch("loadBillsToPay", this.state.financeiro.data.dates.dataAnterior);
        },


        createBillsToPay(context, fields) {            
            axios
                .post("../public/api/v1/financeiro", fields)
                .then(response =>{             
                    context.commit('CREATE_NEW_BILL', fields)                    
                    // dispatch("loadBillsToPay", fields.inicio_data_pagamento); 
                })
                .catch(error => {
                        if (error.response.status === 422) {                       
                        let errors = error.response.data.errors || {};
                        console.log(errors)
                    }                   
                })
               
        }
    }
}