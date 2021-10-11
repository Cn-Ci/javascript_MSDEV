<?php
include_once 'DbManager.php' ;

$dbManager = new DbManager("account");

if ($_SERVER["REQUEST_METHOD"]==='POST'){
    $_post = json_decode(file_get_contents('php://input'), true);
    $dbManager->sanit($_post);
    
    $validPost = $dbManager->insertOne($_post);
        echo json_encode($validPost);
    
}
else{
    echo json_encode("NO POST");
}
