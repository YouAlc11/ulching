<?php
namespace App\Models;
require_once __DIR__ . '/../Config/Database.php';
class UserModel
{
    private $conn;
    private $table_name = "users";
    private $table_address = "user_addresses";

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

    public function update($nombre, $middelname, $lastname, $username, $phonenumber, $dateofbirth, $email, $idUser, $password = '', $salt = '')
    {
        $strpassword = '';
        if ($password != '') {
            $strpassword = " password_salt = :salt, password_hash = :pass,";
        }
        $query = "UPDATE $this->table_name  SET username = :username, email = :email, phone_number = :phone_number,  first_name = :firstname, last_name = :lastname, middle_name = :middlename, date_of_birth = :date $strpassword
                    WHERE id = :id";
        $queryPrepare = $this->conn->prepare($query);
        $queryPrepare->bindParam(':username', $username, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':email', $email, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':phone_number', $phonenumber, \PDO::PARAM_STR);
        if ($password != '') {
            $queryPrepare->bindParam(':salt', $salt, \PDO::PARAM_STR);
            $queryPrepare->bindParam(':pass', $password, \PDO::PARAM_STR);
        }

        $queryPrepare->bindParam(':firstname', $nombre, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':lastname', $lastname, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':middlename', $middelname, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':date', $dateofbirth, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':id', $idUser, \PDO::PARAM_STR);

        return $queryPrepare->execute();
    }
    public function remove($id)
    {
        $query = "UPDATE " . $this->table_name . " SET is_active  = 0 WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, \PDO::PARAM_STR);
        return $stmt->execute();
    }

    public function active($id)
    {
        $query = "UPDATE " . $this->table_name . " SET is_active  = 1 WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, \PDO::PARAM_STR);
        return $stmt->execute();
    }

    public function getAddressesUser($id)
    {
        $query = "SELECT * FROM " . $this->table_address . " WHERE status = 1 AND user_id = :id ORDER BY address_id DESC";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, \PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function getAddress($id)
    {
        $query = "SELECT * FROM " . $this->table_address . " WHERE  address_id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, \PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function addAddress($userId, $addresLine, $city, $postalCode, $state, $country)
    {
        $query = "INSERT INTO $this->table_address (user_id,address_line_1, city, state, postal_code, country) 
                VALUES (:userId, :addressLine, :city, :state, :postalCode, :country)";
        $queryPrepare = $this->conn->prepare($query);
        $queryPrepare->bindParam(':userId', $userId, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':addressLine', $addresLine, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':city', $city, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':state', $state, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':postalCode', $postalCode, \PDO::PARAM_STR);
        $queryPrepare->bindParam(':country', $country, \PDO::PARAM_STR);

        return $queryPrepare->execute();
    }

    public function updateAddress($userId, $addresLine, $city, $postalCode, $state, $country, $update)
    {
        $query = "UPDATE " . $this->table_address . " SET address_line_1  = :addressLine, city=:city, state=:state, postal_code = :postalCode, country = :country  WHERE address_id = :update";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':addressLine', $addresLine, \PDO::PARAM_STR);
        $stmt->bindParam(':city', $city, \PDO::PARAM_STR);
        $stmt->bindParam(':state', $state, \PDO::PARAM_STR);
        $stmt->bindParam(':postal_code', $postalCode, \PDO::PARAM_STR);
        $stmt->bindParam(':country', $country, \PDO::PARAM_STR);
        $stmt->bindParam(':update', $update, \PDO::PARAM_STR);

        return $stmt->execute();
    }

    public function deleteAddress($id)
    {
        $query = "UPDATE " . $this->table_address . " SET status  = 0 WHERE address_id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id, \PDO::PARAM_STR);
        return $stmt->execute();
    }
}
