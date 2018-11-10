export default{
    state:{
      data:"",
      valor:0,
    },
    mutations:{
        LOAD_BILLS_TO_PAY(state, valor){
            state.data = valor;
        },
        INCREMENT_VALOR(state){
            state.valor++
        }
    },

    actions:{
        loadBillsToPay(context){         
                    context.commit('LOAD_BILLS_TO_PAY', 15);
        },
        incrementValor(context){
            context.commit('INCREMENT_VALOR')
        }
    }
} 