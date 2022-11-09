var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
queryString=queryString.split("&");
var user=queryString[0].split("=")[1];
var code=queryString[1].split("=")[1];
var fac=queryString[2].split("=")[1];

function load()
{
    document.getElementById("head").innerHTML="Course View: "+code;
}

var req = new XMLHttpRequest(); 
req.onload = function() {
    var flag=this.responseText;
    flag=flag.split(",");
    flag[0]="'"+flag[0];
    var i=1,j=1,k=0, out,id;
    while(i<=4)
    {
        j=1;
        while(j<=2)
        {
            id="r"+i+"c"+j;
            out=flag[k].slice(2,-2);
            if(j==2)
                out="<a href=\"http://localhost/Project_SE/studentdashboard/Courses/"+code+"/"+fac+"/"+out+"\">"+out+"<a>";
            document.getElementById(id).innerHTML=out;      
            j++;
            k++;
        }
        i++;
    }
    
};
req.open("get", "http://localhost/Project_SE/studentdashboard/getCourseWork.php?user="+user+"&code="+code+"&ID="+fac, true);
req.send();