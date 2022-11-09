var req = new XMLHttpRequest(); 
    req.onload = function() {
    document.write(this.responseText); 
 };
req.open("get", "get-data.php", true); 
req.send(); 

