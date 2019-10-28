// set variables
// var $value8 = document.querySelector("#8");

// first get the save button to save info to localstorage 
$(".button").on('click', function () {
    var valueText = $(this).siblings(".textContent").val();
    var time = $(this).parent().attr("id");
    // console.log(valueText);
    // console.log(time);
    localStorage.setItem(time, valueText);
    // console.log(localStorage.getItem("hour-8"));
})
$("#hour-8 .textContent").val(localStorage.getItem("hour-8"));
$("#hour-9 .textContent").val(localStorage.getItem("hour-9"));
$("#hour-10 .textContent").val(localStorage.getItem("hour-10"));
$("#hour-11 .textContent").val(localStorage.getItem("hour-11"));
$("#hour-12.textContent").val(localStorage.getItem("hour-12"));
$("#hour-1.textContent").val(localStorage.getItem("hour-1"));
$("#hour-2.textContent").val(localStorage.getItem("hour-2"));
$("#hour-3.textContent").val(localStorage.getItem("hour-3"));
$("#hour-4.textContent").val(localStorage.getItem("hour-4"));
$("#hour-5.textContent").val(localStorage.getItem("hour-5"));
// when the site loads, check for info in local storage
// if it finds info, load in for time text box
// console.log(moment());



// moment.js for the color on time 
// get moment cdn
// run 