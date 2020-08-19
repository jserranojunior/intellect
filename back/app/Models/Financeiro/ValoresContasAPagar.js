'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ValoresContasAPagar extends Model {
    categorias_contas_a_pagars() {        
        return this.manyThrough('App/Models/Financeiro/ContasAPagar', 'categorias_contas_a_pagars')    
      }
}

module.exports = ValoresContasAPagar
