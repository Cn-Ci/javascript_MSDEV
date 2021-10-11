<?php

include_once 'DbManager.php' ;
include_once 'Argon2.php';
$dbManager = new DbManager("account");

if ($_SERVER["REQUEST_METHOD"]==='POST'){ //create account

    $_post = json_decode(file_get_contents('php://input'), true);
    if(!in_array('changePwd',$_post)){     
    $token = Argon2::verifyToken($_post['token'], false);
    $id = $token->id;
    $infoUser =  $dbManager->getOne($id);
    $userInfo = (['firstName'=>$infoUser->firstName,'lastName'=>$infoUser->lastName,'email'=>$infoUser->email]);
    echo json_encode($userInfo);
    $pb;
    }
    else if(in_array('changePwd',$_post)){
        $dbManager->sanit($_post);
        $token = Argon2::verifyToken($_post['token'], false);
        $id = $token->id;
        $infoUser =  $dbManager->getOne($id);
        $password = $_post['password'];
        $password = Argon2::hash($password);
        $newUserInfo = $dbManager->updateOne(['id'=>$id,'password'=>$password]);
        echo json_encode('votre mot de passe a bien etais changer .');
    }

} 