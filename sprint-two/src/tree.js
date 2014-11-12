var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = null;
  newTree.parent = null;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children = this.children || [];
  var child = makeTree(value);
  child.parent = this;
  this.children.push(child);
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

treeMethods.removeFromParent = function(){
  // set parent's children to null
  var parent = this.parent;
  if( parent.children.length === 1 ){
    parent.children = null;
  }else if( parent.children.length > 1 ){
    parent.children.splice(parent.children.indexOf(this), 1);
  }

  // set their parent to null
  this.parent = null;

};


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild - constant
 * contains - linear
 * removeFromParent - linear for increase in removed tree's siblings
 */
