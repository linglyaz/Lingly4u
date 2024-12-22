<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'lingly4u@gmail.com'; // Replace with your email address
    $subject = 'New Task Submission';
    
    // Get form data
    $name = htmlspecialchars($_POST['studentName']);
    $email = htmlspecialchars($_POST['studentEmail']);
    
    // Prepare email body
    $message = "You have received a new task submission.\n\n";
    $message .= "Name: $name\n";
    $message .= "Email: $email\n";

    // Attachments
    $attachments = [];
    foreach ($_FILES as $file) {
        if ($file['error'] === UPLOAD_ERR_OK) {
            $attachments[] = [
                'tmp_name' => $file['tmp_name'],
                'name' => $file['name'],
                'type' => $file['type']
            ];
        }
    }

    // Use PHPMailer for sending email with attachments
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    require 'PHPMailer/Exception.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'lingly4u@gmail.com'; // Replace with your email
        $mail->Password = 'armaazsa2024'; // Replace with your email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom('lingly4u@gmail.com', 'Task Submissions');
        $mail->addAddress($to);

        // Add attachments
        foreach ($attachments as $attachment) {
            $mail->addAttachment($attachment['tmp_name'], $attachment['name']);
        }

        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body = $message;

        $mail->send();
        echo 'Submission successful. Thank you!';
    } catch (Exception $e) {
        echo "Submission failed. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>