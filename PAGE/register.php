<?php
 {
    $conn = mysqli_connect ('localhost','root', '','reachrightsite');
    
    
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
    
        // $id = $_POST['id'];
        $first_name = $_POST['first_name'];
        $second_name = $_POST['second_name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
    
        $sql = "INSERT INTO users (first_name,second_name,email, password) 
                VALUES ( '$first_name', '$second_name', '$email', '$password')";
    
        if ($conn->query($sql) === TRUE) {
            header("Location: index-after-login.html");
            exit();
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    
        $conn->close();
    
}
?>