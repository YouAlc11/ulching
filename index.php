<?php

require_once __DIR__ . '/vendor/Core/Route.php';

// Definir las rutas
Route::get('/users', 'UsersController@index');
Route::get('/users/(:num)', 'UsersController@getUserId');
Route::get('/users/delete/(:num)', 'UsersController@remove');
Route::get('/users/active/(:num)', 'UsersController@active');

Route::get('/users/adress/(:num)', 'UsersController@getAddressesUser');
Route::get('/address/delete/(:num)', 'UsersController@deleteAddress');
Route::post('/users/adress', 'UsersController@setAddress');
Route::get('/address/(:num)', 'UsersController@getAddress');

Route::post('/users', 'UsersController@add');
Route::post('/users/add', 'UsersController@Add');
Route::view('/users/redirectProductos', __DIR__ . '/App/views/layout/Topbar.js');


Route::get('/notifications', 'NotificationsController@getNotifications');

// Despachar la ruta
Route::dispatch();
