
var displayNum = "";
var storedNum = [];
var operation = 0;
var calculationFinished = false;

function clean(){
  var display = document.getElementById("display");

  displayNum = "0";
  storedNum = [];
  operation = 0;
  display.innerHTML = displayNum;
}

function numInput(num){
  var display = document.getElementById("display");

  switch(num){
    case 1: storedNum.push("1");
            display.innerHTML += "1";
            break;
    case 2: storedNum.push("2");
            display.innerHTML += "2";
            break;
    case 3: storedNum.push("3");
            display.innerHTML += "3";
            break;
    case 4: storedNum.push("4");
            display.innerHTML += "4";
            break;
    case 5: storedNum.push("5");
            display.innerHTML += "5";
            break;
    case 6: storedNum.push("6");
            display.innerHTML += "6";
            break;
    case 7: storedNum.push("7");
            display.innerHTML += "7";
            break;
    case 8: storedNum.push("8");
            display.innerHTML += "8";
            break;
    case 9: storedNum.push("9");
            display.innerHTML += "9";
            break;
    case 0: storedNum.push("0");
            display.innerHTML += "0";
            break;
  }
}

function insertDecimal(dec){
  var display = document.getElementById("display");

  for (i = 0; i < display.innerHTML.length; i++){
    if (display.innerHTML.charAt(i) == "."){
      return;
    }
  }
  display.innerHTML += dec;
}

function setOperation(command){
  var display = document.getElementById("display");


  if (command == "add"){
    storedNum.push("+");
    display.innerHTML = "+";
  }else if (command = "subtract") {
    storedNum.push("-");
    display.innerHTML = "-";
  }else if (command = "multiply") {
    storedNum.push("x");
    display.innerHTML = "x";
  }else if (command = "divide") {
    storedNum.push("/");
    display.innerHTML = "/";
  }
}

// function calculate(){
//   var display = document.getElementById("display");
//         displayNum = display.innerHTML;
//   var evalDisplay = eval(displayNum),
//         evalStored = eval(evalStored);
//
//   if (operation == 1){
//     displayNum = evalStored + evalDisplay;
//   }else if (operation == 2) {
//     displayNum = evalStored - evalDisplay;
//   }else if (operation == 3) {
//     displayNum = evalStored * evalDisplay;
//   }else if (operation == 4) {
//     displayNum = evalStored / evalDisplay;
//   }
  // 
  // display.innerHTML = displayNum;
  // if (operation != 0){
  //   calculationFinished = true;
  // }
  //
  // operation = 0;
  // displayNum = "";
  // storedNum = "";
