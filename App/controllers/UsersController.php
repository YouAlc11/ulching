<?php

class UsersController
{
    public function index()
    {
        $usuarios = [
            [
                "numero" => "1",
                "nombre" => "Joel",
                "apellido" => "Alcantara"
            ],
            [
                "numero" => "2",
                "nombre" => "María",
                "apellido" => "Gómez"
            ]

        ];
        echo json_encode($usuarios);
    }

    public function getUserId($id)
    {
        $usuarios = [
            [
                "numero" => "1",
                "nombre" => "Joel",
                "apellido" => "Alcantara"
            ],
            [
                "numero" => "2",
                "nombre" => "María",
                "apellido" => "Gómez"
            ]

        ];
        $usuario = $usuarios;
        if ($id != 0) {
            $usuario = [];
            foreach ($usuarios as $data) {
                if ($id == $data['numero']) {
                    array_push($usuario, $data);
                }
                array_push($usuario);
            }
        }

        echo json_encode($usuario);
    }

    public function Add()
    {

        echo '<p>Formulario para añadir un nuevo usuario.</p>';
    }

    public function pageViews()
    {

        echo json_encode(['numero_vistas' => '12,343']);
    }
}
