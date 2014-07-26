var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //hashes the key
  var i = getIndexBelowMaxForKey(k, this._limit);
  //if storage[i] does not hold anything,
  if( !Array.isArray(this._storage[i]) ){
  	//make storage[i] an array
  	this._storage[i] = [];
  }
  //push value (v) to storage[i]
  this._storage[i].push(v);
  // console.log(this._storage[i]);
};

HashTable.prototype.retrieve = function(k){
  //hash the key
  var i = getIndexBelowMaxForKey(k, this._limit);

  if(Array.isArray(this._storage[i])) {
    // if storage[i] is an array with length > 1
  	if(this._storage[i].length > 1) {
  		// loop over array
  		for(var j = 0; j < this._storage[i].length; j++) {
  			// to find the correct value
  			if(this._storage[i][j] === k) {
  				// set result equal to that value
  				var result = this._storage[i][j];
  			}
  		}
  	}else {
        // else set result var to value at storage[i]
  		var result = this._storage[i][0];
  	}
    // return result var
  	return result;
  }
  return this._storage[i];
};

HashTable.prototype.remove = function(k){
	//hash the key
	var i = getIndexBelowMaxForKey(k, this._limit);
	//overwrite value at index with null
	this._storage[i] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
    FUNCTION        TIME COMPLEXITY
    insert            O(1)
    retrieve          O(1) - until buckets become very big
    remove            O(1)
    hashfunction      O(1)
 */
