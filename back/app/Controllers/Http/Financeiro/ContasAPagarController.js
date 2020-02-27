'use strict'
const ContasAPagar = use ('App/Models/Financeiro/ContasAPagar')
const ValoresAPagar = use ('App/Models/Financeiro/ValoresContasAPagar')
const Database = use('Database')


class ContasAPagarController {

  async index ({auth}) {
    // const Contas = await Database.table('contas_a_pagars')
    // // .innerJoin('users', 'users.id', 'contas_a_pagars.user_id')
    // .innerJoin('users', function () {
    //   this
    //     .on('users.id', 'contas_a_pagars.user_id')
    // })

    const Contas = await ContasAPagar
    .query()
    .with('valores_contas_a_pagars', (builder) => {
      builder.select(Database.raw('sum(valor) as sum'))
             .select('contas_a_pagar_id', 'id')
             .groupBy('contas_a_pagar_id', 'id')
    })


    .fetch();  

    return Contas

    
  }


  async create ({ request, response, view }) {
  }


  async store ({ request, auth}) {
    const dataConta = request.only([   "favorecido",
    "inicio_data_pagamento",
    "fim_data_pagamento",
    "categorias_contas_a_pagar_id",
    "descricao",
    "forma_pagamento",
    "tipo_conta",
    "parcelas",])

    const dataValor = request.only(["valor"])

 


    const conta = await ContasAPagar.create({ user_id: auth.user.id, ...dataConta})

  
    const valor = await ValoresAPagar.create({ contas_a_pagar_id: conta.id, data_pagamento:dataConta.inicio_data_pagamento, ...dataValor})

    const contaValor = {"conta": conta, "valor": valor}

    return contaValor
  }

  /**
   * Display a single contasapagar.
   * GET contasapagars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing contasapagar.
   * GET contasapagars/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update contasapagar details.
   * PUT or PATCH contasapagars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a contasapagar with id.
   * DELETE contasapagars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ContasAPagarController
