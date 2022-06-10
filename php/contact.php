<?php  
    include_once('config.php');

    $name = $_POST["name"];
    $email = $_POST['email'];
    $text = $_POST['text'];
    
    $sql = "INSERT IGNORE INTO contact (name, email, text) VALUES (:name, :email, :text);";

    $prep = $con->prepare($sql);

    $prep->bindParam(':name', $name);
    $prep->bindParam(':email', $email);
    $prep->bindParam(':text', $text);

    $prep->execute();

    error_log("Sucess, added contact message to database.");
    echo 'Sucess';
?>
