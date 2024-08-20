<?php

class Database
{
    private $conn;

    public function __construct()
    {
        $this->loadEnv();
        $this->conn = null;
    }

    private function loadEnv()
    {
        if (!file_exists(__DIR__ . '/../../.env')) {
            throw new Exception(".env file not found");
        }

        $env = parse_ini_file(__DIR__ . '/../../.env');

        foreach ($env as $key => $value) {
            putenv("$key=$value");
        }
    }

    public static function getConnection()
    {
        try {
            $conn = new PDO(
                "mysql:host=" . getenv('DB_HOST') . ";dbname=" . getenv('DB_NAME'),
                getenv('DB_USER'),
                getenv('DB_PASS')
            );
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $conn;
    }
}
