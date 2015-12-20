function evenOccurence (arr) {
  var occurence = {};
  arr.forEach(function(item){
    if(occurence[item] !== undefined) {
      occurence[item] = !occurence[item];
    }
    else {
      occurence[item] = false;
    }
  }); 
  console.log(occurence)
  for(var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if(occurence[item]) {
      return item;
    }
  }
  return null;
}