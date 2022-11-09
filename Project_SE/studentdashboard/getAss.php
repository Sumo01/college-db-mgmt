<?php
    $user=$_GET['user'];
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
    $sql="SELECT RegNo, Code, assignments.FacID as FacID,Name, Assignment, Deadline FROM studentcourse, Assignments, course WHERE studentcourse.CourseCode=code AND studentcourse.facID=Assignments.facID AND assignments.coursecode=code;";
    $result=$conn->query($sql); 
    if($result->num_rows>0)
    {
      while($row=$result->fetch_assoc())
      {
        if($row["RegNo"]==$user)
        {
            $CourseCode=$row["Code"];
            $CourseName=$row["Name"];
            $Ass=$row["Assignment"];
            $FacID=$row["FacID"];
            $Deadline=$row["Deadline"];
            echo json_encode($CourseCode);
            echo json_encode(",");
            echo json_encode($FacID);
            echo json_encode(",");
            echo json_encode($CourseName);
            echo json_encode(",");
            echo json_encode($Ass);
            echo json_encode(",");
            echo json_encode($Deadline);
            echo json_encode(",");
        }
      }
    }
?>
