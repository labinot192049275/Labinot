document.addEventListener("DOMContentLoaded",

function(ngjarja) {

const BtnSubmit = document.getElementById('Btn-submit');

/*Funksioni per te e validuar fushat e formes */
const validate = (ngjarja) => {

const perdoruesi = document.getElementById('userid');
const fjalkalimi = document.getElementById('pass');
const emrin = document.getElementById('emri');
const emailin = document.getElementById('adresaEmailit');
if (perdoruesi.value === "") {
alert("Ju lutem shtoni Emrin.");
perdoruesi.focus();
return false;
}

if (emrin.value === "") {
alert("Ju lutem shtoni Kompanin.");
emrin.focus();
return false;
}
if (fjalkalimi.value === "") {
alert("Ju lutem shtoni Kodin.");
fjalkalimi.focus();
return false;
}

if (emailin.value === "") {
alert("Ju lutem shtoni email'in.");
emailin.focus();
return false;
}

if (!emailValid(emailin.value)) {
alert("Ju lutem te shtoni email'in valid.");
emailin.focus();
return false;
}

return true; 
}

const emailValid = (email) => {
const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
return emailRegex.test(email.toLowerCase());

}

BtnSubmit.addEventListener('click', validate);
});



//-----------------------------------------------------------------------------




var elementList = document.getElementsByClassName('firstname');
var elementListLastname=document.getElementsByClassName('lastname');
var elementListCompany=document.getElementsByClassName('company');
var elementListEmail=document.getElementsByClassName('email');
var elemetListPhoneCode=document.getElementsByClassName('code');
var elementListPhoneNumber=document.getElementsByClassName('number');
console.log('hello ')
for(var i=0;i<elementList.length;i++) {
   
elementList[i].addEventListener('keyup', function(event){
event.preventDefault();   //stop refresh
  
if(event.target.name=='first_name'){
    usernameVal= event.target.value; 
}


console.log('Name is: '+usernameVal );
})

elementListLastname[i].addEventListener('keyup',function(event){
    event.preventDefault();
if(event.target.name=='last_name'){

lastnameVal=event.target.value;

}
console.log('Name is: '+usernameVal+' and Lastname is: ' +lastnameVal);
})

elementListCompany[i].addEventListener('keyup', function(event){

if(event.target.name=='company'){

companyVal=event.target.value;

}
console.log('Name is: '+usernameVal+' and Lastname is: ' +lastnameVal+' and Company is: '+companyVal);
    
})

elementListEmail[i].addEventListener('keyup', function(event){

if(event.target.name=='email'){

    emailVal=event.target.value;

}

console.log('Name is: '+usernameVal+' and Lastname is: ' +lastnameVal+' and Company is: '+
companyVal+' and Email is: '+emailVal);

})
elemetListPhoneCode[i].addEventListener('keyup', function(event){

    if(event.target.name=='area_code'){

        codePhone=event.target.value;

    }
console.log('Name is: '+usernameVal+' and Lastname is: ' +lastnameVal+' and Company is: '+
companyVal+' and Email is: '+emailVal+' and Code-Phone is: '+codePhone);

})

elementListPhoneNumber[i].addEventListener('keyup', function(event){

if(event.target.name=='phone'){

    phoneNumber=event.target.value;

}
console.log('Name is: '+usernameVal+' and Lastname is: ' +lastnameVal+' and Company is: '+
companyVal+' and Email is: '+emailVal+' and Code-Phone is: '+codePhone+' and Phone number is: '
+phoneNumber);

})



}



var usernameVal="";
var lastnameVal="";
var companyVal="";
var emailVal="";
var codePhone="";
var phoneNumber="";


















