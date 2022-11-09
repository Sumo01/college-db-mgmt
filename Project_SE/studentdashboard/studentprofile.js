var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
queryString=queryString.split("=");
var user=queryString[1];

var req = new XMLHttpRequest(); 
req.onload = function() {
    var flag=this.responseText;
    flag=flag.split("|");
    flag[0]="'"+flag[0];
    var i=1,j=1,k=0, out,id,code,facID,name;
    while(i<=11)
    {
        id="r"+i+"c2";
        out=flag[i].slice(2,-2);
        document.getElementById(id).innerHTML=out;      
        i++;
    }
    
};
req.open("get", "http://localhost/Project_SE/studentdashboard/studentprofile.php?user="+user, true); 
req.send();