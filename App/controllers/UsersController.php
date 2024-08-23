<?php
require_once __DIR__ . '/../Models/UserModel.php';
require_once __DIR__ . '/../Middlewares/UsersMiddleware.php';
require_once __DIR__ . '/../Helpers/Helpers.php';

use App\Helpers\Helpers;
use App\Models\UserModel;
use App\Middlewares\UsersMiddleware;
class UsersController
{
    private $model;
    private $middelware;

    private $helpers;
    public function __construct()
    {
        $this->model = new UserModel();
        $this->middelware = new UsersMiddleware();
        $this->helpers = new Helpers();
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

    public function add()
    {
        $fieldsValidate = ['name', 'lastname', 'username', 'phonenumber', 'dateOfBirth', 'email', 'password', 'passwordConfirm'];
        $reqmiddelware = $this->middelware->validateFields($fieldsValidate, $_POST);
        if ($reqmiddelware['status'] == 1) {
            $name = $_POST['name'];
            $middelname = $_POST['middlename'];
            $lastname = $_POST['lastname'];
            $username = $_POST['username'];
            $phonenumber = $_POST['phonenumber'];
            $dateofbirth = $_POST['dateOfBirth'];
            $email = $_POST['email'];
            $password = $_POST['password'];
            $salt = $this->helpers->saltGenerate();
            $hashPassword = $this->helpers->hashGenerate($salt, $password);

            echo json_encode($this->model->add($name, $middelname, $lastname, $username, $phonenumber, $dateofbirth, $email, $hashPassword, $salt));
        } else {
            echo json_encode($reqmiddelware);
        }

    }

    public function remove($id)
    {
        echo json_encode($this->model->remove($id));
    }

    public function pageViews()
    {

        echo json_encode(['numero_vistas' => '12,343']);
    }
}
