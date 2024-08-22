<?php
require_once __DIR__ . '/../Models/UserModel.php';
use App\Models\UserModel;
class UsersController
{
    private $model;
    public function __construct()
    {
        $this->model = new UserModel();
    }
    public function index()
    {
        echo json_encode($this->model->getAll());
    }

    public function getUserId($id)
    {
        if ($id == 0) {
            echo $this->index();
        } else {
            echo json_encode($this->model->getById($id));
        }
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
