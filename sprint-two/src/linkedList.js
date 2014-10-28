var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if( !this.tail ){
      this.head = this.tail = makeNode(value);
      this.head.next = this.tail;
    }else{
      var node = this.head;
      while( node ){
        if( node.next === this.tail ){
          node.next.next = this.tail = makeNode(value);
          break;
        }else{
          node = node.next;
        }
      }
    }
  };

  list.removeHead = function(){
    var head = this.head;
    this.head = head.next;
    return head.value;
  };

  list.contains = function(target){
    var node = this.head;
    while( node ){
      if( node.value === target ){
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * remove head- constant time
 * contains - linear time
 * add to tail - linear time
 */
