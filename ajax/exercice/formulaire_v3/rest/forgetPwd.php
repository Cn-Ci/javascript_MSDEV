<?php
include_once 'DbManager.php' ;
include_once 'Argon2.php';

$dbManager = new DbManager("account");

if ($_SERVER["REQUEST_METHOD"]==='POST'){ //create account
    $_post = json_decode(file_get_contents('php://input'), true);
    $email = $_post['email'];
    $emailToVerif = $dbManager->getAll("email='$email'");
    $existingAccount = count($emailToVerif) > 0;
    if($existingAccount){
        $AccountVerif = $emailToVerif[0];
        if($AccountVerif->active == 1){
            $Accountpassword = $AccountVerif->password;
            $Newpassword = Argon2::generatePSW($Accountpassword);
            echo json_encode($Newpassword);
            $Newpassword = Argon2::hash($Newpassword);
            $dbManager->updateOne(['id'=>$AccountVerif->id, 'password'=>$Newpassword]);
            
        }
        else{
            echo json_encode(false);
        }
    }
    else{
        echo json_encode(false);
    }
}