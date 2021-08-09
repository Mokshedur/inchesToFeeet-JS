//  const number = 8;
// var remainder = number % 2;
// console.log(remainder == 0);

function isEven(number) {
  if (number % 2 == 0) {
    return true;

  }
  return false;

}
const myNumber = 1650;
const ismyNumberEven = isEven(myNumber);
console.log('is her number even', ismyNumberEven)

const herNumber = 2021;
const isHerNumberEven = isEven(herNumber);
console.log('is her number even', isHerNumberEven)

function isOdd(number) {
  if (number % 2 == 1) {
    return true;
  }
  return false;
}
const myOddNumber = 25;
const isMyNumberOdd = isOdd(myOddNumber);
console.log('This is Odd Number', isMyNumberOdd);

