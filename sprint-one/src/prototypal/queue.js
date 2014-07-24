var makeQueue = function() {
  var queue = Object.create(queueMethods);
  queue.queueSize = 0;
  queue.storage = {};
  return queue;
};

var queueMethods = {};

  queueMethods.enqueue = function(value){
    this.storage[this.queueSize] = value;
    this.queueSize++;
  }

  queueMethods.dequeue = function(){
    if(this.queueSize > 0){
      this.queueSize--;
    }
    var result = this.storage[0];
    delete this.storage[0];
    for(var i = 0; i < this.queueSize; i++){
      this.storage[i] = this.storage[i+1];
    }
    return result;
  }

  queueMethods.size = function(){
    return this.queueSize;
  }
