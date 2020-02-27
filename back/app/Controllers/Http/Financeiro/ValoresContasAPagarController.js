
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

  /**
   * Render a form to be used for creating a new valorescontasapagar.
   * GET valorescontasapagars/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new valorescontasapagar.
   * POST valorescontasapagars
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single valorescontasapagar.
   * GET valorescontasapagars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing valorescontasapagar.
   * GET valorescontasapagars/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update valorescontasapagar details.
   * PUT or PATCH valorescontasapagars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a valorescontasapagar with id.
   * DELETE valorescontasapagars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ValoresContasAPagarController
