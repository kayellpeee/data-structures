var makeStack = function() {
  var stack = {};
  stack.push = stackMethods.push;
  stack.pop = stackMethods.pop;
  stack.size = stackMethods.size;
  stack.stackSize = 0;
  stack.storage = {};
  return stack;
};

var stackMethods = {};

  stackMethods.push = function(value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
  }

  stackMethods.pop = function() {
    if(this.stackSize > 0) {
      this.stackSize--;
    }
    var result = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return result;
  }

  stackMethods.size = function() {
    return this.stackSize;
  }
