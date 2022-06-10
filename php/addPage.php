<?php
    include_once('config.php');

    $title = $_POST['title'];
    $text = $_POST['text'];
    
    $sql = "INSERT IGNORE INTO pages (title, text) VALUES (:title, :text);";

    $prep = $con->prepare($sql);

    $prep->bindParam(':title', $title);
    $prep->bindParam(':text', $text);

    $prep->execute();

    error_log("Sucess, added page to database.");
    echo 'Sucess';
?>