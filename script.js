let num1 = 4;
let num2 = 2;
let array = [4,2];
let raisedTo = 2;

const add = function() {
	// return num1 + num2;
    console.log("Addition: ",num1 + num2)
};

const subtract = function() {
	// return num1 - num2;
    console.log("Difference: ",num1 - num2)
};

// const sum = function() {
//   let total = 0;
//     for (let i=0;i<array.length;i++){
//         if(typeof array[i] == 'number'){
//             total += array[i];
//         }else {
//             console.log('Error: Array contains non-numeric element');
//         }
//     }    
//     return total;
// };

const multiply = function() {
  const product = array.reduce((accumulator, currentValue) => accumulator * currentValue);
//   return product;
console.log("Product: ",product)
};

const divide = function(){
    if (num2 === 0) alert("Error. Divisor cannot be 0")
        // else return num1 / num2;
    else console.log("Division: ", num1 / num2)
}

// const power = function(){
//   return num1 ** raisedTo;
// };

// const factorial = function(n){
//   if(n === 0 || n === 1){
//       return 1;
//   } else {
//       return n*factorial(n - 1);
//   }
// };


//Dom

const container = document.querySelector(".calcContainer");

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", add);

const diffBtn = document.querySelector(".subtract");
diffBtn.addEventListener("click", subtract);

const productBtn = document.querySelector(".multiply");
productBtn.addEventListener("click", multiply);

const divideBtn = document.querySelector(".divide");
divideBtn.addEventListener("click", divide);
