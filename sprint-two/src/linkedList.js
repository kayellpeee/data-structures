var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //makes newNode
    var newNode = makeNode(value);
    if(this.tail !== null){
      //old tail node now links to newNode
      this.tail.next = newNode;     
    }else {
      this.head = newNode;
    }
    //tail is always updated to newNode
    this.tail = newNode;  
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
