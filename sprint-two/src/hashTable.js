var HashTable = function(){
  this._limit = 8;
  this._size = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // grab or initialize bucket at hashed index
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];

  // insert new key-value pair to bucket & replace bucket into hash table
  bucket.push([k, v]);
  this._storage.set(i, bucket);
  this._size++;

  // if over capacity, increase hash table
  if( this._size / this._limit >= 0.75){
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  // grab bucket at hashed index
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];

  // check bucket for key match & if so, return associated value
  if( bucket ){
    for( var j = 0; j < bucket.length; j++ ){
      var tuple = bucket[j];
      if( tuple[0] === k ){
        return tuple[1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  // grab bucket at hashed index
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if( bucket ){
    // look through bucket for key match & if so, slice tuple from bucket
    for( var j = 0; j < bucket.length; j++ ){
      var tuple = bucket[j];
      if( tuple[0] === k ){
        bucket = bucket.slice(0, j).concat(bucket.slice(j + 1, bucket.length));
        this._size--;
      }
    }
    // replace bucket in table
    this._storage.set(i, bucket);
  }
  // if under capacity, shrink hash table
  if( this._size / this._limit < 0.25 ){
    this.resize(this._limit / 2);
  }
};

HashTable.prototype.resize = function(newLimit){
  // store old table
  var oldStorage = this._storage;

  // update size & create new storage
  this._limit = newLimit;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;

  var table = this;
  oldStorage.each(function(bucket){
    if( bucket ){
      // find & re-insert all tuples
      for( var i = 0; i < bucket.length; i++ ){
        var tuple = bucket[i];
        table.insert(tuple[0], tuple[1]);
      }
    }
  })
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert - constant
 * retrieve - constant
 * remove - constant (ignoring slice)
 * resize - linear
 */
