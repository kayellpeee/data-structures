var makeQueue = function(){
  var queue = {};
  var each = function( queue, queueMethods ){
    for(var key in queueMethods){
      queue[key] = queueMethods[key];
    }
  }
  queue.queueSize = 0;
  each(queue, queueMethods);
  return queue;
};

var queueMethods = {};

  queueMethods.enqueue = function(value){
    this[this.queueSize] = value;
    this.queueSize++;
  }

  queueMethods.dequeue = function(){
    if(this.queueSize > 0){
      this.queueSize--;
    }
    var result = this[0];
    delete this[0];
    for(var i = 0; i < this.queueSize; i++){
      this[i] = this[i+1];
    }
    return result;
  }

  queueMethods.size = function(){
    return this.queueSize;
  }
