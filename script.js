
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

let firstNum = "";
let operator = "";
let secondNum = "";
let displayVal = "";

function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    if (b === 0) 
        return "Error";
    else
        return a / b;
}

function operate(operator, a, b){
    switch(operator){
        case "+":
            return add(a,b)

        case "-":
            return sub(a,b)

        case "*":
            return multiply(a,b)

        case "/":
            return divide(a,b)
        
        default:
            return "Invalid Operator"
    }
}

function clearDispaly(){
    firstNum = '';
    operator = '';
    secondNum = '';
    displayVal = '';
    updateDisplay();
};

function appendNumber(number){
    displayVal += number;
    updateDisplay();
}

function setOperator(selectedOperator){
    firstNum = parseFloat(displayVal);
    console.log("First Number",firstNum)
    operator = selectedOperator;
    console.log("Operator:", operator)
    displayVal = "";
}

function calculate(){
    if (operator && secondNum !== '') {
        secondNum = parseFloat(displayVal);
        if (operator === '/' && secondNum === 0) {
            displayVal = 'Error: Division by zero';
        } else {
            const result = operate(operator, firstNum, secondNum);
            displayVal = parseFloat(result.toFixed(2)).toString();
            firstNum = displayVal; // Update firstNum with the result for continued calculations
            operator = '';
            secondNum = '';
        }
    } else {
        displayVal = 'Error: Incomplete expression';
    }
    updateDisplay();
}

function updateDisplay(){
    document.querySelector(".display").value = displayVal;
}

// document.addEventListener('keydown', function(event){
//     const key = event.key;

//     if(key >= '0' || key <= '9'){
//         appendNumber(key);
//     } else if(key === '+' || key === '-' || key === '*' || key === '/'){
//         setOperator(key);
//     } else if(key === 'Enter'){
//         calculate();
//     } else if(key === 'Escape'){
//         clearDispaly();
//     }
// });

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', function(){
        appendNumber(button.textContent);
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', function(){
        setOperator(button.textContent);
    });
});

document.querySelector("#enter").addEventListener('click', calculate);
document.querySelector("#clear").addEventListener('click', clearDispaly);