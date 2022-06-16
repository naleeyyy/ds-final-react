<?php
    include_once('config.php');
    
    $id = $_POST['delete'];
    
    $sql = "DELETE FROM pages WHERE ID = :id;";
    
    try {
        $prep = $con->prepare($sql);
        $prep->bindParam(":id", $id);
        $prep->execute();
        error_log("Deleted id: $id");
        // echo "Deleted id: $id";
    } 
    catch (Exception $e) {
        echo $e;
    }
?>