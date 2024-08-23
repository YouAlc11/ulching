<?php
namespace App\Middlewares;
require_once __DIR__ . '/../Config/Database.php';
class UsersMiddleware
{
    private $conn;
    private $table_name = "users";

    public function __construct()
    {
        $connect = new \App\Config\Database();
        $this->conn = $connect->getConnection();
    }

    public function validateFields($requiredFields, $postData)
    {
        $status = 1;
        $msg = '';
        foreach ($requiredFields as $field) {
            if (!isset($postData[$field]) || $postData[$field] === null || $postData[$field] === '') {
                // Devolver respuesta JSON con error
                $status = 0;
                $msg .= "El campo $field es obligatorio. <br>";

            }
        }

        if ($this->validateUserName($postData['username'])) {

            $status = 0;
            $msg .= "El nombre de usuario " . $postData['username'] . " ya se encuentra registrado. <br>";
        }

        if ($this->validatePhoneNumber($postData['phonenumber'])) {
            $status = 0;
            $msg .= "El número teléfonico " . $postData['phonenumber'] . " ya se encuentra registrado. <br>";
        }

        if ($this->validateEmail($postData['email'])) {

            $status = 0;
            $msg .= "El correo electrónico " . $postData['email'] . " ya se encuentra registrado. <br>";
        }


        if (!$this->validatePassword($postData['password'], $postData['passwordConfirm'])) {

            $status = 0;
            $msg .= "Tus contraseñas deben ser iguales. <br>";
        }

        return [
            'status' => $status,
            'msg' => $msg
        ];
    }

    public function validateUserName($username)
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE username = :username";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':username', $username, \PDO::PARAM_STR);
        $stmt->execute();

        // Verificar si hay resultados
        if ($stmt->rowCount() > 0) {
            return true;  // Si hay al menos una fila, retorna true
        } else {
            return false; // Si no hay filas, retorna false
        }
    }

    public function validatePhoneNumber($phonenumber)
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE phone_number = :phone_number";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':phone_number', $phonenumber, \PDO::PARAM_STR);
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            return true;  // Si hay al menos una fila, retorna true
        } else {
            return false; // Si no hay filas, retorna false
        }
    }

    public function validateEmail($email)
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE email  = :mail ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':mail', $email, \PDO::PARAM_STR);
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            return true;  // Si hay al menos una fila, retorna true
        } else {
            return false; // Si no hay filas, retorna false
        }
    }

    public function validatePassword($password, $passwordValidate)
    {
        if ($password == $passwordValidate) {
            return true;
        } else {
            return false;
        }
    }

}
