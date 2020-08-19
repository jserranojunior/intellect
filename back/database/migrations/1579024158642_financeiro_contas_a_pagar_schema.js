'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContasAPagarSchema extends Schema {
  up () {
    this.create('contas_a_pagars', (table) => {
      table.increments()

      table.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table.integer('categorias_contas_a_pagar_id')      
      .unsigned()
      .references('id')
      .inTable('categorias_contas_a_pagars')
      .onDelete('set null')


      table.string('favorecido');
      table.string('inicio_data_pagamento');
      table.string('fim_data_pagamento').nullable();      
      table.string('descricao').nullable(); 
      table.string('forma_pagamento').nullable();
      table.string('tipo_conta').nullable();
      table.string('parcelas').nullable();

      table.timestamps()
    })
  }

  down () {
    this.drop('contas_a_pagars')
  }
}

module.exports = ContasAPagarSchema
