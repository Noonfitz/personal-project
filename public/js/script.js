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


  // api map (automatic when user try to insert address)

  function initMap(){
    let location = document.getElementById('inputAddress');
    let AutoComplete = new google.maps.places.Autocomplete(location)

  }


  // google map (located the pets that lost) 
function locationMap(){
  var options = {
    center: {lat:42.3601, lng:-71.057083}, //for Boston area
    zoom: 9
  }
  map = new google.maps.Map(document.getElementById('map'), options)  
  


  function addMarker(location){
    const marker = new google.maps.Marker({
      position:location,
      map:map
    })
  }
  
  addMarker({lat:42.50057, lng:-71.43897})
  addMarker({lat:42.32444, lng:-71.17459})
  addMarker({lat:42.47904, lng:-71.14990})
  addMarker({lat:42.25326, lng:-70.91219})
  addMarker({lat:41.89278, lng:-71.42019})
  addMarker({lat:41.59313, lng:-70.60350})
  addMarker({lat:42.31157, lng:-71.21965})
  addMarker({lat:42.46739, lng:-71.31076})
  addMarker({lat:42.03339, lng:-71.26728})
  addMarker({lat:41.61178, lng:-70.53710})
  addMarker({lat:42.43284, lng:-71.18781})
  addMarker({lat:42.42021, lng:-71.87729})
  addMarker({lat:42.39407, lng:-71.45989})
  addMarker({lat:42.21680, lng:-72.63855})
  addMarker({lat:42.33590, lng:-71.11370})

}


// jquery code
$(document).ready(function(){
  $('.upload-btn').on('click', function(){
    $('#upload-input').click();
  });
  $('#upload-input').on('change',function(){
     var uploadInput = $('#upload-input');
     if(uploadInput.val() != ''){
      var formData = new FormData();
      formData.append('image', uploadInput[0].files[0]);  //to put img inside formdata 2 parameter(img hold the image from input, secondone  uploadPic array[0] basis)


      //make ajax to request to send image to data base

      $.ajax({
        url: '/uploadImage',
        type: 'POST',
        data: formData,
        processData:false,
        contentType: false,
        success: function(){
          uploadInput.val('');
        }
      })
     }
  })
//after send img to server, so we gonna use npm  install formidable  to parse incoming formdata

})


  
