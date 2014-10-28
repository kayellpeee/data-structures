var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  this.children = this.children || [];
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var found = false;
  var recurse = function(node){
    if( node.value === target ){
      return found = true;
    }
    if( node.children ){
      for( var i = 0; i < node.children.length; i++ ){
        recurse(node.children[i]);
      }
    }
  }
  recurse(this);
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild - constant
 * contains - linear
 */
