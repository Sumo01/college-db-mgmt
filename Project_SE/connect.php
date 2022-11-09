<?php
  $name=$_GET['name'];
  $pass=$_GET['pass'];
  //echo $name.$pass;
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
  $sql="SELECT * FROM STUDENT";
  $result=$conn->query($sql);
  $flag=0;
  if($result->num_rows>0)
  {
    while($row=$result->fetch_assoc())
    {
      //echo $row["RegNo"];
      if($row["RegNo"]==$name)
      {
        if($row["Password"]==$pass)
        {
          $flag=1;
          break;
        }
        else
        {
          $flag=2;
          break;
        }
      }
    }
  }
  echo json_encode($flag);
  $conn->close();
?>  

