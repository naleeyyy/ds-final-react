<?php
    include_once('config.php');

    $username = $_POST["user"];
    $password = $_POST["pass"];

    $sql = "SELECT * FROM users WHERE username = :username AND password = :password;";

    $prep = $con->prepare($sql);
    
    $prep->bindParam(":username", $username);
    $prep->bindParam(":password", $password);

    $prep->execute();

    $data = $prep->fetchAll(PDO::FETCH_ASSOC);
    
    if ($data) {
        echo json_encode(true);
    }
    else {
        echo json_encode(false);
    }
?>