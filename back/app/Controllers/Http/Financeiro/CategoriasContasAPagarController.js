'use strict'
const CategoriasAPagar = use ('App/Models/Financeiro/CategoriasContasAPagar')

class CategoriasContasAPagarController {
  
  async index () {
    const Categorias = await CategoriasAPagar.all()
    return Categorias
  }

  async create ({ request, response, view }) {
  } 



  async store ({ request}) {
    const data = request.all()
    const Categoria = await CategoriasAPagar.create({...data})
    return Categoria
  }

  /**
   * Display a single categoriascontasapagar.
   * GET categoriascontasapagars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing categoriascontasapagar.
   * GET categoriascontasapagars/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update categoriascontasapagar details.
   * PUT or PATCH categoriascontasapagars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a categoriascontasapagar with id.
   * DELETE categoriascontasapagars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CategoriasContasAPagarController
