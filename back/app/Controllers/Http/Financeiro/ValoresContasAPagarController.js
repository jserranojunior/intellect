
const ValoresContasAPagar = use ('App/Models/Financeiro/ValoresContasAPagar')
'use strict'


class ValoresContasAPagarController {

  async index ({ request, response, view }) {
    const valoresContasAPagar = await ValoresContasAPagar
    .query()
    .fetch()
    
    // valoresContasAPagar = valoresContasAPagar.reduce((soma, valor) => soma + valor)
    return valoresContasAPagar;
  }

  async create ({ request, response, view }) {
  }

 
  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {


 

    // Verifica se já tem o valor 
    var procurarValorAPagar = await ValoresContasAPagar
    .query()
    .where('id', request.input('id'))
    .fetch()
    procurarValorAPagar = procurarValorAPagar.toJSON()

    if(procurarValorAPagar > ""){
      return(procurarValorAPagar)
    }else{
         const ValoresContasAPagar = new ValoresContasAPagar()
          valoresContasAPagar.id = request.input('id')
    valoresContasAPagar.contas_a_pagar_id = request.input('contas_a_pagar_id')
    valoresContasAPagar.valor = request.input('valor')
        await valoresContasAPagar.save()

    }
    




  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = ValoresContasAPagarController
