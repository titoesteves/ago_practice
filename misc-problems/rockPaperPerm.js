function rockPaperPermutation(roundCount){
  var results = [];
  var options = ['r', 'p', 's'];
  if(roundCount === 0){
    return [];
  }
  function recurse(perm){
  	if(perm.length === roundCount) {
  		results.push(perm);
  		return;
  	}
  	for(var i = 0; i < options.length; i++) {
  		recurse(perm + options[i]);
  	}
  }
  recurse('');
  return results;
}
