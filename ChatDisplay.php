<?php
    $servername = "sql1.njit.edu";
    $username = "cbb23";
    $password = "Titiforever21..";
    $dbname = "cbb23";
    $con = mysqli_connect($servername, $username, $password, $dbname);
              
    if (mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
    $contactName = $_REQUEST["contactName"];

    $sql = "SELECT * FROM ChatLogs WHERE `Name` = '$contactName'";
    $result = mysqli_query($con, $sql);

        while ($row = mysqli_fetch_assoc($result)){
            echo json_encode($row['Message']);
        }
    mysqli_close($con);
?>