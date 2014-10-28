var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = "";
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if( this._storage.indexOf(item) === -1 ){
    this._storage += item;
  }
};

setPrototype.contains = function(item){
  if( this._storage.indexOf(item) !== -1 ){
    return true;
  }
  return false;
};

setPrototype.remove = function(item){
  this._storage = this._storage.split(item).join("");
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add - linear
 * contains - linear
 * remove - linear
 */
