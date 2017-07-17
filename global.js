$(document).ready(function() {
  var result = 0;
  var problem = "";

  $("#numberZero").on("click", function() {
    $(".display").append("0");
    problem = problem + "0";
    console.log("Problem is " + problem);

  });
  $("#numberOne").on("click", function() {
    $(".display").append("1");
    problem = problem + "1";
    console.log("Problem is " + problem);
  });
  $("#numberTwo").on("click", function() {
    $(".display").append("2");
    problem = problem + "2";
    console.log("Problem is " + problem);
  });
  $("#numberThree").on("click", function() {
    $(".display").append("3");
    problem = problem + "3";
    console.log("Problem is " + problem);
  });
  $("#numberFour").on("click", function() {
    $(".display").append("4");
    problem = problem + "4";
    console.log("Problem is " + problem);
  });
  $("#numberFive").on("click", function() {
    $(".display").append("5");
    problem = problem + "5";
    console.log("Problem is " + problem);
  });
  $("#numberSix").on("click", function() {
    $(".display").append("6");
    problem = problem + "6";
    console.log("Problem is " + problem);
  });
  $("#numberSeven").on("click", function() {
    $(".display").append("7");
    problem = problem + "7";
    console.log("Problem is " + problem);
  });
  $("#numberEight").on("click", function() {
    $(".display").append("8");
    problem = problem + "8";
    console.log("Problem is " + problem);
  });
  $("#numberNine").on("click", function() {
    $(".display").append("9");
    problem = problem + "9";
    console.log("Problem is " + problem);
  });
  $("#numberPlus").on("click", function() {
    $(".display").append("+");
    problem = problem + "+";
    console.log("Problem is " + problem);
  });
  $("#numberMinus").on("click", function() {
    $(".display").append("-");
    problem = problem + "-";
    console.log("Problem is " + problem);
  });
  $("#numberTimes").on("click", function() {
    $(".display").append("*");
    problem = problem + "*";
    console.log("Problem is " + problem);
  });
  $("#numberDivide").on("click", function() {
    $(".display").append("/");
    problem = problem + "/";
    console.log("Problem is " + problem);
  });
  $("#numberDot").on("click", function() {
    $(".display").append(".");
    problem = problem + ".";
    console.log("Problem is " + problem);
  });
  $("#numberEquals").on("click", function() {
    $(".display").append("= <strong>" + math.eval(problem) + "</strong>");
    console.log(math.eval(problem));
  });
  $("#numberClear").on("click", function() {
    $(".display").html("");
    problem = "";
    console.clear();
  });

});
