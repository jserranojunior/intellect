import axios from "axios";

export default {
    state: {
        data: {},
        valor: 0,
    },
    mutations: {
        LOAD_BILLS_TO_PAY(state, financeiro) {
            state.data = financeiro
            state.valor = 2
        },
        INCREMENT_VALOR(state) {
        }
    },

    actions: {
        loadBillsToPay(context, data) {
            let url = '../public/api/v1/financeiro?data=' + data;
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

    }
}