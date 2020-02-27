'use strict'
const CategoriasAPagar = use ('App/Models/Financeiro/CategoriasContasAPagar')
const ContasAPagar = use ('App/Models/Financeiro/ContasAPagar')
const Database = use('Database')


class ControleFinanceiroController {
    async index ({params}) {
        const date = params.date    
        const ContasAPagar = await CategoriasAPagar
        .query()
        
        .with('contas_a_pagars', (builder) => {
          builder
          .whereRaw('SUBSTRING(inicio_data_pagamento,1,7) <= ?', [date])
          .whereRaw('SUBSTRING(fim_data_pagamento,1,7) >= ?', [date])
          .orWhereRaw('SUBSTRING(inicio_data_pagamento,1,7) <= ?', [date])
          .whereNull('fim_data_pagamento')
          .orWhereRaw('SUBSTRING(inicio_data_pagamento,1,7) <= ?', [date])
          .whereRaw('fim_data_pagamento = ""')
         
          .with('valores_contas_a_pagars',(builder) => {
            builder            
            // .where('data_pagamento','<=', date)           
            // colocar para ordenar o valor que vem primeiro           
          })
         

          // .with('total_valores_contas_a_pagars',(builder) => {           
          //   builder.select(Database.raw('sum(valor) as sum'))
          //   // .where('data_pagamento','<=', date) 
          //   .select('id', 'contas_a_pagar_id', 'valor')
          //   .groupBy('contas_a_pagar_id')   
          // })     
         
        })    
     
       
        .fetch();  

        // ContasAPagar.toJSON()

        // for (var categorias in ContasAPagar) {
        //   // return ContasAPagar[p]
        //   for (var contas in ContasAPagar[categorias]) {
        //     for(var valores in ContasAPagar[categorias][contas]){
        //       let conta = ContasAPagar[categorias][contas].toJSON();
        //      return conta
        //     }
        //   }    
     
        // }

        // ContasAPagar.forEach(function(valorAtual, index, array){
        //   console.log(index + array)
        //   let retorno = valorAtual;
        // })

        let Categorias = ContasAPagar.toJSON()
        
        for(var categorias in Categorias){
          let totalCategoria = 0
          for(var Contas in Categorias[categorias].contas_a_pagars){
            for(var valores in Categorias[categorias].contas_a_pagars[Contas].valores_contas_a_pagars){
              let valoresAPagar = Categorias[categorias].contas_a_pagars[Contas].valores_contas_a_pagars[valores].valor
              totalCategoria = parseInt(totalCategoria) + parseInt(valoresAPagar) 
            }
          }
          Categorias[categorias]['totalCategoria'] = totalCategoria
        }


      
        return {"contasAPagar": Categorias}
      }
}

module.exports = ControleFinanceiroController
