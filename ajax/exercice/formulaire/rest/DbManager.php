<?php

class DbManager
{
    public function __construct($table){
        $this->table = $table;
        $this->db = null;
    }

    private function connect(){
        if($this->db === null){
            $host = "localhost";
            $user = "root";
            $pass = "";
            $port="3306";
            $database = "form";
            $dns = "mysql:host=$host;port=$port;dbname=$database";
            $db =null;
            try{
                $db = new PDO(
                    $dns,
                    $user,
                    $pass,
                    array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",)
                );
            }  catch(PDOException $e) {
                die("Erreur de connexion a la base de données : $e->getMessage()");
            }
            $this->db = $db;
        }
        return $this->db;
    }

    public function getAll($where = "1"){
        $sql ="SELECT * FROM $this->table WHERE $where";
        $resp = $this->connect()->query($sql);
        $rows = $resp->fetchAll(PDO::FETCH_CLASS);
        return $rows;
    }

    public function getOne($id){
        $sql ="SELECT * FROM $this->table WHERE id=$id";
        $resp = $this->connect()->query($sql);
        $rows = $resp->fetchAll(PDO::FETCH_CLASS);
        $row = count($rows) == 1 ? $rows[0] : null;
        return $row;
    }

    public function insertOne($fields = []){
        $columns ="";
        $values ="";
        if(isset($fields['id'])){
            unset($fields['id']);
        }
        $valuesToBind = array();
        foreach($fields as $k => $v){
            $columns .= $k . ",";
            $values .= "?,";
            array_push($valuesToBind, $v);
        }
        $columns = trim($columns, ',');
        $values = trim($values, ',');
        $sql = "INSERT INTO $this->table ($columns) VALUES ($values)";
        $statment = $this->connect()->prepare($sql);
        $result = $statment->execute($valuesToBind);
        $test = $statment->rowCount() == 1;
        if($result && $test){
            $insertedId = $this->db->lastInsertId();
            $fields['id'] = $insertedId;
            return $fields;
        }
        return false;
    }  

    private function describe(){
        $sql = "DESCRIBE $this->table";
        $resp = $this->connect()->query($sql);
        $results = $resp->fetchAll(PDO::FETCH_ASSOC);
        $columns = [];
        foreach($results as $result){
            $columns[$result['Field']] = $result;
        }
        return $columns;
    }
    
    function sanit(&$inputs){
        $columns = $this->describe();
        foreach($inputs as $k=>$v){
            $value = filter_var($v, FILTER_SANITIZE_STRING);
            $column= $columns[$k] ?? null;
            if(!isset($column) || $value=='null'){
                unset($inputs[$k]);
                continue;
            }
        } 
    }
}