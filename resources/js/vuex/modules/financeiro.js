import axios from "axios";

export default {
    state: {
        data: {},
        valor: 0,
    },
    mutations: {
        LOAD_BILLS_TO_PAY(state, financeiro) {
            state.data = financeiro
        },
        INCREMENT_VALOR(state) {
        },
        CREATE_NEW_BILL(state, valor){
            state.valor = valor
        }
    },

    actions: {
        loadBillsToPay(context, data) {
            let url = '';

            if(data > ''){
                url = '../public/api/v1/financeiro?data=' + data;
            }else{
                let url = '../public/api/v1/financeiro?data=' + '2018-12';
                console.log(url)
            }

            
            
            axios
                .get(url)
                .then(response => context.commit('LOAD_BILLS_TO_PAY', response.data))
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    / always executed/
                });
        },
        createBillsToPay(context, fields){
            context.commit('CREATE_NEW_BILL', fields)           
                
                axios
                    .post("../public/api/v1/financeiro", fields)
                    .then(response => {                       
                    
                    })
                    .catch(error => {
                        this.loaded = true;
                        if (error.response.status === 422) {
                            this.errors = error.response.data.errors || {};
                        }
                    });
            
        }
    }
}