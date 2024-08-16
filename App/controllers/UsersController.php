<?php

class UsersController
{
    public function index()
    {
        echo '<h2>Mensaje desde el controlador metodo index</h2>';
    }

    public function getUserId($id)
    {
        echo "<h2>Usuario con ID: $id</h2>";
        echo "<p>Detalles del usuario con ID $id.</p>";
    }

    public function Add()
    {

        echo '<p>Formulario para añadir un nuevo usuario.</p>';
    }
}
