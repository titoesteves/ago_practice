var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value){
    var node = Node(value);
    if(list.head === null) {
      list.head = node;
    }
    if(list.tail) {
      list.tail.next = node;
    }
    list.tail = node;
  };
  list.removeHead = function(){
    if(list.head) {
      var temp = list.head;
      list.head = list.head.next;
    }
    return temp.value;
  };
  list.contains = function(value){
    if(list.head) {
      while(list.head !== null) {
        if(list.head.value === value) {
          return true;
        }
        list.head = list.head.next;
      }
    }
    return false;
  };
  return list;
};


var Node = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};