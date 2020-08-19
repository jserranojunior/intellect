'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ValoresContasAPagarSchema extends Schema {
  up () {
    this.create('valores_contas_a_pagars', (table) => {
      table.increments()
      table.timestamps()

      table.integer('contas_a_pagar_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('contas_a_pagars')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')


      table.string('data_pagamento')
      table.string('valor')

      
    })
  }

  down () {
    this.drop('valores_contas_a_pagars')
  }
}

module.exports = ValoresContasAPagarSchema
