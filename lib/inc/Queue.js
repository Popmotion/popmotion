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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvUXVldWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU0sS0FBSztBQUNQLGFBREUsS0FBSyxHQUNPOzhCQURaLEtBQUs7O0FBRUgsWUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2hCOzs7OztBQUFBO2lCQUhDLEtBQUs7OzhCQVFEO0FBQ0YsZ0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDN0M7Ozs7Ozs7OytCQUttQjtnQkFBZixTQUFTLHlEQUFHLENBQUM7O0FBQ2QsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLO2dCQUNsQixTQUFTLEdBQUcsS0FBSztnQkFDakIsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLOzs7QUFBQyxBQUd2QixnQkFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQ3BDLHlCQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLG9CQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxTQUFTOzs7QUFBQyxhQUdsQyxNQUFNO0FBQ0gsd0JBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDaEI7O0FBRUQsbUJBQU8sU0FBUyxDQUFDO1NBQ3BCOzs7Ozs7OztnQ0FLTztBQUNKLGdCQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixnQkFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDbEI7OztXQXZDQyxLQUFLOzs7QUEwQ1gsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMiLCJmaWxlIjoiUXVldWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBRdWV1ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBZGQgYSBzZXQgb2YgYXJndW1lbnRzIHRvIHF1ZXVlXG4gICAgKi9cbiAgICBhZGQoKSB7XG4gICAgICAgIHRoaXMucXVldWUucHVzaChbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCBuZXh0IHNldCBvZiBhcmd1bWVudHMgZnJvbSBxdWV1ZVxuICAgICovXG4gICAgbmV4dChkaXJlY3Rpb24gPSAxKSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IHRoaXMucXVldWUsXG4gICAgICAgICAgICByZXR1cm5WYWwgPSBmYWxzZSxcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIG91ciBpbmRleCBpcyBiZXR3ZWVuIDAgYW5kIHRoZSBxdWV1ZSBsZW5ndGgsIHJldHVybiB0aGF0IGl0ZW1cbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVyblZhbCA9IHF1ZXVlW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpbmRleCArIGRpcmVjdGlvbjtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGNsZWFyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXR1cm5WYWw7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUmVwbGFjZSBxdWV1ZSB3aXRoIGVtcHR5IGFycmF5XG4gICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUXVldWU7Il19