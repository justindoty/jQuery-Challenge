$(function() {
  var numOfButton = 15;
  var buttonValue1 = 0;
  var buttonValue2 = 0;
  var numClicks = 0;
  var totalValue = 0;


function makeButtons(numOfButton) {
  for(var i = 0; i <= numOfButton; i++) {

    $("#buttons").append("<button>" + i + "</button>");
    $("#buttons").find("button:last").addClass("" + i);

  }

}


makeButtons(numOfButton);


$("button").on("click", function () {
  switch(numClicks){
    case 0:
      buttonValue1 = parseInt($(this).attr("class"));
      totalValue += parseInt($(this).attr("class"));
      numClicks++ ;
      $(".total").append("<h2>" + buttonValue1 + "</h2>")
      break;
    case 1:
      buttonValue2 = parseInt($(this).attr("class"));
      totalValue += parseInt($(this).attr("class"));
      numClicks++ ;
      $(".total").empty();
      $(".total").append("<h2>" + buttonValue1 + " + " + buttonValue2 + " = " + totalValue + "</h2>")
      break;
    case 2:
      numClicks = 1;
      totalValue = 0;
      buttonValue1 = parseInt($(this).attr("class"));
      totalValue += parseInt($(this).attr("class"));
      $(".total").empty();
      $(".total").append("<h2>" + buttonValue1 + "</h2>")
      break;
  }
    console.log(totalValue);
});








});
