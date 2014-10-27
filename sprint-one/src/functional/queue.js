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
    if( size ){
      var temp = storage["0"];
      for( var i = 0; i < size; i++ ){
        storage[i] = storage[i + 1];
      }
      delete storage[size];
      size--;
      return temp;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
