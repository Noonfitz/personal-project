const menuBtn=document.querySelector('.fa');
const navBar= document.querySelector('.link-bar');
const logoBtn = document.querySelector('.logo');

menuBtn.addEventListener("click",function(){
    navBar.classList.toggle('mobile-button');
    logoBtn.classList.toggle('logo-none');
});


var radioCount = 1;
setInterval(function(){
    document.getElementById("radio" + radioCount).checked = true;
    radioCount++;
    if(radioCount > 5){
        radioCount = 1;
    }
},3000);
