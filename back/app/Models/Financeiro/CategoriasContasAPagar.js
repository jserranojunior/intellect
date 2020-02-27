'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CategoriasContasAPagar extends Model {
  contas_a_pagars() {        
    return this.hasMany('App/Models/Financeiro/ContasAPagar')
  }
  
}

module.exports = CategoriasContasAPagar
