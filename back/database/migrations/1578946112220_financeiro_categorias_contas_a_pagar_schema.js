'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriasContasAPagarSchema extends Schema {
  up () {
    this.create('categorias_contas_a_pagars', (table) => {
      table.increments()
      table.string('nome');
      table.string('cor');
      table.string('tipo');  
      table.timestamps()
    })
  }

  down () {
    this.drop('categorias_contas_a_pagars')
  }
}

module.exports = CategoriasContasAPagarSchema
