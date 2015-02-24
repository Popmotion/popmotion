"use strict";

var Queue = function () {
        this.clear();
    };

Queue.prototype = {
    
    add: function () {
        this.queue.push([].slice.call(arguments));
        console.log(this.queue);
    },
    
    next: function () {
        return this.queue.shift()[0];
    },

    clear: function () {
        this.queue = [];
    }
};

module.exports = Queue;