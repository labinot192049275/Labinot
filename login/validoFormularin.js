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