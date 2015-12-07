function binarySearch (array, target) {
  var min = 0;
  var max = array.length - 1;
  while(min <= max){
    var mid = Math.floor((min + max) / 2);
    if(target < array[mid]){
      max = mid - 1;
    }
    else if(target > array[mid]){
      min = mid + 1;
    }
    else {
      return mid;
    }
  }
  return -1;
}