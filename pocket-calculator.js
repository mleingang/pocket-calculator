
var displayNum = "";
var expression = [];
var calculationFinished = false;

function clean(){
  var display = document.getElementById("display");

  displayNum = "";
  expression = [];
  display.value = displayNum;
}

function numInput(num){
  var display = document.getElementById("display");

  if (display.value.length > 11)
    switch(num){
      case 1: expression.push("1");
              display.value += "1";
              break;
      case 2: expression.push("2");
              display.value += "2";
              break;
      case 3: expression.push("3");
              display.value += "3";
              break;
      case 4: expression.push("4");
              display.value += "4";
              break;
      case 5: expression.push("5");
              display.value += "5";
              break;
      case 6: expression.push("6");
              display.value += "6";
              break;
      case 7: expression.push("7");
              display.value += "7";
              break;
      case 8: expression.push("8");
              display.value += "8";
              break;
      case 9: expression.push("9");
              display.value += "9";
              break;
      case 0: expression.push("0");
              display.value += "0";
              break;
  }
}

function setOperation(command){
  var display = document.getElementById("display");


  if (command == "add"){
    expression.push("+");
    display.value += "+";
  }else if (command == "subtract") {
    expression.push("-");
    display.value += "-";
  }else if (command == "multiply") {
    expression.push("*");
    display.value += "x";
  }else if (command == "divide") {
    expression.push("/");
    display.value += "/";
  }else if (command == "deci") {
    expression.push(".");
    display.value += ".";
  }
}

function percent(){
  var percNum = [];

  for (var i = (expression.length - 1); i != 0; i--){
    if((expression[i] == "+") || (expression[i] == "-") || (expression[i] == "x") || (expression[i] == "/")){
      break;
    }else {
      percNum.splice(0, 0, expression[i]);
    }
  }

  let joinedPercNum = percNum.join();
  joinedPercNum.replace(",", " ");
  for (var i = (joinedPercNum.length - 1); i != 0; i--)
  console.log(joinedPercNum);
  joinedPercNum = parseFloat(joinedPercNum) / 100;

  console.log(joinedPercNum);
}

function calculate(){
  let joinedExpression = expression.join("");
  joinedExpression.replace(",", " ");
  console.log(joinedExpression);
  display.value = eval(joinedExpression);
}
