var inputName=document.getElementById("inputName");
var inputEmail=document.getElementById("inputEmail");
var inputPassword=document.getElementById("inputPassword");
var signIn=document.getElementById("signIn")
var signUp=document.getElementById("signUp")

var btnUP=document.getElementById("btnUP")
var btnIn=document.getElementById("btnIn")

var  infoList= JSON.parse(localStorage.getItem("users")) || [];




function switchUP() {
     inputName.classList.remove("d-none");
     signIn.classList.remove("d-none");
     signUp.classList.add("d-none") ; 
    btnIn.classList.add("d-none");
    btnUP.classList.remove("d-none");
    document.getElementById("required").classList.add("d-none")
}


function switchIn() {
    inputName.classList.add("d-none");
    signIn.classList.add("d-none");
    signUp.classList.remove("d-none") ; 
   btnIn.classList.remove("d-none");
   btnUP.classList.add("d-none");
}




function add() {


if (inputName.value=="" && inputEmail.value=="" && inputPassword.value=="" ) {

    document.getElementById("success").classList.add("d-none")
    document.getElementById("required").classList.remove("d-none") 
}else{

    info={
        name:inputName.value,
        Email:inputEmail.value,
        password:inputPassword.value,
 }

 infoList.push(info);

 localStorage.setItem("users" , JSON.stringify(infoList));
 document.getElementById("success").classList.remove("d-none")
 document.getElementById("required").classList.add("d-none") 

  clear()

}




  
}




function clear() {
    
    inputName.value="";
    inputEmail.value="";
    inputPassword.value="";

}


function validInput() {
    

    var users = JSON.parse(localStorage.getItem("users"));

    
    if (users) {
        
        const user = users.find(u => u.Email === inputEmail.value && u.password === inputPassword.value);
        if (user) {        
           
         localStorage.setItem('logInUser', user.name);
  
         redirect()
           
        } else {
            document.getElementById("required").classList.remove("d-none")
        }
    } 
}





function redirect() {
      

    window.location.href = 
    "./login.html";

}




// logout

function logout() {
    localStorage.removeItem('logInUser');

    window.location.href = 
    "./index.html";

}






/////get it from https://chatgpt.com/

document.addEventListener("DOMContentLoaded", function () {
    var welcomeMessage = document.getElementById('welcomeMessage');
    var loggedInUser = localStorage.getItem('logInUser');

    if (loggedInUser) {
        welcomeMessage.innerHTML = `Welcome, ${loggedInUser}!`;
    } else {
        console.log("ay haga")
    }
});


