<?php
    include_once('config.php');
    
    $id = $_POST['ID'];
    
    $sql = "SELECT * FROM pages WHERE ID = :id;";
    
    try {
        $prep = $con->prepare($sql);
        $prep->bindParam(":id", $id);
        $prep->execute();
        $data = $prep->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($data);
    } 
    catch (Exception $e) {
        echo $e;
    }
?>