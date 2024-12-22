<?php
// Настройте вашу почту
$toEmail = "your-email@gmail.com"; // Замените на ваш адрес Gmail
$subject = "Writing Task Submission";

// Убедитесь, что файл загружен
if (isset($_FILES['writingTask']) && $_FILES['writingTask']['error'] == UPLOAD_ERR_OK) {
    $fileTmpPath = $_FILES['writingTask']['tmp_name'];
    $fileName = $_FILES['writingTask']['name'];
    $fileSize = $_FILES['writingTask']['size'];
    $fileType = $_FILES['writingTask']['type'];

    // Проверьте расширение файла
    $allowedFileTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!in_array($fileType, $allowedFileTypes)) {
        die("Error: Only Word files (.doc, .docx) are allowed.");
    }

    // Получить данные из формы
    $studentName = htmlspecialchars($_POST['studentName']);
    $studentEmail = htmlspecialchars($_POST['studentEmail']);

    // Содержимое письма
    $message = "Name: $studentName\nEmail: $studentEmail\n\nAttached is the student's writing task.";

    // Заголовки письма
    $headers = "From: $studentEmail";

    // Вложение
    $boundary = md5("boundary");
    $headers .= "\r\nMIME-Version: 1.0\r\nContent-Type: multipart/mixed; boundary=\"$boundary\"";

    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
    $body .= $message . "\r\n\r\n";
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: $fileType; name=\"$fileName\"\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$fileName\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode(file_get_contents($fileTmpPath))) . "\r\n";
    $body .= "--$boundary--";

    // Отправка письма
    if (mail($toEmail, $subject, $body, $headers)) {
        echo "File sent successfully!";
    } else {
        echo "Error: Could not send the email.";
    }
} else {
    echo "Error: File upload failed.";
}
?>