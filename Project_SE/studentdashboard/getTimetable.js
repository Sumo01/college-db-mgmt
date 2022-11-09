var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
queryString=queryString.split("=");
var user=queryString[1];

var req = new XMLHttpRequest(); 
req.onload = function() {
    var flag=this.responseText;
    flag=flag.split(",");
    flag[0]="'"+flag[0];
    var i=0,j=1,k=0, out,eth,ela,id,course;
    while(k<12)
    {       
        course=flag[k].slice(2,-2);
        k++;
        eth=flag[k].slice(2,-2);
        k++;
        ela=flag[k].slice(2,-2);
        k++;
        eth=eth.split("|");
        ela=ela.split("|");
        i=0;
        while(i<4)
        {
            id=eth[i];
            document.getElementById(id).innerHTML=course+"<br>(T)";  
            i++;  
        }  
        i=0;
        while(i<2)
        {
            id=ela[i];
            document.getElementById(id).innerHTML=course+"<br>(L)"; 
            i++;   
        }
    }
};
req.open("get", "http://localhost/Project_SE/studentdashboard/getTT.php?user="+user, true); 
req.send();