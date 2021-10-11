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
            $password = Argon2::verify($_post['password'], $Accountpassword);
            if($password){
                $role = $AccountVerif->role;
                $id = $AccountVerif->id;
                $infoUser=Argon2::createToken(['id'=>$id,'role'=>$role]);
                $roleUser = (['role'=>$role,'token'=>$infoUser]);
                echo json_encode($roleUser);
                // echo json_encode($roleUser);
            }
            else{
                echo json_encode(false);
            }
        }
        else{
            echo json_encode(false);
        }
    }
    else{
        echo json_encode(false);
    }

} 