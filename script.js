

document.querySelector("#storedDisplay");
document.getElementById("inputDisplay");
inputDisplay.textContent = "0";


let expression = "";
let result = null;
let operatorCount = 0;
let lastInputIsOperator = true;

document.getElementById("clear").onclick = reset;

function reset() {
    let display = document.getElementById("inputDisplay");
    let storedDisplay = document.getElementById("storedDisplay");
    result = null;
    display.textContent = 0;
    expression = "";
    storedDisplay.textContent = "";
}

document.getElementById("percent").onclick = percentage;
    
function percentage(){
  let display = document.getElementById("inputDisplay");
  let storedDisplay = document.getElementById("storedDisplay");
  let result = (result/100);
  display.textContent = result;
  expression = "";
  storedDisplay.textContent = "";
}

const display = document.getElementById("inputDisplay");
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.classList.contains("number")) {
      expression += button.textContent;
      display.innerHTML = expression;
      lastInputIsOperator = false;
    } else if (!lastInputIsOperator) { // Check if a number has been pressed
      if (button.classList.contains("operator")) {
        if (result !== null) {
          expression = result + button.textContent;
          result = null;
        } else {
          expression += button.textContent;
        }
        display.innerHTML = expression;
        lastInputIsOperator = true;
      } else if (button.id === "decimal") {
        if (!expression.includes(".")) { // Check if there's already a decimal point
          expression += ".";
          display.innerHTML = expression;
          lastInputIsOperator = false; // Allowing more numbers after decimal
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
  if (newResult !== null) {
    result = newResult;
  }
  display.textContent = result !== null ? result : "";
  expression = "";
  lastInputIsOperator = false; // Reset the tracking variable after calculation
  
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

  
  
  
  
