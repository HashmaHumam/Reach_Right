<?php
if (isset($_POST['log-submit-btn'])) {
    $conn = mysqli_connect ('localhost','root', '','reachrightsite');
    
    
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
    
        $id = $_POST['id'];
        $first_name = $_POST['first_name'];
        $second_name = $_POST['second_name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
    
        $sql = "INSERT INTO users (id,first_name,second_name,email, password) 
                VALUES ('$id', '$first_name', '$second_name', '$email', '$password')";
    
        if ($conn->query($sql) === TRUE) {
            echo "ammo htto hatri";
            exit();
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    
        $conn->close();
    
}
// if (isset($_POST['login'])) {
//     $conn = mysqli_connect('localhost', 'root', '', 'sasaITT');

//     if ($conn->connect_error) {
//         die("Connection failed: " . $conn->connect_error);
//     }

//     if (isset($_POST['staffID']) && isset($_POST['password'])) {
//         $staffID = $_POST['staffID'];
//         $password = $_POST['password'];

//         $sql = "SELECT * FROM staffmem WHERE staffID = '$staffID' AND password = '$password'";
//         $result = mysqli_query($conn, $sql);

//         if (mysqli_num_rows($result) == 1) {
//             header("Location: home.html");
//             exit();
//         } else {
//             echo "Login failed. Please check your staff ID and password.";
//         }
//     } else {
//         echo "Invalid input. Please provide both staff ID and password.";
//     }

//     $conn->close();
// }

if (isset($_POST['log-submit-btn'])) {
    $conn = mysqli_connect('localhost', 'root', '', 'reachrightsite');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) == 1) {
        header("Location: index2.html");
        exit();
    } else {
        echo "Login failed. Please check your email and password.";
    }

    $conn->close();
}
?>