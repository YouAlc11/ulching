<?php


class NotificationsController
{
    public function getNotifications()
    {
        session_start();
        if (isset($_SESSION['notifications'])) {
            $notifications = $_SESSION['notifications'];
            $class = 'success';
            if ($notifications['status'] == 0) {
                $class = 'danger';
            }
            $notification = '<div class="alert alert-' . $class . '" role="alert">' . $notifications['msg'] . '</div>';
            unset($_SESSION['notifications']); // Destruir las notificaciones después de obtenerlas
            echo $notification;
        } else {
            echo '';
        }
    }
}