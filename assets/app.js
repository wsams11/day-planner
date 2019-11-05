
$(".button").on('click', function () {
    var valueText = $(this).siblings(".textContent").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, valueText);
})
$("#hour-8.textContent").val(localStorage.getItem("hour-8"));
$("#hour-9.textContent").val(localStorage.getItem("hour-9"));
$("#hour-10.textContent").val(localStorage.getItem("hour-10"));
$("#hour-11.textContent").val(localStorage.getItem("hour-11"));
$("#hour-12.textContent").val(localStorage.getItem("hour-12"));
$("#hour-1.textContent").val(localStorage.getItem("hour-1"));
$("#hour-2.textContent").val(localStorage.getItem("hour-2"));
$("#hour-3.textContent").val(localStorage.getItem("hour-3"));
$("#hour-4.textContent").val(localStorage.getItem("hour-4"));
$("#hour-5.textContent").val(localStorage.getItem("hour-5"));
