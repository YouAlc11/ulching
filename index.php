<?php

require_once __DIR__ . '/vendor/Core/Route.php';

// Definir las rutas
Route::get('/users', 'UsersController@index');
Route::get('/users/(:num)', 'UsersController@getUserId');

Route::get('/usersViews', 'UsersController@pageViews');

Route::post('/users/add', 'UsersController@Add');
Route::view('/users/redirectProductos', __DIR__ . '/App/views/layout/Topbar.js');
Route::get('/template/table', 'UsersController@getUserId');

// Despachar la ruta
Route::dispatch();
