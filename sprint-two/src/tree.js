var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
 var tree = Tree(value);
 this.children.push(tree);
};

treeMethods.contains = function(target) {
  var result = false;
  function recurse(tree) {
    if(tree.value === target) {
      result = true;
    }
    if(tree.children.length === 0) {
      return;
    }
    for(var i = 0; i < tree.children.length; i++) {
      recurse(tree.children[i]);
    }
  }
  recurse(this);
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
