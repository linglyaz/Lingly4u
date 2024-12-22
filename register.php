<?php
require 'db.php'; // Include the database connection file

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']); // Sanitize the username input
    $password = trim($_POST['password']); // Sanitize the password input

    // Check if the username is already taken
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);

    if ($stmt->rowCount() > 0) {
        $error = "Username is already taken. Please choose another one.";
    } else {
        // Hash the password and store it securely
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);

        // Insert the new user into the database
        $stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
        if ($stmt->execute([$username, $hashed_password])) {
            $success = "Registration successful! <a href='index.php'>Click here to login</a>";
        } else {
            $error = "Something went wrong. Please try again.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Register</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="register.php" method="POST">
        <h2>Register</h2>
        <?php if (isset($error)) echo "<p style='color:red;'>$error</p>"; ?>
        <?php if (isset($success)) echo "<p style='color:green;'>$success</p>"; ?>
        <input type="text" name="username" placeholder="Enter your username" required>
        <input type="password" name="password" placeholder="Enter your password" required>
        <button type="submit">Register</button>
        <p>Already have an account? <a href="index.php">Login here</a></p>
    </form>
</body>
</html>
