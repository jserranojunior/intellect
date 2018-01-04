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

Route::get('/', 'financeiroController@index')->name('financeiro');
Route::get('/financeiro', 'financeiroController@index')->name('financeiro');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
