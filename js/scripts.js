$(document).ready(function() {
  $("#inputlines").sumbit(function() {
    var destinationInput = $("input#destination").val();
    var restaurantInput = $("input#restaurant").val();
    var holidayInput = $("input#holiday").val();
    var epicodusInput = $("input#epicodus").val();

    $(".destination").text("destinationInput");
    $(".restaurant").text("restaurantInput");
    $(".holiday").text("holidayInput");
    $(".epicodus").text("epicodusInput");

    $("#list").show();

    event.preventDefault();
  });
});
