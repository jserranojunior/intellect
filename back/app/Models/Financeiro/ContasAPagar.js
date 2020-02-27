'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ContasAPagar extends Model {
  valores_contas_a_pagars() {        
    return this.hasMany('App/Models/Financeiro/ValoresContasAPagar')    
  }
  total_valores_contas_a_pagars(){
    return this.hasMany('App/Models/Financeiro/ValoresContasAPagar')    
  }
}

module.exports = ContasAPagar
