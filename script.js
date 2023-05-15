// script for menu toggle
      var MenuItems = document.getElementById("MenuItems");
      MenuItems.style.maxHeight = "0px";
      function menutoggle() {
        if (MenuItems.style.maxHeight == "0px") {
          MenuItems.style.maxHeight = "200px";
        } else {
          MenuItems.style.maxHeight = "0px";
        }
      }

//script for geo-location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

//script for sign-up form
function verifyDetails() {
    var unm = document.getElementById("usernm").value;
    var pw = document.getElementById("pswd").value;
    var cpw = document.getElementById("cpswd").value;
    var user = document.getElementById("e").value;
    // var mobnum = document.getElementById("mob").value;

    var reg_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var reg_username = /^[a-zA-Z]+$/;
    // var strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    // var mediumPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;
    // var phone_num = /^[0-9]{10}$/;

// check for valid email address
    var user2 = document.getElementById("e");
    var unm2 = document.getElementById("usernm");

                     
// check for username
    if(unm == "") {
      alert("Username Cannot be Empty!");
      return false;
    }
//check empty password field
    if(pw == "") {
      alert ("Password Cannot be Blank!"); 
      return false;
    }
    
//minimum password length validation
    if(pw.length < 8) {
      alert ("Password Length is too short!");
      return false;
    }
//maximum length of password validation
    if(pw.length > 15) {
       alert("Password length must not exceed 15 characters");
       return false;
    }
//password match validation
    if(cpw != pw){
      alert("Passwords Do Not Match!");
      return false;
    }
// valid email
    if (reg_email.test(user)) {
    }
    else {
      user2.style.border = "red solid 3px";
      alert("Invalid Email Address");
      return false;
    }
//check for valid username
      if (reg_username.test(unm)) {
      } else {
        unm2.style.border = "red solid 3px";
        alert("Username should only contain characters");
        return false;
      }
    }
//check for mobile number
      // if(phone_num.test(mobnum)){
      // }
      // else{
      //   alert("Should contain 10 digits!");
      //   return false;
      // }

//script for form-toggle
    var signInForm = document.getElementById("signInForm");
      var signUpForm = document.getElementById("signUpForm");
      var indicator = document.getElementById("indicator");

      function signIn() {
        signUpForm.style.transform = "translateX(300px)";
        signInForm.style.transform = "translateX(300px)";
        indicator.style.transform = "translateX(0px)";
      }
      function signUp() {
        signUpForm.style.transform = "translateX(0px)";
        signInForm.style.transform = "translateX(0px)";
        indicator.style.transform = "translateX(100px)";
      }