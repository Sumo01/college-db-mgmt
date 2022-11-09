<?php
    $user=$_GET['user'];
    $code=$_GET['code'];
    $id=$_GET['ID'];
    //creating connection
    $servername="localhost";
    $username="root";
    $password="tiehead1234!";
    $dbname="seproject";
    $conn=new mysqli($servername,$username,$password,$dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    //echo "Connected successfully"; 
    //connected
    $sql="SELECT RegNo,Topic, File, studentcourse.coursecode as CourseCode, studentcourse.facID AS FacID FROM studentcourse, coursework WHERE studentcourse.coursecode=coursework.coursecode AND studentcourse.facID=coursework.facID;";
    $result=$conn->query($sql); 
    if($result->num_rows>0)
    {
      while($row=$result->fetch_assoc())
      {
        if($row["RegNo"]==$user && $row["CourseCode"]==$code && $row["FacID"]==$id)
        {
            $Topic=$row["Topic"];
            $File=$row["File"];
            echo json_encode($Topic);
            echo json_encode(",");
            echo json_encode($File);
            echo json_encode(",");
        }
      }
    }
?>
