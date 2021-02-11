document.addEventListener("DOMContentLoaded",

function(ngjarja) {

const BtnSubmit = document.getElementById('Btn-submit');

/*Funksioni per te e validuar fushat e formes */
const validate = (ngjarja) => {

const perdoruesi = document.getElementById('userid');
const fjalkalimi = document.getElementById('pass');


if (perdoruesi.value === "") {
alert("Ju lutem shtoni perdoruesin.");
perdoruesi.focus();
return false;
}
if (fjalkalimi.value === "") {
alert("Ju lutem shtoni Fjalkalimin.");
fjalkalimi.focus();
return false;
}


return true; 
}



BtnSubmit.addEventListener('click', validate);
});


// ---------------------------------------------------------------------------------------


var elementList = document.getElementsByClassName('klasa');


for(var i=0;i<elementList.length;i++) {

elementList[i].addEventListener('keyup', function(event){
event.preventDefault();   
  
if(event.target.name=='username'){
    usernameVal= event.target.value; 
}
else if(event.target.name== 'password'){

    passwordVal=event.target.value;

}

console.log('username is: '+usernameVal+' and password is:'+passwordVal);
})

}

var usernameVal="";
var passwordVal="";





  


