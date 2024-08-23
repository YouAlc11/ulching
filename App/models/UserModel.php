<?php
namespace App\Models;
require_once __DIR__ . '/../Config/Database.php';
class UserModel
{
    private $conn;
    private $table_name = "users";

    public $id;
    public $code;
    public $name;
    public $surname;
    public $age;
    public $created_at;
    public $updated_at;

    public function __construct()
    {
        $connect = new \App\Config\Database();
        $this->conn = $connect->getConnection();
    }

    // Obtener todos los usuarios
    public function getAll()
    {
        $query = "SELECT * FROM " . $this->table_name . " ORDER BY id DESC";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    // Obtener un usuario por ID
    public function getById($id)
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE id = :id ";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, \PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function add($nombre, $middelname, $lastname, $username, $phonenumber, $dateofbirth, $email, $password, $salt)
    {
        $query = "INSERT INTO $this->table_name (username, email, phone_number,password_salt, password_hash, first_name, last_name, middle_name, date_of_birth, is_active) 
                    VALUES (:username, :email, :phone_number, :salt, :pass, :firstname, :lastname, :middlename, :date, 1)";
        $queryPrepare = $this->conn->prepare($query);
        $queryPrepare->bindParam(':username', $username, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':email', $email, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':phone_number', $phonenumber, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':salt', $salt, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':pass', $password, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':firstname', $nombre, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':lastname', $lastname, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':middlename', $middelname, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':date', $dateofbirth, \PDO::PARAM_STR);

        return $queryPrepare->execute();
    }

    public function remove($id)
    {
        $query = "UPDATE " . $this->table_name . " SET is_active  = 0 WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, \PDO::PARAM_STR);
        if ($stmt->execute()) {
            return ["status" => 1, "msg" => "Se ha eliminado correctamente."];
        } else {
            return ["status" => 0, "msg" => "Ha ocurrido un error, intentelo mas tarde."];
        }
    }
}
