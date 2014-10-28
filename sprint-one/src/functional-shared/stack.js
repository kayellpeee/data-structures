var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  _(someInstance).extend(stackMethods);
  someInstance.storage = {};
  someInstance.capacity= 0;
  return someInstance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.capacity] = value;
    this.capacity++;
  },
  pop: function(){
    if( this.capacity ){
      this.capacity--;
      var temp = this.storage[this.capacity];
      delete this.storage[this.capacity];
      return temp;
    }
  },
  size: function(){
    return this.capacity;
  }
};


