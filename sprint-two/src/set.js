var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = '';
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // (as long as it is not already in the set)
  if( this._storage.indexOf(item) === -1 ){
    // add a string to set._storage
    this._storage += item;
  }
};

setPrototype.contains = function(item){
  // if item is in the set return true
  if( this._storage.indexOf(item) > -1 ){
    return true;
  }
  // if not in set return false
  return false;
};

setPrototype.remove = function(item){
  // find index of item (minus 1)
  var start = this._storage.indexOf(item) - 1;
  // find length of item (minus 1)
  var length = item.length - 1;
  // copy current string in storage
  var currentStorage = this._storage;
  // if item is in string (+ remove it)
  if( currentStorage.indexOf(item) > -1 ){
    // set everything before item to storage
    this._storage = currentStorage.slice(0, start);
    // add everything after item to storage
    this._storage += currentStorage.slice(start + length, currentStorage.length - 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
    FUNCTION      TIME COMPLEXITY
    add             O(n)
    contains        O(n)
    remove          O(n)
 */
