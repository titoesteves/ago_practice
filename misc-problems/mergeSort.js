function mergeSort(arr){
  if(arr.length < 2){
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  var sorted = [];
  var indexLeft = 0;
  var indexRight = 0;
  while(indexLeft < left.length && indexRight < right.length){
    if(left[indexLeft] < right[indexRight]){
      sorted.push(left[indexLeft]);
      indexLeft++;
    }
    else{
      sorted.push(right[indexRight]);
      indexRight++;
    }
  }
  while(indexLeft < left.length){
    sorted.push(left[indexLeft]);
    indexLeft++;
  }
  while(indexRight < right.length){
    sorted.push(right[indexRight]);
    indexRight++;
  }
  return sorted;
}