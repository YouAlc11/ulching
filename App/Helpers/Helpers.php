<?php
namespace App\Helpers;

class Helpers
{
    public function hashGenerate($salt, $password)
    {
        $newPasswors = $salt . $password;
        $hash = password_hash($newPasswors, PASSWORD_BCRYPT);
        return $hash;
    }

    public function saltGenerate()
    {
        $salt = bin2hex(random_bytes(8));
        return $salt;
    }

    public function passwordVerification($hash, $password)
    {
        if (password_verify($hash, $password)) {
            return true;
        } else {
            return false;
        }
    }
}