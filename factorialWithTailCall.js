/**
 * http://usejsdoc.org/
 */

function normalFactorial(inputNumber){
if(inputNumber<=1){
return 1;
}else{
   return inputNumber * normalFactorial(inputNumber-1);
}
}


function tailCallFactorial(inputNumber, next=1){
if(inputNumber<=1){
return 1*next;
}else{
   let result = inputNumber * next;
   return tailCallFactorial(inputNumber-1, result);
}
}
var fac = tailCallFactorial(50);
console.log(fac);