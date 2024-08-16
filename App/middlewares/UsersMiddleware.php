<?php

class UsersMiddleware {
    private $conn;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function handle($request, $next) {
        $code = $request['code'];

        $query = "SELECT * FROM users WHERE code = :code";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":code", $code);
        $stmt->execute();

        if($stmt->rowCount() > 0) {
            echo json_encode(["message" => "User code already exists."]);
            return false;
        }

        return $next($request);
    }
}
