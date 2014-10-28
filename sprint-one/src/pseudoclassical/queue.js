var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.capacity = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.capacity] = value;
  this.capacity++;
};
Queue.prototype.dequeue = function(){
  if( this.capacity ){
    var temp = this.storage["0"];
    for( var i = 0; i < this.capacity; i++ ){
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.capacity];
    this.capacity--;
    return temp;
  }
};
Queue.prototype.size = function(){
  return this.capacity;
};

