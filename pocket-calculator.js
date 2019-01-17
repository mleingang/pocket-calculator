
var showZero = true;
var displayNum = "";
var expression = [];
var numOne = [];
var operation = "";
var numTwo = [];
var calculationFinished = false;

function zero(){
  var display = document.getElementById("display");

  if (showZero === true){
    display.innerHTML = 0;
  } else if (showZero === false){
    expression.shift(expression[0]);
    display.innerHTML += "";
  }
}

function clean(){
  var display = document.getElementById("display");

  displayNum = "";
  expression = [];
  operation = "";
  display.innerHTML = displayNum;
  showZero = true;

  zero();
}

function numInput(num){
  var display = document.getElementById("display");

  switch(num){
    case 1: expression.push("1");
            display.innerHTML += "1";
            showZero = false;
            break;
    case 2: expression.push("2");
            display.innerHTML += "2";
            showZero = false;
            break;
    case 3: expression.push("3");
            display.innerHTML += "3";
            showZero = false;
            break;
    case 4: expression.push("4");
            display.innerHTML += "4";
            showZero = false;
            break;
    case 5: expression.push("5");
            display.innerHTML += "5";
            showZero = false;
            break;
    case 6: expression.push("6");
            display.innerHTML += "6";
            showZero = false;
            break;
    case 7: expression.push("7");
            display.innerHTML += "7";
            showZero = false;
            break;
    case 8: expression.push("8");
            display.innerHTML += "8";
            showZero = false;
            break;
    case 9: expression.push("9");
            display.innerHTML += "9";
            showZero = false;
            break;
    case 0: expression.push("0");
            display.innerHTML += "0";
            showZero = false;
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
    expression.push("+");
    display.innerHTML += "+";
  }else if (command == "subtract") {
    expression.push("-");
    display.innerHTML += "-";
  }else if (command == "multiply") {
    expression.push("x");
    display.innerHTML += "x";
  }else if (command == "divide") {
    expression.push("/");
    display.innerHTML += "/";
  }
}

console.log(expression);


function calculate(){
  calculationFinished = true;
  let joinedExpression = expression.join();
  display.innerHTML = eval();

}
