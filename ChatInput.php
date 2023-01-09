<?php
echo "connected";
    $servername = "";
    $username = "";
    $password = "";
    $dbname = "";
    $con = mysqli_connect($servername, $username, $password, $dbname);
                      
    if (mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $name = $_POST['name'];
    $msg = $_POST['message'];
    $pw = $_POST['password'];

    $sql = "UPDATE ChatLogs SET `Message` = '$msg' WHERE `Password` = '$pw'";
    $result = mysqli_query($con, $sql);

    if (mysqli_num_rows($result) < 1){
        echo "Invalid Credentials.";
    }  
    mysqli_free_result($result);
    mysqli_close($con);
?>
