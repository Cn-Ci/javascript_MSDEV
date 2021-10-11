<?php
include_once 'DbManager.php' ;
//include_once 'checkEmail.php';


$dbManager = new DbManager("account");

if ($_SERVER["REQUEST_METHOD"]==='POST'){
    $_post = json_decode(file_get_contents('php://input'), true);
    $email = $_post["email"];
    $where = "email = '$email'";
    $emailVerif = verifEmailExist($where);
    echo ($emailVerif);
}

function verifEmailExist($fileds){
        $dbManager = new DbManager("account");
        $existEmail = $dbManager->getAll($fileds);
         if(count($existEmail) > 0){
             return json_encode(false);
         }
         else{
             return json_encode(true);
         }
     

        $pb="";
}