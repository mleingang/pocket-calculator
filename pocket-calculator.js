
var answer = "";

var one = document.getElementById("button1");
var two = document.getElementById("button2");
var three = document.getElementById("button3");
var four = document.getElementById("button4");
var five = document.getElementById("button5");
var six = document.getElementById("button6");
var seven = document.getElementById("button7");
var eight = document.getElementById("button8");
var nine = document.getElementById("button9");
var zero = document.getElementById("button0");

var decimal = document.getElementById("buttonDecimal");
var ac = document.getElementById("buttonAC");
var display = document.getElementById("display");

var numbers = document.getElementsByClassName("number");
var operation = document.getElementsByClassName("operation");
var operation2 = document.getElementsByClassName("operation2");
var display = document.getElementById("display");

var displayValue = "0";
var pending;
var evalStringArray = [];

var updateDisplay = (clickObj) => {
  var buttonValue = clickObj.target.innerText;

  if (displayValue === "0"){
    displayValue = "";
    displayValue += buttonValue;
    display = displayValue;
  }
}

for (i = 0; i < numbers.length; i++){
  number[i].addEventListener("click", updateDisplay, false);
}

for (i = 0; i < operation.length; i++){
  operation[i].addEventListener("click", performOperation, false);
}


// function num1(){
//   let output = document.getElementById("display-bar");
//
//   answer = answer + "1";
//   output.innerHTML = answer;
// }
//
// function num2(){
//   let output = document.getElementById("display-bar");
//
//   answer = answer + "2";
//   output.innerHTML = answer;
// }
//
// function num3(){
//   let output = document.getElementById("display-bar");
//
//   answer = answer + "3";
//   output.innerHTML = answer;
// }
//
// function num4(){
//   let output = document.getElementById("display-bar");
//
//   answer = answer + "4";
//   output.innerHTML = answer;
// }
//
// function num5(){
//   let output = document.getElementById("display-bar");
//
//   answer = answer + "5";
//   output.innerHTML = answer;
// }
//
// function num6(){
//   let output = document.getElementById("display-bar");
//
//   answer = answer + "6";
//   output.innerHTML = answer;
// }
//
// function num7(){
//   let output = document.getElementById("display-bar");
//
//   answer = answer + "7";
//   output.innerHTML = answer;
// }
//
// function num8(){
//   let output = document.getElementById("display-bar");
//
//   answer = answer + "8";
//   output.innerHTML = answer;
// }
//
// function num9(){
//   let output = document.getElementById("display-bar");
//
//   answer = answer + "9";
//   output.innerHTML = answer;
// }
//
// function num0(){
//   let output = document.getElementById("display-bar");
//
//   answer = answer + "0";
//   output.innerHTML = answer;
// }
//
// function clean(){
//   let output = document.getElementById("display-bar");
//
//   answer = ""
//   output.innerHTML = answer;
// }
//
// function add(){
//   let output = document.getElementById("display-bar");
//
//   answer = answer + "+";
//   output.innerHTML = answer;
// }
//
// function sub(){
//   let output = document.getElementById("display-bar");
//
//   answer = answer + "-";
//   output.innerHTML = answer;
// }
// function mult(){
//   let output = document.getElementById("display-bar");
//
//   answer = answer + "x";
//   output.innerHTML = answer;
// }
//
// function divide(){
//   let output = document.getElementById("display-bar");
//
//   answer = answer + "÷";
//   output.innerHTML = answer;
// }
