var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
queryString=queryString.split("=");
var user=queryString[1];

var req = new XMLHttpRequest(); 
req.onload = function() {
    var flag=this.responseText;
    flag=flag.split(",");
    flag[0]="'"+flag[0];
    var i=1,j=1,k=0, out,id,code,facID,name;
    while(i<=4)
    {
        j=1;
        while(j<=6)
        {
            id="r"+i+"c"+j;
            out=flag[k].slice(2,-2);
            if(j==1)
                code=out;
            else if(j==3)
                facID=out;
            document.getElementById(id).innerHTML=out;      
            j++;
            k++;
        }
        id="r"+i+"c7";
        document.getElementById(id).innerHTML="<a href=\"http://localhost/Project_SE/studentdashboard/coursespecificview.html?user="+user+"&code="+code+"&ID="+facID+"\">"+code+"</a>";
        i++;
    }
    
};
req.open("get", "http://localhost/Project_SE/studentdashboard/getCourses.php?user="+user, true); 
req.send();