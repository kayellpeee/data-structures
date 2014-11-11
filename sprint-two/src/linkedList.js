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

  list.addToHead = function(value){
    var newHead = makeNode(value);
    if( this.head ){
      newHead.next = this.head || null;
      this.head.prev = newHead;
    }
    this.head = newHead;
    if( !this.tail ){
      this.tail = this.head;
    }
  };

  list.removeTail = function(){
    if( this.tail ){
      var temp = this.tail.value;
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return temp;
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
