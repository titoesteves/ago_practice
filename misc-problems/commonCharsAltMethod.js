// RETURN A STRING WITH THE COMMON CHARACTERS
function commonCharacters(str1,str2){
  var obj = objectify(str1, str2);
  console.log(obj)
  var result = [];
  for(var i = 0; i < str1.length; i++) {
      var ltr = str1.charAt(i);
      if(obj[ltr] >= 2) {
          obj[ltr] = 1;
          result.push(ltr);
      }
  }
  return result.join('');
}

function objectify(str1, str2) {
  var obj = {};
  for(var i = 0; i < str1.length; i++) {
    var letter = str1.charAt(i);
    if(letter !== ' ') {
      obj[letter] = 1;
    }
  }
  for(var j = 0; j < str2.length; j++) {
    var ltr = str2.charAt(j);
    if(obj.hasOwnProperty(ltr)){
        if(ltr !== ' ') {
            obj[ltr] = obj[ltr] + 1;
        }
      
    }
    else {
      obj[ltr] = 1;
    }
  }
  return obj;
}