var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
queryString=queryString.split("=");
var user=queryString[1];

var req = new XMLHttpRequest(); 
req.onload = function() {
    var flag=this.responseText;
    flag=flag.split(",")
    flag[0]="'"+flag[0];
    var i=1,j=1,k=0, out,id,code,facID,ass;
    while(i<=8)
    {
        j=1;
        while(j<=5)
        {
            id="r"+i+"c";
            out=flag[k].slice(2,-2);    
            if(j==1)
            {
                id=id+"1";
                code=out;
                document.getElementById(id).innerHTML=out;   
            }
            else if(j==2)
            {
                facID=out;
            }
            else if(j==3)
            {
                id=id+"2";
                document.getElementById(id).innerHTML=out;   
            }
            else if(j==4)
            {
                id=id+"3";
                ass=out;
                document.getElementById(id).innerHTML="<a href=\"http://localhost/Project_SE/studentdashboard/Courses/"+code+"/"+facID+"/"+ass+"\">"+ass+"</a>";
            }   
            else if(j==5)
            {
                
                id=id+"4";
                document.getElementById(id).innerHTML=out;  
            }
            j++;
            k++;
        }
        i++;
    }
    
};

req.open("get", "http://localhost/Project_SE/studentdashboard/getAss.php?user="+user, true); 
req.send();