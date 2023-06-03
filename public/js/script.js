// const { forEach } = require("../../data/data");
// const Pet = require("../../models/petModel");

//hamburger button
const menuBtn=document.querySelector('.fa');
const navBar= document.querySelector('.link-bar');
const logoBtn = document.querySelector('.logo');

menuBtn.addEventListener("click",function(){
    navBar.classList.toggle('mobile-button');
    logoBtn.classList.toggle('logo-none');
});


//for index(picture move with ratio button)
let radioCountForward = 1;
setInterval(function(){
    document.getElementById("radio" + radioCountForward).checked = true;
    radioCountForward++;
    if(radioCountForward > 5){
        radioCountForward = 1;
    }
  
},3000);


// if(pet.type === "found"){
//   return 'change-yellow';
// } else  {
//   return 'change-red';
// }

// pet.type === 'found' ? 'change-yellow': 'change-red'
// const changeColor = document.getElementsByClassName('changed-color').value;
// use for each 
// convert to array first if i use different loop 




//for contact.ejs

function validate(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let error = document.getElementById("error");
    
    error.style.padding = "6px";
    
    var text;
    if(name.length < 4){
      text = "Please Enter valid Name";
      error.innerHTML = text;
      return false;
    }
    if(subject.length < 4){
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
    if(message.length <= 10){
      text = "Please Enter More Than 10 Characters";
      error.innerHTML = text;
      return false;
    }
    alert("Thank you for contacting us, we will get in touch with you soon");
    return true;
  }


  // for donating

  function validateDonate(){
  
    alert("Thank you for your donation. Your generosity means everything to us and to the community we serve.”");
    return true;
  }


