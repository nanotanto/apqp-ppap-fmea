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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('projects', 'ProjectController@index');
Route::get('projects/{id}', 'ProjectController@show');
Route::post('projects', 'ProjectController@store');
Route::put('projects/{id}', 'ProjectController@update');
Route::delete('projects/{id}', 'ProjectController@delete');

Route::get('parts', 'PartController@index');
Route::get('parts/{id}', 'PartController@show');
Route::post('parts', 'PartController@store');
Route::put('parts/{id}', 'PartController@update');
Route::delete('parts/{id}', 'PartController@delete');
Route::get('part/{project_id}', 'PartController@get');

Route::get('documents', 'DocumentController@index');
Route::get('documents/{id}', 'DocumentController@view');
Route::post('documents', 'DocumentController@store');
Route::put('documents/{id}', 'DocumentController@update');
Route::delete('documents/{id}', 'DocumentController@delete');
Route::get('document/{part_id}', 'DocumentController@get');


Route::get('user_list', 'UserController@list');


Route::get('document_users', 'DocumentUserController@index');
Route::get('document_users/{id}', 'DocumentUserController@show');
Route::post('document_users', 'DocumentUserController@store');
Route::put('document_users/{id}', 'DocumentUserController@update');
Route::delete('document_users/{id}', 'DocumentUserController@delete');
Route::get('document_user/{document_id}', 'DocumentUserController@get');

Route::get('status', 'DocStatusController@index');

Route::post('submitDoc/{id}', 'DocumentController@submitDoc');

Route::post('submitFMEA/{id}', 'FMEAController@submitFMEA');

Route::post('submitProject/{id}', 'ProjectController@submitProject');


Route::get('comment', 'CommentController@index');

Route::get('getJson', 'FMEAController@getJson');

Route::get('Json', 'ZController@index');

Route::get('dmsCategory', 'DmsCategoryController@index');
Route::get('dmsCategory/{id}', 'DmsCategoryController@show');
Route::post('dmsCategory', 'DmsCategoryController@store');
Route::put('dmsCategory/{id}', 'DmsCategoryController@update');
Route::delete('dmsCategory/{id}', 'DmsCategoryController@delete');