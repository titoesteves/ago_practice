var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.back = 0;
  this.queue = {};
};

Queue.prototype.size = function(){
  return this.back - this.front;
};

Queue.prototype.enqueue = function(data){
  this.queue[this.back] = data;
  this.back++;
};

Queue.prototype.dequeue = function(){
  if(this.size() > 0){
    var temp = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return temp;
  }
};

