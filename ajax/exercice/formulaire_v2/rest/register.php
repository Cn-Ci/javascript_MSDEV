<?php
include_once 'Argon2.php';
include_once 'DbManager.php';
$dbManager = new DbManager("account");

if($_SERVER["REQUEST_METHOD"] === 'POST'){//Create account
    $_post = json_decode(file_get_contents('php://input'), true);
    $existingAccount = count($dbManager->getAll("email = '$_post[email]'")) > 0;
    $insertedAccount = false;
    if(!$existingAccount){
        $_post['password'] = Argon2::hash($_post['password']);  
        $insertedAccount = $dbManager->insertOne($_post, true);
        $_post['token'] = Argon2::createToken(['email'=>$insertedAccount->email, 'token_date'=>$insertedAccount->updated_at]);
        //TODO update insertedAccount with token
        //mail to $insertedAccount->email with the token
        $response = ['token' => $_post['token']];
    }
    if($existingAccount || !$insertedAccount){ 
        $response = ['token' => false];
    }
    echo json_encode($response);
}

if($_SERVER["REQUEST_METHOD"] === 'GET'){//Validate and active account
    $_get = $_GET;
    if(isset($_get['t'])){
        $entries = Argon2::verifyToken($_get['t']);
        if($entries){
            $email = $entries->email;
            $accounts = $dbManager->getAll("email = '$email'");
            $existingAccount = count($accounts) > 0;
            if($existingAccount){
                $account = $accounts[0];
                //TODO verify token is the same in $account
                //TODO update active and remove token from account
                echo json_encode(true); die;
            }
        }
    }
    echo json_encode(false);
}