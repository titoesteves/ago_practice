var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0; 
  this.stack = {};
};

Stack.prototype.size = function(){
  return this.count;
};
Stack.prototype.push = function(value){
  this.stack[this.count] = value;
  this.count++;
};
Stack.prototype.pop = function(){
  if(this.count > 0) {
    this.count--;
    var temp = this.stack[this.count];
    delete this.stack[this.count];
  }
  return temp;
};

