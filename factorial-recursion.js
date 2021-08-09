function factorial(n) {
  if (n == 1) {
    return 1;

  }
  return n * factorial(n - 1); // aita korar udesso holo 5 X 4 X 3 X 2 X1

}
const myFactorial = factorial(7);
nknol
console.log(myFactorial);