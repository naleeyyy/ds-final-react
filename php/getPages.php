<?php
    include_once('config.php');

    $sql = "SELECT * FROM pages";

    $prep = $con->prepare($sql);
    $prep->execute();

    $data = $prep->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);
?>