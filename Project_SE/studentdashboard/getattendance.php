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
    $sql="SELECT RegNo,CourseCode, faculty.FacID as FacultyID,faculty.Name as FacultyName, course.Name as CourseName, Attendance FROM studentcourse,course,faculty WHERE studentcourse.coursecode=course.code AND faculty.facID=studentcourse.facID;";
    $result=$conn->query($sql); 
    if($result->num_rows>0)
    {
      while($row=$result->fetch_assoc())
      {
        if($row["RegNo"]==$user)
        {
            $CourseCode=$row["CourseCode"];
            $FacID=$row["FacultyID"];
            $FacName=$row["FacultyName"];
            $CourseName=$row["CourseName"];
            $Attendance=$row["Attendance"];
            echo json_encode($CourseCode);
            echo json_encode(",");
            echo json_encode($CourseName);
            echo json_encode(",");
            echo json_encode($FacID);
            echo json_encode(",");
            echo json_encode($FacName);
            echo json_encode(",");
            echo json_encode($Attendance);
            echo json_encode(",");
        }
      }
    }
?>
