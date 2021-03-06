<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('auth/login', 'Auth\LoginController@login');

Route::post('auth/reset/generate', 'Auth\ForgotPasswordController@createToken');
Route::post('auth/reset/use', 'Auth\ForgotPasswordController@useToken');

Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});