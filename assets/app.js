// set variables
var $value8 = document.querySelector("#8");
// first get the save button to save info to localstorage 
$("#button").on('click', function(){
    localStorage.setItem($value8)
    console.log(localStorage)
})
// when the site loads, check for info in local storage 
// if it finds info, load in for time text box





// moment.js for the color on time 