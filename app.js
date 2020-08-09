function validate(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  

    var error_message = document.getElementById("error_message");
   
    error_message.style.padding = "10px";
    
    var text;
  

  

    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Email fail! Please type in a correct email adress";
      error_message.innerHTML = text;
     return false;
    } else if(password.length < 6){
      text = "Password must be at least 8 characteres long.";
      error_message.innerHTML = text;
           return false;
    }


    

  alert("Form Submitted Successfully!");
  return true;
}  


    