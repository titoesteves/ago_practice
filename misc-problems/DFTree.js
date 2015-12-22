Tree.prototype.DFSelect = function(filter) {  
 var results = [];
 function recurse(node, depth) {
   if(filter(node.value, depth)) {
     results.push(node.value);
   }
   for(var i = 0; i < node.children.length; i++) {
     recurse(node.children[i], depth + 1)
   }
 }
 recurse(this, 0);
 return results;
};