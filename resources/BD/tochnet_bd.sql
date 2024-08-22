-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-08-2024 a las 00:28:58
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tochnet_bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `multi_factor_auth`
--

CREATE TABLE `multi_factor_auth` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `mfa_type` varchar(50) DEFAULT NULL,
  `mfa_secret` varchar(255) DEFAULT NULL,
  `is_enabled` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `multi_factor_auth`
--

INSERT INTO `multi_factor_auth` (`id`, `user_id`, `mfa_type`, `mfa_secret`, `is_enabled`) VALUES
(1, 1, 'TOTP', 'secret_key_1', 1),
(2, 2, 'TOTP', 'secret_key_2', 1),
(3, 3, 'TOTP', 'secret_key_3', 1),
(4, 4, 'TOTP', 'secret_key_4', 1),
(5, 5, 'TOTP', 'secret_key_5', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions`
--

CREATE TABLE `permissions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `module` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `description`, `module`) VALUES
(1, 'can_create_user', 'Permission to create users', 'User Management'),
(2, 'can_edit_user', 'Permission to edit users', 'User Management'),
(3, 'can_delete_user', 'Permission to delete users', 'User Management'),
(4, 'can_view_user', 'Permission to view users', 'User Management'),
(5, 'can_manage_content', 'Permission to manage content', 'Content Management');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `priority_level` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`, `priority_level`) VALUES
(1, 'Admin', 'Administrator with full access', 1),
(2, 'Editor', 'Can edit content', 2),
(3, 'Viewer', 'Can view content only', 3),
(4, 'Moderator', 'Can manage user content', 2),
(5, 'Contributor', 'Can contribute content', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role_permissions`
--

CREATE TABLE `role_permissions` (
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `role_permissions`
--

INSERT INTO `role_permissions` (`role_id`, `permission_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 2),
(3, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `password_salt` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `profile_picture_url` text DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `address_id` int(11) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `is_verified` tinyint(1) DEFAULT 0,
  `last_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `login_attempts` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `role_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `phone_number`, `password_hash`, `password_salt`, `first_name`, `last_name`, `middle_name`, `date_of_birth`, `gender`, `profile_picture_url`, `bio`, `address_id`, `is_active`, `is_verified`, `last_login`, `login_attempts`, `created_at`, `updated_at`, `role_id`) VALUES
(1, 'admin', 'admin@example.com', '1234567890', 'hashed_password_1', 'salt_1', 'Admin', 'User', NULL, NULL, NULL, 'levy.jpeg', NULL, NULL, 1, 0, '2024-08-22 15:46:51', 0, '2024-08-22 15:36:46', '2024-08-22 15:46:51', 1),
(2, 'editor', 'editor@example.com', '1234567891', 'hashed_password_2', 'salt_2', 'Editor', 'User', NULL, NULL, NULL, 'mujer.jpg', NULL, NULL, 0, 0, '2024-08-22 15:48:09', 0, '2024-08-22 15:36:46', '2024-08-22 15:48:09', 2),
(3, 'viewer', 'viewer@example.com', '1234567892', 'hashed_password_3', 'salt_3', 'Viewer', 'User', NULL, NULL, NULL, 'mujer.jpg', NULL, NULL, 1, 0, '2024-08-22 15:46:04', 0, '2024-08-22 15:36:46', '2024-08-22 15:46:04', 3),
(4, 'moderator', 'moderator@example.com', '1234567893', 'hashed_password_4', 'salt_4', 'Moderator', 'User', NULL, NULL, NULL, 'profile-joel.jpeg', NULL, NULL, 0, 0, '2024-08-22 15:48:13', 0, '2024-08-22 15:36:46', '2024-08-22 15:48:13', 4),
(5, 'contributor', 'contributor@example.com', '1234567894', 'hashed_password_5', 'salt_5', 'Contributor', 'User', NULL, NULL, NULL, 'profile-joel.jpeg', NULL, NULL, 1, 0, '2024-08-22 15:47:02', 0, '2024-08-22 15:36:46', '2024-08-22 15:47:02', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_addresses`
--

CREATE TABLE `user_addresses` (
  `address_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `address_line_1` varchar(255) DEFAULT NULL,
  `address_line_2` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `is_primary` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user_addresses`
--

INSERT INTO `user_addresses` (`address_id`, `user_id`, `address_line_1`, `address_line_2`, `city`, `state`, `postal_code`, `country`, `is_primary`) VALUES
(1, 1, '123 Admin St', '', 'Admin City', 'Admin State', '00001', 'Admin Country', 1),
(2, 2, '456 Editor St', '', 'Editor City', 'Editor State', '00002', 'Editor Country', 1),
(3, 3, '789 Viewer St', '', 'Viewer City', 'Viewer State', '00003', 'Viewer Country', 1),
(4, 4, '101 Moderator St', '', 'Moderator City', 'Moderator State', '00004', 'Moderator Country', 1),
(5, 5, '102 Contributor St', '', 'Contributor City', 'Contributor State', '00005', 'Contributor Country', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_logs`
--

CREATE TABLE `user_logs` (
  `log_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `action` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `ip_address` varchar(45) DEFAULT NULL,
  `device_info` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user_logs`
--

INSERT INTO `user_logs` (`log_id`, `user_id`, `action`, `timestamp`, `ip_address`, `device_info`) VALUES
(1, 1, 'Logged in', '2024-08-22 15:36:46', '192.168.1.1', 'Windows 10 - Chrome'),
(2, 2, 'Edited profile', '2024-08-22 15:36:46', '192.168.1.2', 'Windows 10 - Firefox'),
(3, 3, 'Viewed dashboard', '2024-08-22 15:36:46', '192.168.1.3', 'MacOS - Safari'),
(4, 4, 'Moderated content', '2024-08-22 15:36:46', '192.168.1.4', 'Linux - Chrome'),
(5, 5, 'Contributed content', '2024-08-22 15:36:46', '192.168.1.5', 'Android - Chrome');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_sessions`
--

CREATE TABLE `user_sessions` (
  `session_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `device_info` text DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `login_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `logout_time` timestamp NULL DEFAULT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user_sessions`
--

INSERT INTO `user_sessions` (`session_id`, `user_id`, `device_info`, `ip_address`, `login_time`, `logout_time`, `token`) VALUES
(1, 1, 'Windows 10 - Chrome', '192.168.1.1', '2024-08-22 15:36:46', NULL, 'token_1'),
(2, 2, 'Windows 10 - Firefox', '192.168.1.2', '2024-08-22 15:36:46', NULL, 'token_2'),
(3, 3, 'MacOS - Safari', '192.168.1.3', '2024-08-22 15:36:46', NULL, 'token_3'),
(4, 4, 'Linux - Chrome', '192.168.1.4', '2024-08-22 15:36:46', NULL, 'token_4'),
(5, 5, 'Android - Chrome', '192.168.1.5', '2024-08-22 15:36:46', NULL, 'token_5');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `multi_factor_auth`
--
ALTER TABLE `multi_factor_auth`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_mfa_user` (`user_id`);

--
-- Indices de la tabla `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `role_permissions`
--
ALTER TABLE `role_permissions`
  ADD PRIMARY KEY (`role_id`,`permission_id`),
  ADD KEY `fk_role_permission_permission` (`permission_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone_number` (`phone_number`),
  ADD KEY `fk_role` (`role_id`);

--
-- Indices de la tabla `user_addresses`
--
ALTER TABLE `user_addresses`
  ADD PRIMARY KEY (`address_id`),
  ADD KEY `fk_user_address_user` (`user_id`);

--
-- Indices de la tabla `user_logs`
--
ALTER TABLE `user_logs`
  ADD PRIMARY KEY (`log_id`),
  ADD KEY `fk_user_log_user` (`user_id`);

--
-- Indices de la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `fk_user_role_role` (`role_id`);

--
-- Indices de la tabla `user_sessions`
--
ALTER TABLE `user_sessions`
  ADD PRIMARY KEY (`session_id`),
  ADD KEY `fk_user_session_user` (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `multi_factor_auth`
--
ALTER TABLE `multi_factor_auth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `user_addresses`
--
ALTER TABLE `user_addresses`
  MODIFY `address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `user_logs`
--
ALTER TABLE `user_logs`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `user_sessions`
--
ALTER TABLE `user_sessions`
  MODIFY `session_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `multi_factor_auth`
--
ALTER TABLE `multi_factor_auth`
  ADD CONSTRAINT `fk_mfa_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `role_permissions`
--
ALTER TABLE `role_permissions`
  ADD CONSTRAINT `fk_role_permission_permission` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`),
  ADD CONSTRAINT `fk_role_permission_role` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_role` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Filtros para la tabla `user_addresses`
--
ALTER TABLE `user_addresses`
  ADD CONSTRAINT `fk_user_address_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `user_logs`
--
ALTER TABLE `user_logs`
  ADD CONSTRAINT `fk_user_log_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `fk_user_role_role` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `fk_user_role_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `user_sessions`
--
ALTER TABLE `user_sessions`
  ADD CONSTRAINT `fk_user_session_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
