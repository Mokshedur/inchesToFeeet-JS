function factorial(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  return fact;

}
var firstFactorial = factorial(7);
console.log('factorial of 7 is ', firstFactorial);


var secondfact = factorial(9);
console.log('factorial of 9 is', secondfact);