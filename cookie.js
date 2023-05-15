function WriteCookie() {
    if( document.myform.customer.value == "" ) {
       alert("Enter some value!");
       return;
    }
    cookievalue ="name:" +escape(document.myform.customer.value);
    document.cookie = cookievalue;
    alert(cookievalue);
 }
 function ReadCookie() {
    var allcookies = cookievalue;
    if(cookievalue.length == 0){
      alert("No cookies");
    }
    document.write ("All Cookies : " + allcookies );
    
    // Get all the cookies pairs in an array
    cookiearray = allcookies.split(';');
    
    // Now take key value pair out of this array
    for(var i=0; i<cookiearray.length-1; i++) {
       name = cookiearray[i].split('=')[0];
       value = cookiearray[i].split('=')[1];
       document.write ("Cookie Value: "+cookiearray);
    }
 }
 function SetExpiry() {
    var now = new Date();
    now.setDate( now.getDate() + 1);
    alert(now);
    cookievalue = escape(document.myform.customer.value) + ";"
    
    document.cookie = "name=" + cookievalue;
    document.cookie = "expires=" + now.toUTCString() + ";"
    document.write ("Setting Cookies : " + "name=" + cookievalue + "\n");
 }
 function DeleteCookie() {
    var now = new Date();
    now.setDate( now.getDate() - 1);
    alert(now);
    cookievalue = escape(document.myform.customer.value) + ";"
    
    document.cookie = "name=" + cookievalue + "\n";
    document.cookie = "expires=" + now.toUTCString() + ";\n"
    document.write("Setting Cookies : " + "name=" + cookievalue + "\n");
 }