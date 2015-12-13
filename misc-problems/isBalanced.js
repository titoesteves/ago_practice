function isBalanced(string){
  var stack = [];
  for(var i = 0; i < string.length; i++) {
    if(string.charAt(i) === '(') {
      stack.push(string.charAt(i))
    }
    else if(string.charAt(i) === ')'){
      var result = stack.pop();
      if(result === undefined) {
        return false;
      }
    }
  }
  return stack.length === 0;
}