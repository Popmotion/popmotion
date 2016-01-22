"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
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
}();

module.exports = Queue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvUXVldWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQUFNO0FBQ0YsYUFERSxLQUNGLEdBQWM7OEJBRFosT0FDWTs7QUFDVixhQUFLLEtBQUwsR0FEVTtLQUFkOzs7Ozs7QUFERSxvQkFRRixxQkFBTTtBQUNGLGFBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsR0FBRyxLQUFILENBQVMsSUFBVCxDQUFjLFNBQWQsQ0FBaEIsRUFERTs7Ozs7OztBQVJKLG9CQWVGLHVCQUFvQjtZQUFmLGtFQUFZLGlCQUFHOztBQUNoQixZQUFJLFFBQVEsS0FBSyxLQUFMO1lBQ1IsWUFBWSxLQUFaO1lBQ0EsUUFBUSxLQUFLLEtBQUw7OztBQUhJLFlBTVosU0FBUyxDQUFULElBQWMsUUFBUSxNQUFNLE1BQU4sRUFBYztBQUNwQyx3QkFBWSxNQUFNLEtBQU4sQ0FBWixDQURvQztBQUVwQyxpQkFBSyxLQUFMLEdBQWEsUUFBUSxTQUFSOzs7QUFGdUIsU0FBeEMsTUFLTztBQUNILHFCQUFLLEtBQUwsR0FERzthQUxQOztBQVNBLGVBQU8sU0FBUCxDQWZnQjs7Ozs7OztBQWZsQixvQkFvQ0YseUJBQVE7QUFDSixhQUFLLEtBQUwsR0FBYSxFQUFiLENBREk7QUFFSixhQUFLLEtBQUwsR0FBYSxDQUFiLENBRkk7OztXQXBDTjs7O0FBMENOLE9BQU8sT0FBUCxHQUFpQixLQUFqQiIsImZpbGUiOiJRdWV1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFF1ZXVlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFkZCBhIHNldCBvZiBhcmd1bWVudHMgdG8gcXVldWVcbiAgICAqL1xuICAgIGFkZCgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgR2V0IG5leHQgc2V0IG9mIGFyZ3VtZW50cyBmcm9tIHF1ZXVlXG4gICAgKi9cbiAgICBuZXh0KGRpcmVjdGlvbiA9IDEpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gdGhpcy5xdWV1ZSxcbiAgICAgICAgICAgIHJldHVyblZhbCA9IGZhbHNlLFxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgb3VyIGluZGV4IGlzIGJldHdlZW4gMCBhbmQgdGhlIHF1ZXVlIGxlbmd0aCwgcmV0dXJuIHRoYXQgaXRlbVxuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuVmFsID0gcXVldWVbaW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4ICsgZGlyZWN0aW9uO1xuICAgICAgICBcbiAgICAgICAgLy8gT3IgY2xlYXJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBSZXBsYWNlIHF1ZXVlIHdpdGggZW1wdHkgYXJyYXlcbiAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTsiXX0=