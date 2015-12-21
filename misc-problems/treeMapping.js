Tree.prototype.map = function(callback) {
  var newTree = new Tree();
  function recurse(oldNode, newNode) {
    newNode.value = callback(oldNode.value);
    for(var i = 0; i < oldNode.children.length; i++) {
      var newChild = new Tree();
      newNode.addChild(newChild);
      recurse(oldNode.children[i], newChild);
    }
  }
  recurse(this, newTree);
  return newTree;
};