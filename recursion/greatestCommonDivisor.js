/*
Write a function that takes two numbers and returns the greatest common divisor.
*/

function gcd(a,b) {
  if(b === 0) {
    return a;
  }
  return gcd(b, a % b);

}