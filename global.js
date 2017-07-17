$(document).ready(function() {
  var result = 0;
  var problem = 0.0;

  $("#numberZero").on("click", function() {
    $(".display").append("0");
    var problem = problem + 0;
    console.log("Problem is " + problem);

  });
  $("#numberOne").on("click", function() {
    $(".display").append("1");
    var problem = problem + 1;
    console.log("Problem is " + problem);
  });
  $("#numberTwo").on("click", function() {
    $(".display").append("2");
  });
  $("#numberThree").on("click", function() {
    $(".display").append("3");
  });
  $("#numberFour").on("click", function() {
    $(".display").append("4");
  });
  $("#numberFive").on("click", function() {
    $(".display").append("5");
  });
  $("#numberSix").on("click", function() {
    $(".display").append("6");
  });
  $("#numberSeven").on("click", function() {
    $(".display").append("7");
  });
  $("#numberEight").on("click", function() {
    $(".display").append("8");
  });
  $("#numberNine").on("click", function() {
    $(".display").append("9");
  });
  $("#numberPlus").on("click", function() {
    $(".display").append("+");
  });
  $("#numberMinus").on("click", function() {
    $(".display").append("-");
  });
  $("#numberTimes").on("click", function() {
    $(".display").append("*");
  });
  $("#numberDivide").on("click", function() {
    $(".display").append("/");
  });
  $("#numberDot").on("click", function() {
    $(".display").append(".");
  });
  $("#numberEquals").on("click", function() {
    $(".display").append("=");
  });
  $("#numberClear").on("click", function() {
    $(".display").html(" + <strong>" + result + "</strong>");
    problem = 0.0;
    console.clear();
  });

});
