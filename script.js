
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
    displayVal = '';
    updateDisplay();
};

function appendNumber(number){
    displayVal += number;
    updateDisplay();
}

function setOperator(selectedOperator){
    operator = selectedOperator;
    console.log("Operator:", operator)
    firstNum = parseFloat(displayVal);
    console.log("First Number",firstNum)
    displayVal = "";
}

function calculate(){
    secondNum = parseFloat(displayVal);
    console.log("Second Number",secondNum)
    const result = operate(operator, firstNum, secondNum);
    displayVal = result.toString();
    updateDisplay();
}

function updateDisplay(){
    document.querySelector(".display").value = displayVal;
}