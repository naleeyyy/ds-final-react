<?php
    include_once("config.php");

    $title = $_POST["title"];
    $text = $_POST["text"];
    $id = $_POST["ID"];

    $sql = "UPDATE pages SET title = :title, text = :text WHERE id = :id;";

    try {
        $prep = $con->prepare($sql);
        
        $prep->bindParam("title", $title);
        $prep->bindParam("text", $text);
        $prep->bindParam(":id", $id);
        
        $prep->execute();
        echo "sucess page $id updated";
    }
    catch (Exception $e) {
        echo $e;
    }

?>