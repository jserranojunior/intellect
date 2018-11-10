import axios from "axios"

export default{
    state:{
      data:"",
      valor:0,
    },
    mutations:{
        LOAD_BILLS_TO_PAY(state){
            let url = 'http://localhost/intellect/public/api/v1/financeiro?data=' + this.dataAtual;
            axios
                .get(url)
                .then(function (response) {
                    state.data = response.data;                   
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });

                state.valor = 15;
        },
        INCREMENT_VALOR(state){
            
        }
    },

    actions:{
        loadBillsToPay(context){         
                    context.commit('LOAD_BILLS_TO_PAY');
        },
       
    }
} 