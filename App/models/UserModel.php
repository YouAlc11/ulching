<?php
namespace App\Models;

use App\Config\Database;

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

    public function __construct($db)
    {
        $this->conn = Database::getConnection();
    }

    // Obtener todos los usuarios
    public function getAll()
    {
        $query = "SELECT * FROM " . $this->table_name;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Obtener un usuario por ID
    public function getById($id)
    {
        $query = "SELECT * FROM " . $this->table_name . " WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
