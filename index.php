<?php

require_once __DIR__ . '/vendor/Core/Route.php';

// Definir las rutas
Route::get('/users', 'UsersController@index');
Route::get('/users/(:num)', 'UsersController@getUserId');
Route::post('/users/add', 'UsersController@Add');
Route::view('/users/redirectProductos', __DIR__ . '/App/views/productos/listadoView.php');

// Despachar la ruta
Route::dispatch();
