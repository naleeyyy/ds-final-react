<?php
    // header("Location: query.php");
    header('Access-Control-Allow-Origin: *');
    
    include_once('config.php');

    if(isset($_POST['submit'])) {
        $name = $_POST["name"];
        $email = $_POST['email'];
        $text = $_POST['text'];
    }

    $sql = "INSERT IGNORE INTO contact (name, email, text) VALUES (:name, :email, :text);";

    $newUser = $con->prepare($sql);

    $newUser->bindParam(':name', $text);
    $newUser->bindParam(':email', $email);
    $newUser->bindParam(':text', $text);

    $newUser->execute([
        ':name' => $name,
        ':email' => $email,
        ':text' => $text,
    ]);

    // echo "Sucess";
?>
