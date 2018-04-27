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

Route::get('/', 'financeiroController@allAccounts')->name('financeiro');
Route::get('/financeirold', 'financeiroController@allAccounts')->name('financeirold');
Route::get('/financeiro/json','financeiroController@json');


Auth::routes();

Route::get('/home', 'HomeController@allAccounts')->name('home');

/* API */

Route::get('/api/financeiro', 'financeiroController@allAccounts');