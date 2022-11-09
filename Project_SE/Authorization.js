function Validation()
{
    //document.write("Hey there!");
    var name=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    //document.getElementById("inner").innerHTML=name+" "+pass; 
    //window.location.href="http://localhost/Project_SE/connect.php?name="+name+"&pass="+pass;
    var req = new XMLHttpRequest(); 
    req.onload = function() {
        var flag=this.responseText;
        //document.write(flag);
        if(flag==1)
        {
            document.getElementById("inner").innerHTML="Logged in!";
            window.location.href="http://localhost/Project_SE/studentdashboard/studentsdashboard.html?user="+name;
        }
        else if(flag==2)
            document.getElementById("inner").innerHTML="Password is incorrect.";
        else
            document.getElementById("inner").innerHTML="Username does not exist.";
    };
    req.open("get", "http://localhost/Project_SE/connect.php?name="+name+"&pass="+pass, true); 
    req.send();
}