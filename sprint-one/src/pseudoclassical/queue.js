var Queue = function() {
	this.queueSize = 0;
	this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

	Queue.prototype.enqueue = function(value) {
		this.storage[this.queueSize] = value;
		this.queueSize++;
	}

	Queue.prototype.dequeue = function() {
		if(this.queueSize > 0) {
			this.queueSize--;
		}
		var result = this.storage[0];
		delete this.storage[0];
		for(var i = 0; i < this.queueSize; i++) {
			this.storage[i] = this.storage[i + 1];
		}
		return result;
	}

	Queue.prototype.size = function() {
		return this.queueSize;
	}