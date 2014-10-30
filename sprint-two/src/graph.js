var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  if( toNode ){
    this.nodes[newNode] = {};
    this.nodes[newNode][toNode] = true;
    this.nodes[toNode][newNode] = true;
  }else if( Object.keys(this.nodes).length === 1 ){
    this.nodes[newNode] = {};
    this.addEdge(Object.keys(this.nodes)[0], newNode);
  }else{
    this.nodes[newNode] = {};
  }
};

Graph.prototype.contains = function(node){
  for( var key in this.nodes ){
    if( key === node ){
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  for( var key in this.nodes[node] ){
    delete this.nodes[key][node];
  }
  return delete this.nodes[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if( this.nodes[fromNode][toNode] ){
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode] = this.nodes[fromNode] || {};
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
  checkEdgeCount.call(this, fromNode);
  checkEdgeCount.call(this, toNode);

  function checkEdgeCount(node){
    if( !Object.keys(this.nodes[node]).length ){
      this.removeNode(node);
    }
  }
};

Graph.prototype.forEachNode = function(callback){
  for( var key in this.nodes ){
    callback(key);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addNode - constant
 * contains - linear
 * removeNode - linear
 * getEdge - constant
 * addEdge - constant
 * removeEdge - linear (for amount of edges a node has, not amount of nodes in graph)
 * forEachNode - linear
 */
