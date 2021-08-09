function inchesToFeet(inches) {
  var feet = inches / 12;
  return feet;

}
var myHeight = 160;
var feet = inchesToFeet(myHeight);
console.log(feet);