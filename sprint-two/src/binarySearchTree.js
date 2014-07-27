var MakeBinarySearchTree = function(value){
	this.value = value;
};
    MakeBinarySearchTree.prototype.insert = function(value){
    	var placement = function(node) {
    		if(value > node.value){
    			if(node.right){
    				placement(node.right);
    			} else {
    				node.right = new MakeBinarySearchTree(value);
    			}
    		} else if(value < node.value){
    			if(node.left){
    				placement(node.left);
    			} else{
    				node.left = new MakeBinarySearchTree(value);
    			}
    		}
    	}
    	placement(this);
    }

    MakeBinarySearchTree.prototype.contains = function(value){
    	var result = false;
    	var search = function(node){
    		// debugger;
	    	if ( value > node.value ){
	    		if( node.right !== undefined){
	    			search(node.right);
	    		}
	    	}else if( value < node.value ){
	    		if( node.left !== undefined ){
		    		search(node.left);
	    		}
	    	}else if( value === node.value ){
	    		result = true;
	    	}
    	}
    	search(this);
    	return result;
    }

    MakeBinarySearchTree.prototype.depthFirstLog = function(callback){
    	var results = [];
    	var grabValues = function(node){
    		results.push(callback(node.value));
    		if(node.right){
    			grabValues(node.right);
    		}
    		if(node.left){
    			grabValues(node.left);
    		}
    	}
    	grabValues(this);
    	return results;
    }

/*
 * Complexity: What is the time complexity of the above functions?
 	FUNCTION 			TIME COMPLEXITY
 	 insert					O(n)
 	 contains				O(√n)
 	 depthFirstLog			O(n)
 */
