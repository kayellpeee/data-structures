var makeTree = function(value){
  var newTree = {
  	addChild : treeMethods.addChild,
  	contains : treeMethods.contains
  };
  newTree.value = value;
  newTree.children = undefined;
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
	//create a node with a value
	var newNode = makeTree(value);
	//if no children nodes yet
	if(this.children === undefined) {
		//attach new node as a child of parent node
		this.children = [newNode];
	  //if children nodes exist
	} else {
		//push new child to existing children
		this.children.push(newNode);
	}
};

treeMethods.contains = function(target){
	// result variable will let us know when we find the target
	var result = false;
	if(this.value === target){
		// if we found our target, set result to true
		result = true;
	}
	if( this.children !== undefined ){
		//loop through this.children
	    for(var i = 0; i < this.children.length; i++) {
	    	// call .contains on current child
	    	var currentNode = this.children[i];
	    	// update result
	    	result = result || currentNode.contains(target);
		}
    }
    // return result if we ran through everything
    return result;
};




/*
 * Complexity: What is the time complexity of the above functions?
 	FUNCTION              TIME COMPLEXITY
 	addChild				O(1)
 	contains				O(n)
 */
