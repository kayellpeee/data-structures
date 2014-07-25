var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);  //makes newNode
    if(this.tail !== null){
      this.tail.next = newNode;     //old tail node now links to newNode
    }else {
      this.head = newNode;
    }
    this.tail = newNode;  //tail is always updated to newNode
  };

  list.removeHead = function(){
    var headVal = this.head.value;
    this.head = this.head.next;
    return headVal;
  };

  list.contains = function(target){
    var container = this.head;
    while(target !== container.value){
        if(container.next === null){
          return false;
        }
        container = container.next;
    }
    return true;
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
     FUNCTIONS       TIME COMPLEXITY
     addToTail        O(1)
     removeHead       O(1)
     contains         O(n)
     makeNode         O(1)
 */
