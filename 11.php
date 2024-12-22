<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['videoFile'])) {
    $videoFile = $_FILES['videoFile'];

    // Проверяем ошибки при загрузке файла
    if ($videoFile['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/';
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0755, true); // Создаем папку, если она отсутствует
        }

        $filePath = $uploadDir . basename($videoFile['name']);
        
        // Перемещаем загруженный файл в папку uploads
        if (move_uploaded_file($videoFile['tmp_name'], $filePath)) {
            // Настройки Telegram Bot
            $telegramToken = '7637863111:AAHDrpmHLvJD6jHF56JQCiENfL8brYHyosc'; // Замените на токен вашего бота
            $chatId = '1160100148'; // Замените на ваш Telegram chat ID (можно узнать через ID бота @userinfobot)

            // Отправляем видео в Telegram
            $url = "https://api.telegram.org/bot$telegramToken/sendVideo";

            $postFields = [
                'chat_id' => $chatId,
                'video' => new CURLFile($filePath)
            ];

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            
            $response = curl_exec($ch);

            if ($response === false) {
                echo "Ошибка отправки файла в Telegram: " . curl_error($ch);
            } else {
                echo "Видео успешно отправлено в Telegram!";
            }

            curl_close($ch);
        } else {
            echo "Ошибка при перемещении файла.";
        }
    } else {
        echo "Ошибка загрузки файла: " . $videoFile['error'];
    }
} else {
    echo "Файл не загружен.";
}
