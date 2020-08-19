'use strict'


/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Helpers = use('Helpers')


Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('images/upload', 'Image/ImageController.store')
  // .middleware('auth')

Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')
Route.get('/user', 'AuthController.user')

Route.group(()=>{
  Route.get('financeiro/:date', 'Financeiro/ControleFinanceiroController.index')
}).middleware('auth')

Route.group(()=>{
  Route.resource('contasapagar', 'Financeiro/ContasAPagarController')
  Route.get('contasapagar/:id/:data/edit', 'Financeiro/ContasAPagarController.edit')
}).middleware('auth')

Route.group(()=>{
  Route.resource('categorias', 'Financeiro/CategoriasContasAPagarController')
}).middleware('auth')

Route.group(()=>{
  Route.resource('valoresapagar', 'Financeiro/ValoresContasAPagarController')
}).middleware('auth')