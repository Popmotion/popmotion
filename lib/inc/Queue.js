"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = (function () {
    function Queue() {
        _classCallCheck(this, Queue);

        this.clear();
    }

    /*
        Add a set of arguments to queue
    */

    _createClass(Queue, [{
        key: "add",
        value: function add() {
            this.queue.push([].slice.call(arguments));
        }

        /*
            Get next set of arguments from queue
        */
    }, {
        key: "next",
        value: function next() {
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
        }

        /*
            Replace queue with empty array
        */
    }, {
        key: "clear",
        value: function clear() {
            this.queue = [];
            this.index = 0;
        }
    }]);

    return Queue;
})();

module.exports = Queue;