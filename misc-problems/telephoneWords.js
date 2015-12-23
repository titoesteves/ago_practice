function telephoneWords(digitString){
  var keys = {
    1: ['1'],
    2: ['A', 'B', 'C'],
    3: ['D', 'E', 'F'],
    4: ['G', 'H', 'I'],
    5: ['J', 'K', 'L'],
    6: ['M', 'N', 'O'],
    7: ['P', 'Q', 'R', 'S'],
    8: ['T', 'U', 'V'],
    9: ['W', 'X', 'Y', 'Z'],
    0: ['0']
};
  var result = [];
  function recurse(perm) {
    var arr = keys[digitString[perm.length]];
    if(perm.length === digitString.length) {
      result.push(perm);
      return;
    }
    arr.forEach(function(letter){
      recurse(perm + letter);
    });
  }
  recurse('');
  return result;
}