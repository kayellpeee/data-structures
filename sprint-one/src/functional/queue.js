var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
      var result = storage[0];
      delete storage[0];
      for(var i = 0; i < size-1; i++){
        storage[i] = storage[i+1];
      }
      if(size > 0){
        size--;
      }
      return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
