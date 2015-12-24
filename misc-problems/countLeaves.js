Tree.prototype.countLeaves = function() {
  var count = 0;
  function recurse(node) {
    if (node.children.length === 0) {
      count++;
    }

    node.children.forEach(function(child) {
      recurse(child);
    });
  }

  recurse(this);
  return count;
};
