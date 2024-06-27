<?php
// <?php
    $conn = mysqli_connect('localhost', 'root', '', 'reachrightsite');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
        header("Location: index-after-login.html");
        exit();
    } else {
        echo "Login failed. Please check your email and password.";
    }

    $conn->close();
?>