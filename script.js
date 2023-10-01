

document.querySelector("#storedDisplay");
document.getElementById("inputDisplay");
inputDisplay.textContent = "0";


let expression = "";
let result = null;
let operatorCount = 0;
let lastInputIsOperator = true;

document.getElementById("clearAll").onclick = reset;

function reset() {
    let display = document.getElementById("inputDisplay");
    let storedDisplay = document.getElementById("storedDisplay");
    result = null;
    display.textContent = 0;
    expression = "";
    storedDisplay.textContent = "";
}

document.getElementById("percent").onclick = percentage;

function percentage() {
  let display = document.getElementById("inputDisplay");
  let result = parseFloat(display.textContent)

  if (!isNaN(result)){
    result = (result / 100);
    display.textContent = result;
    expression = result;
  }
}

document.getElementById("convert").onclick = change;

function change () {
  let display = document.getElementById("inputDisplay");
  let result = parseFloat(display.textContent)

  if (!isNaN(result)){
    result = result * -1;
    display.textContent = result ;
    expression = result;
  }
}

document.getElementById("clear").onclick = clearCurrent;

function clearCurrent (){

}

const display = document.getElementById("inputDisplay");
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (expression.length <12) {
      if (button.classList.contains("number")) {
        expression += button.textContent;
        display.innerHTML = expression;
        lastInputIsOperator = false;
      } else if (!lastInputIsOperator) {
        if (button.classList.contains("operator")) {
          if (result !== null) {
            expression = result + button.textContent;
            result = null;
          } else {
            expression += button.textContent;
          }
          display.innerHTML = expression;
          lastInputIsOperator = true;
        }else if (button.id === "decimal") {
          if (!expression.includes(".")) { 
            expression += ".";
            display.innerHTML = expression;
            lastInputIsOperator = false; 
          }
        }
    } 
   }
  });
});


document.getElementById("equals").onclick = function calculate() {
  let operands = expression.split(/\+|-|\x|\÷/);
  let a = parseFloat(operands[0]);
  let b = parseFloat(operands[1]);
  let operator = expression.match(/[\+\-\x÷]/);
  if (!operator) {
    return;
  }
  operator = operator[0];
  let newResult = operate(operator, a, b);
  if (newResult !== null && newResult % 1 !=0) {
    result = newResult.toFixed(2);
  } else {
    result = newResult;
  }
  inputDisplay.textContent = result !== null ? result : "";
  storedDisplay.textContent = expression + "=";
  expression = "";
  lastInputIsOperator = false; 
  
};


function add(a, b) {
    return (a + b);
}

function subtract(a, b){
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
  }

function divide(a, b){
    return (a/b);
}


  
  function operate(operator, a, b){
    if (operator === "+"){
        return add(a, b);
    } else if (operator === "-"){
        return subtract(a, b);
    } else if (operator === "x"){
        return multiply(a, b);
    } else if (operator === "÷") {
        return divide(a, b);
    } else {
        return null;
    }
}

  
  
  
  

