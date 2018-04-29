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
Route::get('/financeiro/create', 'financeiroController@create')->name('financeiro.novo');
Route::post('/financeiro/store', 'financeiroController@store')->name('financeiro.adicionar');



/* API */
Route::get('/api/financeiro', 'financeiroController@allAccounts');