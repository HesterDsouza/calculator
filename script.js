
// const sum = function() {
//   let total = 0;
//     for (let i=0;i<array.length;i++){
//         if(typeof array[i] == 'number'){
//             total += array[i];
//         }else {
//             console.log('Error: Array contains non-numeric element');
//         }
//     }    
//     // return total;
//     console.log("Sum: ",total)
// };

// const multiply = function() {
//   const product = array.reduce((accumulator, currentValue) => accumulator * currentValue);
// //   return product;
// console.log("Product: ",product)
// };

// const power = function(){
// //   return num1 ** raisedTo;
// console.log(`Power of ${num1} raised to ${raisedTo} : ${num1 ** raisedTo}`)
// };

// const factorial = function(n){
//   if(n === 0 || n === 1){
//       return 1;
//   } else {
//       return n*factorial(n - 1);
//   }
// };

//Main

let displayValue = '';
let firstNumber = '';
let operator = '';
let secondNumber = '';

function appendNumber(number) {
  if (displayValue === 'Error') {
    displayValue = '';
  }
  displayValue += number;
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function setOperator(op) {
  if (operator === '') {
    firstNumber = displayValue;
    operator = op;
    displayValue = '';
    updateDisplay();
  }
}

function calculate() {
  if (operator !== '' && displayValue !== '') {
    secondNumber = displayValue;
    let result;
    switch (operator) {
      case '+':
        result = add(parseFloat(firstNumber), parseFloat(secondNumber));
        break;
      case '-':
        result = subtract(parseFloat(firstNumber), parseFloat(secondNumber));
        break;
      case '*':
        result = multiply(parseFloat(firstNumber), parseFloat(secondNumber));
        break;
      case '/':
        if (secondNumber === '0') {
          result = 'Error';
        } else {
          result = divide(parseFloat(firstNumber), parseFloat(secondNumber));
        }
        break;
    }
    displayValue = result.toString();
    updateDisplay();
    firstNumber = '';
    operator = '';
    secondNumber = '';
  }
}

function clearDisplay() {
  displayValue = '';
  firstNumber = '';
  operator = '';
  secondNumber = '';
  updateDisplay();
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  const display = document.querySelector('.display');
  display.textContent = displayValue;
}

function add(a, b) {
  return Math.round((a + b) * 1000) / 1000;
}

function subtract(a, b) {
  return Math.round((a - b) * 1000) / 1000;
}

function multiply(a, b) {
  return Math.round((a * b) * 1000) / 1000;
}

function divide(a, b) {
  return Math.round((a / b) * 1000) / 1000;
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || key === '.') {
    appendNumber(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    setOperator(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    backspace();
  }
});
