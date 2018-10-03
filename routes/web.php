<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();


/* INICIO */
Route::get('/', function () {
    return view('welcome');
});

// Financeiro
Route::get('/financeiro', 'Financial\FinancialController@index')->name('financeiro');
// Contas para pagar
Route::get('/financeiro/novo/pagar', 'Financial\BillsToPayController@create')->name('financeiro.novo.pagar');
Route::post('/financeiro/pagar/store', 'Financial\BillsToPayController@store')->name('financeiro.pagar.adicionar');


// Route::get('/financeiro/edit/{id}/{data}', 'financeiroController@edit')->name('financeiro.editar');
// Route::get('/financeiro/novoreceber', 'financeiroController@novaContaReceber')->name('financeiro.novo.receber');
// Route::post('/financeiro/storecontasreceber', 'financeiroController@storecontasreceber')->name('financeiro.adicionar.receber');


