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
         
  
         
        })    
     
       
        .fetch();  

    

        let Categorias = ContasAPagar.toJSON()

        var totalGeralContasAPagar = 0
        
        for(var categorias in Categorias){
          let totalCategoria = 0
          for(var Contas in Categorias[categorias].contas_a_pagars){
            for(var valores in Categorias[categorias].contas_a_pagars[Contas].valores_contas_a_pagars){
              let valoresAPagar = Categorias[categorias].contas_a_pagars[Contas].valores_contas_a_pagars[valores].valor
              totalCategoria = parseFloat(totalCategoria) + parseFloat(valoresAPagar) 
            }
          }
          Categorias[categorias]['totalCategoria'] = totalCategoria
          totalGeralContasAPagar = parseFloat(totalGeralContasAPagar) + parseFloat(totalCategoria)
        }


      
        return {"contasAPagar": Categorias, "TotalGeralContasAPagar": totalGeralContasAPagar}
      }
}

module.exports = ControleFinanceiroController
