function validEmail() 
{
  var email = document.getElementById("email").value;
  var validate = new RegExp(/\S+\@\S+\.\S+/);
  var emailLabel = document.getElementById("emailLabel");
  var errorText = document.getElementById("emailError");
  if( !validate.test(email) ){
   emailLabel.style.color = "red";
    errorText.style.display = "block";
   return false;
  }
  else{
     emailLabel.style.color = "green";
      errorText.style.display = "none";
    return true;
  }
}
function validConfirmPassword(){
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var confirmPasswordLabel = document.getElementById("confirmPasswordLabel");
  var errorText = document.getElementById("confirmPasswordError");
  if(password !== confirmPassword){
   confirmPasswordLabel.style.color = "red";
    errorText.style.display = "block";
   return false;
  }
  else{
    confirmPasswordLabel.style.color = "green";
    errorText.style.display = "none";
    return true;
  }
}
function validPassword() 
{
  var password = document.getElementById("password").value;
  var validate = new RegExp(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[_!#$%&\*+\-.@~])^[\w!#$%&\*+\-.@~]{4,32}$/);
  var passwordLabel = document.getElementById("passwordLabel");
  var errorText = document.getElementById("passwordError");
  if(!validate.test(password))
  {
   passwordLabel.style.color = "red";
   errorText.style.display = "block";
   return false;
  }
  else{
    passwordLabel.style.color = "green";
    errorText.style.display = "none";
    return true;
  }
}
function validFirstName(){
  var fName = document.getElementById("firstName").value;
  var validate = new RegExp(/^[A-Za-z]{2,10}$/);
  var fNameLabel = document.getElementById("fNameLabel");
  var errorText = document.getElementById("firstNameError");
  if( !validate.test(fName) ){
    fNameLabel.style.color = "red";
    errorText.style.display = "block";
    return false;
  }
  else{
    fNameLabel.style.color = "green";
    errorText.style.display = "none";
    return true;
  }
}
function validLastName(){
var lName = document.getElementById("lastName").value;
var validate = new RegExp(/^[A-Za-z]{2,10}$/);
var lNameLabel = document.getElementById("lNameLabel");
var errorText = document.getElementById("lastNameError");
if( !validate.test(lName) ){
    lNameLabel.style.color = "red"; 
    errorText.style.display = "block";
    return false;
  }
  else{
    lNameLabel.style.color = "green";
    errorText.style.display = "none";
    return true;
  }
}
function validRegistration(){
  if(validEmail() && validFirstName() && validLastName() && validPassword() 
    && validConfirmPassword()){
    return true;
  }
  else{
    return false;
  }
}
function saveTypeOfUser(){
  
  if(document.getElementById("user").checked){
    localStorage.setItem("typeOfUser", "user");
  }
  else if(document.getElementById("admin").checked){
    localStorage.setItem("typeOfUser", "admin");
  }
}
function validLogin(){
  if(validEmail() && validPassword()){
    saveTypeOfUser();
    window.open("index.html", "_blank");
    return true;
  }
  else{
    return false;
  }
}
