<?php

class Argon2{

    private static $prefix = '$argon2id$v=19$m=1024,t=2,p=2$';
    public static function hash($password){
        $options = ['memory_cost'=>1024, 'time_cost'=>2, 'threads'=>2];
        $password = str_replace(self::$prefix, "", password_hash($password, PASSWORD_ARGON2ID, $options));
        return $password;
    }

    public static function verify($password, $hash){
        return password_verify($password, self::$prefix . $hash);
    }

    public static function createToken($entries){
        $json = json_encode($entries);
        $payload = base64_encode($json);
        $signature = self::hash($payload);
        return $payload . '$' . $signature;
    }

    public static function verifyToken($token, $verifyExpired = true){
        $tokenEntries = self::decodeToken($token);
        if($tokenEntries){
            $json = base64_decode($tokenEntries['payload']);
            $entries = json_decode($json);
            if($verifyExpired){
                date_default_timezone_set('Europe/Paris');
                $diff = time() - strtotime($entries->token_date);
                if($diff < 60 * 60 * 24){//24h
                    return $entries;
                }
            }
            return $entries;
        }
        return false;
    }

    public static function decodeToken($token){
        $exploded = explode('$',$token);
        $payload = $exploded[0];
        $signature = str_replace($payload.'$',"",$token);
        $isValid = self::verify($payload, $signature);
        if($isValid){
            return ['payload'=>$payload, 'signature'=>$signature];
        }
        return false;
    } 

}