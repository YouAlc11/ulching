<?php
namespace App\Helpers;

class Notifications
{
    public static function AddNoty($message, $status)
    {
        session_start();
        $_SESSION['notifications'] = ['status' => $status, 'msg' => $message];
    }
}

