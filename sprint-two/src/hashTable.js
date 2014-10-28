var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i] = this._storage[i] || [];
  this._storage[i].push([k, v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if( !this._storage[i] ){
    return null;
  }
  var bucket = this._storage[i];
  for( var j = 0; j < bucket.length; j++ ){
    var tuple = bucket[j];
    if( tuple[0] === k ){
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if( this._storage[i] ){
    var bucket = this._storage[i];
    for( var j = 0; j < bucket.length; j++ ){
      var tuple = bucket[j];
      if( tuple[0] === k ){
        delete this._storage[i];
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * insert - constant
 * retrieve - constant
 * remove - constant ?
 */
