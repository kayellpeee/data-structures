var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.capacity = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.capacity] = value;
  this.capacity++;
};
Stack.prototype.pop = function(){
  if( this.capacity ){
    this.capacity--;
    var temp = this.storage[this.capacity];
    delete this.storage[this.capacity];
    return temp;
  }
};
Stack.prototype.size = function(){
  return this.capacity;
};
