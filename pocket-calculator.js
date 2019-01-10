
var displayNum = "";
var storedNum = "";
var operation = 0;
var queuedOperation = 0;
var calculationFinished = false;

function clean(){
  var display = document.getElementById("display");

  displayNum = "";
  storedNum = "";
  operation = 0;
  queuedOperation = 0;
  display.value = displayNum;
}

function numInput(num){
  var display = document.getElementById("display");

  if ((display.value == "") && num == "0"){
    return;
  }else if (calculationFinished == true){
    display.value = num;
    calculationFinished = false;
  }else {
    display.value += num;
  }
}
// function num1(){
//   let output = document.getElementById("display");
//
//   number = number + "1";
//   output.innerHTML = number;
// }
//
// function num2(){
//   let output = document.getElementById("display");
//
//   number = number + "2";
//   output.innerHTML = number;
// }
//
// function num3(){
//   let output = document.getElementById("display");
//
//   number = number + "3";
//   output.innerHTML = number;
// }
//
// function num4(){
//   let output = document.getElementById("display");
//
//   number = number + "4";
//   output.innerHTML = number;
// }
//
// function num5(){
//   let output = document.getElementById("display");
//
//   number = number + "5";
//   output.innerHTML = number;
// }
//
// function num6(){
//   let output = document.getElementById("display");
//
//   number = number + "6";
//   output.innerHTML = number;
// }
//
// function num7(){
//   let output = document.getElementById("display");
//
//   number = number + "7";
//   output.innerHTML = number;
// }
//
// function num8(){
//   let output = document.getElementById("display");
//
//   number = number + "8";
//   output.innerHTML = number;
// }
//
// function num9(){
//   let output = document.getElementById("display");
//
//   number = number + "9";
//   output.innerHTML = number;
// }
//
// function num0(){
//   let output = document.getElementById("display");
//
//   number = number + "0";
//   output.innerHTML = number;
// }
//
// function clean(){
//   let output = document.getElementById("display");
//
//   number = ""
//   output.innerHTML = number;
// }
//
// function add(){
//   let output = document.getElementById("display");
//
//   number = number + "+";
//   output.innerHTML = number;
// }
//
// function sub(){
//   let output = document.getElementById("display");
//
//   number = number + "-";
//   output.innerHTML = number;
// }
// function mult(){
//   let output = document.getElementById("display");
//
//   number = number + "x";
//   output.innerHTML = number;
// }
//
// function divide(){
//   let output = document.getElementById("display");
//
//   number = number + "÷";
//   output.innerHTML = number;
// }
