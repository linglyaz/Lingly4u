<?php
$host = 'localhost'; // Хост базы данных
$dbname = 'user_system'; // Имя базы данных
$username = 'root'; // Имя пользователя MySQL
$password = ''; // Пароль MySQL

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Ошибка подключения к базе данных: " . $e->getMessage());
}
?>
