"use strict";

var Queue = function Queue() {
    this.clear();
};

Queue.prototype = {

    /*
        Add a set of arguments to queue
    */
    add: function add() {
        this.queue.push([].slice.call(arguments));
    },

    /*
        Get next set of arguments from queue
    */
    next: function next(direction) {
        var queue = this.queue,
            returnVal = false,
            index = this.index;

        direction = arguments.length ? direction : 1;

        // If our index is between 0 and the queue length, return that item
        if (index >= 0 && index < queue.length) {
            returnVal = queue[index];
            this.index = index + direction;

            // Or clear
        } else {
                this.clear();
            }

        return returnVal;
    },

    /*
        Replace queue with empty array
    */
    clear: function clear() {
        this.queue = [];
        this.index = 0;
    }
};

module.exports = Queue;