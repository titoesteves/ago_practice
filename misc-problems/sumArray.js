// Given an array of numbers, calculate the greatest contiguous
// sum of numbers in it. A single array item will count as
// a contiguous sum.

// array:
// [ 1, 2, 3 ]  -> 6
// array:
// [ 4, -1, 5 ]  -> 8
// array:
// [ 10, -11, 11 ] -> 11

var sumArray = function(array){
  var max = Number.NEGATIVE_INFINITY;
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum += array[i];
    if(sum > max){
      max = sum;
    }
    if(sum < 0){
      sum = 0
    }
  }
  return max;
}