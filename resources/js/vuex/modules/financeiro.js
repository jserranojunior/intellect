import axios from "axios"

export default {
    state: {
        data: {},
        valor: 0,
        success: false,
        errors: '',
        editedbill:{},
        updatebill:{},
    },
    mutations: {
        LOAD_BILLS_TO_PAY(state, financeiro) {
            state.data = financeiro
        },
        INCREMENT_VALOR(state) {
        },
        CREATE_NEW_BILL(state, valor) {
            state.valor = valor
        },
        EDIT_BILL_TO_PAY(state, data){
            state.editedbill = data
        },
        UPDATE_BILL_TO_PAY(state, data){
            state.updatebill = data
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


        createBillsToPay({ dispatch, commit}, fields) {
            axios
                .post("../public/api/v1/financeiro", fields)
                .then(response => {
                    commit('CREATE_NEW_BILL', fields)
                    dispatch("loadBillsToPay", fields.inicio_data_pagamento); 
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        let errors = error.response.data.errors || {};
                        console.log(errors)
                    }
                })
        },
        editBillsToPay(context, edit) {              
                         
            let url = '../public/api/v1/financeiro/' + edit.id + '/' + edit.date;            
            axios
                .get(url)
                .then(response => context.commit('EDIT_BILL_TO_PAY', response.data.data[0]))                           
                .catch(error => {
                    if (error.response.status === 422) {
                        let errors = error.response.data.errors || {};
                        console.log(errors)
                    }
                })
        },
        updateBillsToPay({ dispatch, commit} ,  update) {              
                           
            let url = '../public/api/v1/financeiro/' + update.id + '/' + update.date;            
            axios
                .put(url, update.fields)
                .then(response => {
                    console.log('conta atualizada')

                    commit('EDIT_BILL_TO_PAY', response.data)

                    //configurar o update //
                    dispatch("loadBillsToPay", update.fields.data_pagamento);                  
                    
                })                           
                .catch(function (error) {
                    console.log(error);
                })
        }


    }
}