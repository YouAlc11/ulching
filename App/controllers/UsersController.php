<?php

class UsersController {
    public function index() {
        echo '<h2>Página de Usuarios</h2>';
        echo '<p>Listado de usuarios.</p>';
    }

    public function getUserId($id) {
        echo "<h2>Usuario con ID: $id</h2>";
        echo "<p>Detalles del usuario con ID $id.</p>";
    }

    public function Add() {
        echo '<h2>Añadir Usuario</h2>';
        echo '<p>Formulario para añadir un nuevo usuario.</p>';
    }
}
