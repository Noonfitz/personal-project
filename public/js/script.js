
//hamburger button
const menuBtn=document.querySelector('.fa');
const navBar= document.querySelector('.link-bar');
const logoBtn = document.querySelector('.logo');

menuBtn.addEventListener("click",function(){
    navBar.classList.toggle('mobile-button');
    logoBtn.classList.toggle('logo-none');
});


//for index.html (picture move with ratio button)
let radioCount = 1;
setInterval(function(){
    document.getElementById("radio" + radioCount).checked = true;
    radioCount++;
    if(radioCount > 5){
        radioCount = 1;
    }
},3000);




//for contact.html
function validate(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let error = document.getElementById("error");
    
    error.style.padding = "6px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error.innerHTML = text;
      return false;
    }
    if(subject.length < 7){
      text = "Please Enter Correct Subject";
      error.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error.innerHTML = text;
      return false;
    }
    if(message.length <= 25){
      text = "Please Enter More Than 25 Characters";
      error.innerHTML = text;
      return false;
    }
    alert("Thank you for contacting us, we will get in touch with you soon");
    return true;
  }


