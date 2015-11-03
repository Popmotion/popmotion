"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = (function () {
    function Queue() {
        _classCallCheck(this, Queue);

        this.clear();
    }

    /*
        Add a set of arguments to queue
    */

    Queue.prototype.add = function add() {
        this.queue.push([].slice.call(arguments));
    };

    /*
        Get next set of arguments from queue
    */

    Queue.prototype.next = function next() {
        var direction = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

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
    };

    /*
        Replace queue with empty array
    */

    Queue.prototype.clear = function clear() {
        this.queue = [];
        this.index = 0;
    };

    return Queue;
})();

module.exports = Queue;