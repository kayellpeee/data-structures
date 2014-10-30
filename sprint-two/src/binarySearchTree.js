var makeBinarySearchTree = function(value){
  this.value = value;
  this.right = null;
  this.left = null;
};

makeBinarySearchTree.prototype.insert = function(value){
  var newTree = new makeBinarySearchTree(value);
  var checkPosition = function(node){
    if( value > node.value ){
      if( node.right ){
        checkPosition(node.right);
      }else{
        node.right = newTree;
      }
    }else if( value < node.value ){
      if( node.left ){
        checkPosition(node.left);
      }else{
        node.left = newTree;
      }
    }
  };
  checkPosition(this);
};

makeBinarySearchTree.prototype.contains = function(value){
  var found = false;
  var searchTree = function(node){
    if( node.value === value ){
      return found = true;
    }
    if( value < node.value && node.left ){
      searchTree(node.left);
    }else if( value > node.value && node.right ){
      searchTree(node.right);
    }
  };
  searchTree(this);
  return found;
};

makeBinarySearchTree.prototype.depthFirstLog = function(callback){
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert - logn
 * contains - logn
 */
