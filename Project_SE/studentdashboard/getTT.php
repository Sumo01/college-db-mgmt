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
    $sql="SELECT RegNo, timings.CourseCode AS CourseCode, ETHSlots.timings as ETHTimings, ELASlots.timings as ELATimings FROM studentcourse, timings,ELASlots, ETHSlots WHERE studentcourse.coursecode=timings.coursecode and studentcourse.facID=timings.facID AND ETHSlots.slots=ETHSlot and ELASlots.slots=ELASlot;";
    $result=$conn->query($sql); 
    if($result->num_rows>0)
    {
      while($row=$result->fetch_assoc())
      {
        if($row["RegNo"]==$user)
        {
            $CourseCode=$row["CourseCode"];
            $ethtimings=$row["ETHTimings"];
            $elatimings=$row["ELATimings"];
            echo json_encode($CourseCode);
            echo json_encode(",");
            echo json_encode($ethtimings);
            echo json_encode(",");
            echo json_encode($elatimings);
            echo json_encode(",");
        }
      }
    }
?>
