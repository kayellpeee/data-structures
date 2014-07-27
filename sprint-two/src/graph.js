var Graph = function(){
	this.keyCount = 0;
	this.storage = {};
};

Graph.prototype.addNode = function(newNode, toNode){
	this.storage[newNode] = [];
	if( this.keyCount === 1 ){
		this.storage[this.firstKey].push(newNode);
	}
	if( this.keyCount === 0){
		this.firstKey = newNode;
	}
	if( toNode ){
		this.storage[newNode].push(toNode);
	}
	this.keyCount++;
};

Graph.prototype.contains = function(node){
	if( this.storage.hasOwnProperty(node) ){
		return true;
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	delete this.storage[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
	for( var i = 0; i < this.storage[fromNode].length; i++ ){
		if( this.storage[fromNode][i] === toNode ){
			return true;
		}
	}
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	if( this.storage[fromNode] && this.storage[toNode]){
		this.storage[fromNode].push(toNode);
	}
};

Graph.prototype.removeEdge = function(fromNode, toNode){
		if( this.storage[fromNode].indexOf(toNode) !== -1 ){
			this.storage[fromNode].splice([this.storage[fromNode].indexOf(toNode)], 1);
		}
		var noEdges = function(node) {
			var result = true;
			for(var key in this.storage) {
				result = this.getEdge(node, key);
				result = this.getEdge(key, node);

			}
			if(result === false) {
				this.removeNode(node);
			}	
		}
		noEdges.call(this, fromNode);
		noEdges.call(this, toNode);
	};

/*
 * Complexity: What is the time complexity of the above functions?
 	FUNCTIONS 			TIME COMPLEXITY
 	addNode					O(1)
 	contains				O(1)
 	removeNode				O(1)
 	getEdge					O(1)
 	addEdge					O(1)
 	removeEdge				O(n^2)
 */
