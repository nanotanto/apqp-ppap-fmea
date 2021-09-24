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

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/viewdoc', function () {
    return view('viewdoc');
});

// Route::get('/fmea', function () {
//     return view('fmea');
// });

// Route::get('/doc', function () {
//     return view('doc');
// });

Auth::routes();

Route::get('/home', 'HomeController@index');
Route::get('/', 'HomeController@index');
Route::get('/admin', 'HomeController@admin');
Route::get('/fmea', 'HomeController@fmea');
Route::get('/dms', 'HomeController@dms');

Route::group(['middleware' => ['auth']], function() {
    Route::resource('roles','RoleController');
    Route::resource('users','UserController');
    Route::resource('companies','CompanyController');
    Route::resource('departments','DepartmentController');
    Route::resource('positions','PositionController');
    Route::resource('documents','DocumentController');
    Route::resource('comments','CommentController');
    Route::resource('fp4forms','Fp4FormController');
    Route::get('/doc', function () {
        return view('doc');
    });
});

Route::post('/documents.revised', 'DocumentController@revised');
Route::post('/documents.submit', 'DocumentController@submit');

Route::get('/documents_all', 'DocumentController@all');
Route::get('/documents_draft', 'DocumentController@draft');
Route::get('/documents_publish', 'DocumentController@publish');
Route::get('/documents_view/{document}', 'DocumentController@view_approval');
Route::get('/documents_select/{id}', 'DocumentController@select');

Route::get('/fp4forms_open', 'Fp4FormController@open');
Route::get('/fp4forms_view/{id}', 'Fp4FormController@view');
Route::get('/user_id', 'Fp4FormController@user_id');
Route::get('/department_id', 'Fp4FormController@department_id');
Route::get('/fp4form_id', 'Fp4FormController@fp4form_id');

Route::get('/pic_sysdur', 'Fp4FormController@pic_sysdur');
Route::get('/open_picsysdur', 'Fp4FormController@open_picsysdur');
Route::get('/user_', 'Fp4FormController@user_');
Route::get('/department_', 'Fp4FormController@department_');
Route::get('/total_picsysdur', 'Fp4FormController@total_picsysdur');

Route::post('/submitForm', 'Fp4FormController@submitForm');
Route::post('/updateForm', 'Fp4FormController@updateForm');
Route::post('/updateForm2', 'Fp4FormController@updateForm2');

Route::post('/uploadfile', 'UploadController@uploadfile');

Route::post('/upload', 'DocumentController@upload');

Route::post('/documents/store', 'DocumentController@save');

Route::get('/documents/storage/uploads/{id}', function ($id) {
	return redirect('/storage/uploads/'.$id);
});

Route::get('/fp4status/{id}', 'Fp4StatusController@status');
Route::post('/updatefp4status', 'Fp4StatusController@updatefp4status');

Route::get('/docstatus/{id}', 'DocStatusController@status');
Route::post('/updatedocstatus', 'DocStatusController@updatedocstatus');

Route::post('/submitDoc/{id}', 'DocumentController@submitDoc');

Route::post('/submitProject/{id}', 'ProjectController@submitProject');


Route::get('part/{project_id}', 'PartController@get');


Route::get('document/{part_id}', 'DocumentController@get');
// Route::put('document/{id}', 'DocumentController@update');


//FMEA
Route::get('products', 'ProductController@index');
Route::get('products/show/', function() {
    return response()->json();
});
Route::get('products/show/{id}', 'ProductController@show');
Route::post('products/save', 'ProductController@save');
Route::put('products/update/{id}', 'ProductController@update');
Route::get('products/newFmea', 'ProductController@newFmea');
Route::post('products/delete/{id}', 'ProductController@delete');

Route::get('processes', 'ProcessController@index');
Route::get('processes/{id}', 'ProcessController@view');
Route::get('processes/show/{id}', 'ProcessController@show');
Route::post('processes/save', 'ProcessController@save');
Route::put('processes/save/{id}', 'ProcessController@update');
Route::post('processes/delete/{id}', 'ProcessController@delete');
Route::get('process_steps/{id}', 'ProcessController@process_steps');

Route::get('steps', 'StepController@index');
Route::get('steps/{id}', 'StepController@view');
Route::get('process_steps', 'StepController@process_steps');
Route::get('steps/show/{id}', 'StepController@show');
Route::post('steps/save', 'StepController@save');
Route::put('steps/save/{id}', 'StepController@update');
Route::post('steps/delete/{id}', 'StepController@delete');


Route::get('elements', 'ElementController@index');
Route::get('elements/show/{id}', 'ElementController@show');
Route::post('elements/save', 'ElementController@save');
Route::put('elements/save/{id}', 'ElementController@update');
Route::post('elements/delete/{id}', 'ElementController@delete');


Route::get('modesAll/{id}', 'ModeController@indexAll');
Route::get('modes/{id}', 'ModeController@index');
Route::get('modes/view/{id}', 'ModeController@view');
Route::get('modes/show/{id}', 'ModeController@show');
Route::post('modes/save', 'ModeController@save');
Route::put('modes/save/{id}', 'ModeController@update');
Route::post('modes/delete/{id}', 'ModeController@delete');

Route::get('currentsAll/{id}', 'CurrentController@indexAll');
Route::get('currents', 'CurrentController@index');
Route::get('currents/{id}', 'CurrentController@view');
Route::get('currents/show/{id}', 'CurrentController@show');
Route::post('currents/save', 'CurrentController@save');
Route::put('currents/save/{id}', 'CurrentController@update');
Route::post('currents/delete/{id}', 'CurrentController@delete');


Route::get('actions', 'ActionController@index');
Route::get('actions/{id}', 'ActionController@view');
Route::get('actions/show/{id}', 'ActionController@show');
Route::post('actions/save', 'ActionController@save');
Route::put('actions/save/{id}', 'ActionController@update');
Route::post('actions/delete/{id}', 'ActionController@delete');


Route::get('fmea/{id}', 'FMEAController@show');
Route::get('fmea-approve/{id}', 'FMEAController@approve');
Route::post('submitFMEA/{id}', 'FMEAController@submitFMEA');
Route::post('updateStatusFMEA', 'FMEAController@updateStatusFMEA');
Route::post('RejectFMEA', 'FMEAController@RejectFMEA');
Route::get('highLevel/{id}', 'FMEAController@highLevel');
Route::get('/fmea_view/{product}', 'FMEAController@view_approval');