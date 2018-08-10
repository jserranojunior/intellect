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
Route::get('/', 'financeiroController@allAccounts')->name('financeiro');
Route::get('/financeiro', 'financeiroController@allAccounts')->name('financeiro');
Route::get('/financeiro/novo', 'financeiroController@create')->name('financeiro.novo.pagar');
Route::post('/financeiro/store', 'financeiroController@store')->name('financeiro.adicionar');
Route::get('/financeiro/editar/{id}', 'financeiroController@editBillPay')->name('financeiro.editar');

Route::get('/financeiro/novoreceber', 'financeiroController@novaContaReceber')->name('financeiro.novo.receber');
Route::post('/financeiro/storecontasreceber', 'financeiroController@storecontasreceber')->name('financeiro.adicionar.receber');


