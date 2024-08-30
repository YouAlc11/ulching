<?php
require_once __DIR__ . '/../Models/UserModel.php';
require_once __DIR__ . '/../Middlewares/UsersMiddleware.php';
require_once __DIR__ . '/../Helpers/Hash.php';
require_once __DIR__ . '/../Helpers/Notifications.php';

use App\Helpers\Hash;
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
        $this->helpers = new Hash();
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
        $idUser = $_POST['user_id'];
        $name = $_POST['name'];
        $middelname = $_POST['middlename'];
        $lastname = $_POST['lastname'];
        $username = $_POST['username'];
        $phonenumber = $_POST['phonenumber'];
        $dateofbirth = $_POST['dateOfBirth'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $fieldsValidate = ['name', 'lastname', 'username', 'phonenumber', 'dateOfBirth', 'email', 'password', 'passwordConfirm'];

        if ($idUser == '') {
            $this->middelware->validateFields($fieldsValidate, $_POST);
            $salt = $this->helpers->saltGenerate();
            $hashPassword = $this->helpers->hashGenerate($salt, $password);

            echo json_encode($this->model->add($name, $middelname, $lastname, $username, $phonenumber, $dateofbirth, $email, $hashPassword, $salt));
        } else {
            if ($password == '') {
                $fieldsValidate = ['name', 'lastname', 'username', 'phonenumber', 'dateOfBirth', 'email'];
                $this->middelware->validateFields($fieldsValidate, $_POST, $idUser);
                echo json_encode($this->model->update($name, $middelname, $lastname, $username, $phonenumber, $dateofbirth, $email, $idUser));
            } else {
                $this->middelware->validateFields($fieldsValidate, $_POST, $idUser);
                $salt = $this->helpers->saltGenerate();
                $hashPassword = $this->helpers->hashGenerate($salt, $password);
                echo json_encode($this->model->update($name, $middelname, $lastname, $username, $phonenumber, $dateofbirth, $email, $idUser, $hashPassword, $salt));
            }

        }

    }

    public function remove($id)
    {
        echo $this->model->remove($id);
    }

    public function active($id)
    {
        echo $this->model->active($id);
    }

    public function getAddressesUser($id)
    {
        echo json_encode($this->model->getAddressesUser($id));
    }

    public function getAddress($id)
    {
        echo json_encode($this->model->getAddress($id));
    }

    public function setAddress()
    {
        $fielsValidate = ['address_line_1', 'city', 'postal_code', 'state', 'country', 'user_id'];
        $this->middelware->validateAdressFlieds($fielsValidate, $_POST);
        $update = $_POST['update'];
        $userId = $_POST['user_id'];
        $addresLine = $_POST['address_line_1'];
        $city = $_POST['city'];
        $postalCode = $_POST['postal_code'];
        $state = $_POST['state'];
        $country = $_POST['country'];
        if ($update == '') {
            echo $this->model->addAddress($userId, $addresLine, $city, $postalCode, $state, $country);
        } else {
            echo $this->model->updateAddress($userId, $addresLine, $city, $postalCode, $state, $country, $update);
        }
    }

    public function deleteAddress($id)
    {
        echo $this->model->deleteAddress($id);
    }

}
