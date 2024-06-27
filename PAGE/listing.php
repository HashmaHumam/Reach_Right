<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    // $category_id = $_POST['category_id'];
    // $keywords = $_POST['keywords'];
    $address = $_POST['address'];
    // $latitude = $_POST['latitude'];
    // $longitude = $_POST['longitude'];
    $location_id = $_POST['location_id'];
    $phone_number = $_POST['phone_number'];
    $email = $_POST['email'];
    $website = $_POST['website'];
    $facebook = $_POST['Facebook'];
    $twitter = $_POST['Twitter'];
    $instagram = $_POST['Instagram'];
    $whatsapp = $_POST['Whatsapp'];


    try {
        $pdo = new PDO('mysql:host=localhost;dbname=reachrightsite', 'root', '');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $pdo->prepare("INSERT INTO business (name, address, location_id, phone_number, email, website, facebook, twitter, instagram, whatsapp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$name, $address, $location_id, $phone_number, $email, $website, $facebook, $twitter, $instagram, $whatsapp]);

        echo "Listing saved successfully.";
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>
