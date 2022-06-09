<?php
    header('Access-Control-Allow-Origin: *');
    
    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'blog';

    try {
        $con = new PDO("mysql:host=$host", $user, $pass);
    } 
    catch (Exception $e) {
        echo $e;
    }

    function sql(PDO $con, string $sql) {
        try {
            $con->exec($sql);
            return true;
        }
        catch (Exception $e) {
            return $e;
        }
    }

    sql($con, "USE $db");
?>