// RETURN A STRING WITH THE COMMON CHARACTERS
function commonCharacters(str1,str2) {
  var s1 = objectify(str1);
  var s2 = objectify(str2);
  var result = '';
  for (var prop in s1) {
    if (s1.hasOwnProperty(prop) && s2.hasOwnProperty(prop)) {
      if (prop !== ' ') {
        result += prop;
      }
    }
  }

  return result;
}

function objectify(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    obj[str[i]] = true;
  }

  return obj;
}
