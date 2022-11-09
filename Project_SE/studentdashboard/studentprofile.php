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
    $sql="SELECT RegNo, Name, Phone, Email, DOB, Nationality, Community, Address, ParentsName, ParentsEmail, Year FROM student;";
    $result=$conn->query($sql); 
    if($result->num_rows>0)
    {
      while($row=$result->fetch_assoc())
      {
        if($row["RegNo"]==$user)
        {
            $RegNo=$row["RegNo"];
            $Name=$row["Name"]; 
            $Phone=$row["Phone"];
            $Email=$row["Email"];
            $DOB=$row["DOB"];
            $nation=$row["Nationality"];
            $comm=$row["Community"];
            $Address=$row["Address"];
            $Pname=$row["ParentsName"];
            $Pemail=$row["ParentsEmail"];
            $year=$row["Year"];
            echo json_encode($RegNo);
            echo json_encode("|");
            echo json_encode($Name);
            echo json_encode("|");
            echo json_encode($Phone);
            echo json_encode("|");
            echo json_encode($Email);
            echo json_encode("|");
            echo json_encode($DOB);
            echo json_encode("|");
            echo json_encode($nation);
            echo json_encode("|");
            echo json_encode($comm);
            echo json_encode("|");
            echo json_encode($Address);
            echo json_encode("|");
            echo json_encode($Pname);
            echo json_encode("|");
            echo json_encode($Pemail);
            echo json_encode("|");
            echo json_encode($year);
            echo json_encode("|");
        }
      }
    }
?>
