import axios from "axios"
import store from '@/store'

export const ActionAddContasAPagar = ({dispatch}, dados) => {
  return new Promise(async (resolve, reject) => {     

      const options = {

          baseURL: 'http://localhost:3333',
          timeout: 1000,
          headers: {
            'Authorization': 'Bearer ' + store.state.Auth.token
          }
        }     
        
        let link = '/contasapagar'

        axios.post(link, dados, options)
            .then(function () {
              
              dispatch('ActionGetCategoriasContasAPagar')
              resolve() 

            })
            .catch(function (error) {
              console.log(error)
              console.log(error.response); 
              reject(error)  
            })  

          })
        }


  export const ActionGetCategoriasContasAPagar = ({commit, state}) => {
    return new Promise(async (resolve, reject) => {     

        const options = {
            baseURL: 'http://localhost:3333',
            timeout: 1000,
            headers: {
              'Authorization': 'Bearer ' + store.state.Auth.token
            }
          }          
          
          let dataSelecionada
          if(state.dataSelecionada == ''){
            var date = new Date()     
            var month = date.getMonth() + 1;
            var year = date.getFullYear();                    
            var formatterMonth;	
            if (month < 10) {
                formatterMonth = '0'+ month;
            } else {
                formatterMonth = month;
            }        
            dataSelecionada =  year +'-'+ formatterMonth ;            
          }else{
            dataSelecionada = state.dataSelecionada
          }


          let link = '/financeiro/' + dataSelecionada


    axios.get(link, options)
    .then(function (response) {                
        commit('SET_CATEGORIA_CONTAS', response.data)      
        resolve() 
    })
    .catch(function (error) {
        console.log(error)
        console.log(error.response); 
        reject(error)           
    })  

    })
  }

  export const ActionSetDataSelecionada = ({commit}, data) => {
    return new Promise(async (resolve) => {      
      commit('SET_DATA_SELECIONADA', data)
      resolve()
    })
  }

  export const ActionSetEditarContaAPagar = ({commit}, data) => {
    return new Promise(async (resolve) => {      
      commit('SET_EDITAR_CONTA_A_PAGAR', data)
      resolve()
    })
  }