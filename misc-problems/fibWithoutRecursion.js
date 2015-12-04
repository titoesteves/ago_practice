// solve fibonacci without recursion
function nthFibonacci(num){
  if (num < 2){
    return num;
  }
  var prev = 0,
      curr = 1,
      fib = 1;
  for(var i = 2; i <= num; i++){
    fib = prev + curr;
    prev = curr;
    curr = fib;
  }
  return fib;
}