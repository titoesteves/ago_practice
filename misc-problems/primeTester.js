function primeTester(num){
  if(num < 3 && num > 0){
    return num === 2;
  }
  var sqrt = Math.sqrt(num);
  for(var i = 3; i <= sqrt; i = i + 2){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}