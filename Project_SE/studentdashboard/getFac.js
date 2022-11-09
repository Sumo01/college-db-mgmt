var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
queryString=queryString.split("=");
var user=queryString[1];

var req = new XMLHttpRequest(); 
req.onload = function() {
    var flag=this.responseText;
    flag=flag.split(",")
    flag[0]="'"+flag[0];
    var i=1,j=1,k=0, out,id;
    while(i<=4)
    {
        j=1;
        while(j<=5)
        {
            id="r"+i+"c"+j;
            out=flag[k].slice(2,-2);
            document.getElementById(id).innerHTML=out;      
            j++;
            k++;
        }
        i++;
    }
    
};
req.open("get", "http://localhost/Project_SE/studentdashboard/getFac.php?user="+user, true); 
req.send();