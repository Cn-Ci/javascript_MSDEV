<?php

if($_SERVER["REQUEST_METHOD"] === 'POST'){
    $_post = json_decode(file_get_contents('php://input'), false);
    echo json_encode($_post);
}
else{
    echo json_encode("NO POST");
}