class Queue {
    constructor() {
        this.clear();
    }

    /*
        Add a set of arguments to queue
    */
    add() {
        this.queue.push([].slice.call(arguments));
    }

    /*
        Get next set of arguments from queue
    */
    next(direction = 1) {
        var queue = this.queue,
            returnVal = false,
            index = this.index;
        
        // If our index is between 0 and the queue length, return that item
        if (index >= 0 && index < queue.length) {
            returnVal = queue[index];
            this.index = index + direction;
        
        // Or clear
        } else {
            this.clear();
        }
        
        return returnVal;
    }

    /*
        Replace queue with empty array
    */
    clear() {
        this.queue = [];
        this.index = 0;
    }
}

module.exports = Queue;